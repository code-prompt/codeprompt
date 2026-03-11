import { createAutomationRun, updateAutomationRunStatus } from "@/lib/db";

import { generateBlogDraft } from "./gemini";
import { publishMdxPost } from "./mdx";
import { fetchTrendingTopics } from "./rss";

export type BlogAutomationResult = {
  runId: string | null;
  topic: string;
  title: string;
  slug: string;
  filePath: string;
  trendingTopics: string[];
};

function sanitizeTopic(value: string): string {
  return value.trim().replace(/\s+/g, " ").slice(0, 180);
}

export async function resolveTopic(input?: string): Promise<string> {
  const trimmed = sanitizeTopic(input ?? "");
  if (trimmed) return trimmed;

  const trending = await fetchTrendingTopics(1);
  if (trending.length > 0) return sanitizeTopic(trending[0]);

  throw new Error("No topic provided and no trending topic available.");
}

export async function runBlogAutomation(params: {
  topic: string;
  source: string;
}): Promise<BlogAutomationResult> {
  const topic = sanitizeTopic(params.topic);
  if (!topic) {
    throw new Error("Topic is required.");
  }

  const runId = await createAutomationRun(topic, params.source);

  try {
    const trendingTopics = await fetchTrendingTopics(5);
    const draft = await generateBlogDraft({ topic, trendingTopics });
    const published = await publishMdxPost(draft);

    if (runId) {
      await updateAutomationRunStatus(runId, "success");
    }

    return {
      runId,
      topic,
      title: published.title,
      slug: published.slug,
      filePath: published.filePath,
      trendingTopics,
    };
  } catch (error) {
    if (runId) {
      await updateAutomationRunStatus(
        runId,
        "failed",
        error instanceof Error ? error.message : "Unknown automation error",
      );
    }
    throw error;
  }
}
