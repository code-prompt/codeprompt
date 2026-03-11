import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

import { runBlogAutomation } from "@/lib/automation/pipeline";
import {
  getTelegramMessage,
  parseBlogTopicFromText,
  sendTelegramMessage,
  type TelegramUpdate,
} from "@/lib/automation/telegram";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function hasValidWebhookSecret(request: NextRequest): boolean {
  const expected = process.env.TELEGRAM_WEBHOOK_SECRET;
  if (!expected) return true;

  const provided = request.headers.get("x-telegram-bot-api-secret-token");
  return provided === expected;
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

  const parsedTopic = parseBlogTopicFromText(message.text);

  if (parsedTopic === null) {
    return NextResponse.json({ ok: true, ignored: true });
  }

  if (!parsedTopic) {
    await sendTelegramMessage(
      message.chat.id,
      "Usage: /blog <topic>\nExample: /blog How to build a SaaS MVP",
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

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://codeprompt.in";
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
