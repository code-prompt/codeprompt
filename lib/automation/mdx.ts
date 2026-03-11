import fs from "node:fs/promises";
import path from "node:path";

import { createStoredBlogPost } from "@/lib/db";

import type { AiDraft } from "./gemini";

export type PublishedPost = {
  slug: string;
  filePath: string;
  title: string;
};

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function escapeYaml(value: string): string {
  return value.replace(/"/g, '\\"');
}

function resolveBlogDir(): string {
  const cwd = process.cwd();
  const fallback = path.join(cwd, "content", "blog");
  const configured = process.env.BLOG_OUTPUT_PATH;

  if (!configured) return fallback;

  const resolved = path.isAbsolute(configured)
    ? configured
    : path.resolve(cwd, configured);

  if (!resolved.startsWith(cwd)) {
    return fallback;
  }

  return resolved;
}

async function getUniqueSlug(directory: string, base: string): Promise<string> {
  let slug = base;
  let counter = 2;

  while (true) {
    const filePath = path.join(directory, `${slug}.mdx`);
    try {
      await fs.access(filePath);
      slug = `${base}-${counter}`;
      counter += 1;
    } catch {
      return slug;
    }
  }
}

async function publishToDatabase(draft: AiDraft, baseSlug: string): Promise<PublishedPost> {
  const safeTags = draft.tags.length ? draft.tags : ["software development services", "startup"];

  for (let counter = 1; counter <= 100; counter += 1) {
    const slug = counter === 1 ? baseSlug : `${baseSlug}-${counter}`;
    const result = await createStoredBlogPost({
      slug,
      title: draft.title,
      description: draft.description,
      tags: safeTags,
      contentMarkdown: draft.contentMarkdown.trim(),
      source: "automation",
      publishedAt: new Date(),
    });

    if (result === "created") {
      return {
        slug,
        filePath: `db://ai_blog_posts/${slug}`,
        title: draft.title,
      };
    }

    if (result === "error") {
      throw new Error(
        "Failed to save blog post to database. Check DATABASE_URL and database permissions.",
      );
    }
  }

  throw new Error("Could not generate a unique blog slug after multiple attempts.");
}

async function publishToFilesystem(draft: AiDraft, baseSlug: string): Promise<PublishedPost> {
  const directory = resolveBlogDir();
  await fs.mkdir(directory, { recursive: true });

  const slug = await getUniqueSlug(directory, baseSlug);
  const filePath = path.join(directory, `${slug}.mdx`);

  const date = new Date().toISOString().slice(0, 10);
  const safeTags = draft.tags.length ? draft.tags : ["software development services", "startup"];
  const frontmatter = [
    "---",
    `title: \"${escapeYaml(draft.title)}\"`,
    `date: \"${date}\"`,
    `description: \"${escapeYaml(draft.description)}\"`,
    `tags: [${safeTags.map((tag) => `\"${escapeYaml(tag)}\"`).join(", ")}]`,
    "---",
    "",
  ].join("\n");

  const content = `${frontmatter}${draft.contentMarkdown.trim()}\n`;
  await fs.writeFile(filePath, content, "utf8");

  return {
    slug,
    filePath,
    title: draft.title,
  };
}

export async function publishMdxPost(draft: AiDraft): Promise<PublishedPost> {
  const baseSlug = slugify(draft.title) || `blog-${Date.now()}`;

  if (process.env.DATABASE_URL) {
    return publishToDatabase(draft, baseSlug);
  }

  return publishToFilesystem(draft, baseSlug);
}
