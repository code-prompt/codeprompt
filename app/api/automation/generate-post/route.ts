import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

import { resolveTopic, runBlogAutomation } from "@/lib/automation/pipeline";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function isAuthorized(request: NextRequest): boolean {
  const secret = process.env.CRON_SECRET;
  if (!secret) return true;

  const authorization = (request.headers.get("authorization") ?? "").trim();
  const xCronSecret = (request.headers.get("x-cron-secret") ?? "").trim();
  const xApiKey = (request.headers.get("x-api-key") ?? "").trim();

  return (
    authorization === `Bearer ${secret}` ||
    authorization === secret ||
    xCronSecret === secret ||
    xApiKey === secret
  );
}

async function extractTopic(request: NextRequest): Promise<string | undefined> {
  if (request.method === "GET") {
    const queryTopic = request.nextUrl.searchParams.get("topic");
    const queryTitle = request.nextUrl.searchParams.get("title");
    return (queryTopic ?? queryTitle ?? undefined) || undefined;
  }

  if (request.method === "POST") {
    const body = (await request.json().catch(() => ({}))) as { topic?: string };
    return body.topic;
  }

  return undefined;
}

async function handleGenerate(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  try {
    const extractedTopic = await extractTopic(request);
    const topic = await resolveTopic(extractedTopic);

    const result = await runBlogAutomation({
      topic,
      source: "api",
    });

    revalidatePath("/blog");
    revalidatePath(`/blog/${result.slug}`);

    const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? request.nextUrl.origin).replace(
      /\/$/,
      "",
    );

    return NextResponse.json(
      {
        ok: true,
        topic: result.topic,
        title: result.title,
        slug: result.slug,
        url: `${siteUrl}/blog/${result.slug}`,
        filePath: result.filePath,
        runId: result.runId,
      },
      { status: 201 },
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to generate blog post.";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  return handleGenerate(request);
}

export async function POST(request: NextRequest) {
  return handleGenerate(request);
}
