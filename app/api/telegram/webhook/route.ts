import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

import { runBlogAutomation } from "@/lib/automation/pipeline";
import {
  getTelegramMessage,
  getOwnerChatId,
  parseBlogTopicFromText,
  parseFormsPageFromText,
  sendTelegramMessage,
  type TelegramUpdate,
} from "@/lib/automation/telegram";
import { getContactSubmissionsPaginated } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function hasValidWebhookSecret(request: NextRequest): boolean {
  const expected = process.env.TELEGRAM_WEBHOOK_SECRET;
  if (!expected) return true;

  const provided = request.headers.get("x-telegram-bot-api-secret-token");
  return provided === expected;
}

function formatContactSubmissionsPage(params: {
  page: number;
  totalPages: number;
  total: number;
  items: Array<{
    name: string;
    email: string;
    company: string | null;
    message: string;
    created_at: string;
  }>;
}): string {
  if (params.total === 0 || params.items.length === 0) {
    return "No contact form submissions found yet.";
  }

  const lines: string[] = [
    `Contact submissions page ${params.page}/${params.totalPages} (total ${params.total})`,
    "",
  ];

  params.items.forEach((item, index) => {
    const messagePreview =
      item.message.length > 180 ? `${item.message.slice(0, 180)}...` : item.message;
    lines.push(
      [
        `${index + 1}. ${item.name}`,
        `Email: ${item.email}`,
        `Company: ${item.company ?? "-"}`,
        `Date: ${new Date(item.created_at).toLocaleString("en-US", { timeZone: "UTC" })} UTC`,
        `Message: ${messagePreview.replace(/\n/g, " ")}`,
      ].join("\n"),
    );
    lines.push("");
  });

  if (params.page < params.totalPages) {
    lines.push(`Next page: /forms ${params.page + 1}`);
  }
  if (params.page > 1) {
    lines.push(`Previous page: /forms ${params.page - 1}`);
  }

  return lines.join("\n").trim();
}

export async function POST(request: NextRequest) {
  if (!hasValidWebhookSecret(request)) {
    return NextResponse.json({ ok: false, error: "Invalid webhook secret" }, { status: 401 });
  }

  const update = (await request.json().catch(() => ({}))) as TelegramUpdate;
  const message = getTelegramMessage(update);

  if (!message?.text) {
    return NextResponse.json({ ok: true, ignored: true });
  }

  const ownerChatId = getOwnerChatId();
  const isOwnerChat = ownerChatId === null || ownerChatId === message.chat.id;

  const formsPage = parseFormsPageFromText(message.text);
  if (formsPage !== null) {
    if (!isOwnerChat) {
      await sendTelegramMessage(message.chat.id, "Unauthorized.");
      return NextResponse.json({ ok: false, error: "Unauthorized chat" }, { status: 403 });
    }

    const pageResult = await getContactSubmissionsPaginated({
      page: formsPage,
      pageSize: 5,
    });

    await sendTelegramMessage(
      message.chat.id,
      formatContactSubmissionsPage({
        page: pageResult.page,
        totalPages: pageResult.totalPages,
        total: pageResult.total,
        items: pageResult.items,
      }),
    );

    return NextResponse.json({ ok: true, handled: true, command: "forms" });
  }

  const parsedTopic = parseBlogTopicFromText(message.text);

  if (parsedTopic === null) {
    return NextResponse.json({ ok: true, ignored: true });
  }

  if (!isOwnerChat) {
    await sendTelegramMessage(message.chat.id, "Unauthorized.");
    return NextResponse.json({ ok: false, error: "Unauthorized chat" }, { status: 403 });
  }

  if (!parsedTopic) {
    await sendTelegramMessage(
      message.chat.id,
      [
        "Usage:",
        "/blog <topic>",
        "/forms [page]",
        "",
        "Example: /blog How to build a SaaS MVP",
      ].join("\n"),
    );
    return NextResponse.json({ ok: true, handled: true });
  }

  await sendTelegramMessage(message.chat.id, `Generating blog for topic: ${parsedTopic}`);

  try {
    const result = await runBlogAutomation({
      topic: parsedTopic,
      source: "telegram",
    });

    revalidatePath("/blog");
    revalidatePath(`/blog/${result.slug}`);

    const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? request.nextUrl.origin).replace(
      /\/$/,
      "",
    );
    const url = `${siteUrl}/blog/${result.slug}`;

    await sendTelegramMessage(
      message.chat.id,
      [`Published: ${result.title}`, `Topic: ${result.topic}`, `URL: ${url}`].join("\n"),
    );

    return NextResponse.json({ ok: true, slug: result.slug, title: result.title, url });
  } catch (error) {
    const messageText = error instanceof Error ? error.message : "Unknown generation error";
    await sendTelegramMessage(
      message.chat.id,
      `Failed to generate blog.\nReason: ${messageText.slice(0, 300)}`,
    );
    return NextResponse.json({ ok: false, error: messageText }, { status: 500 });
  }
}
