import fs from "node:fs/promises";
import path from "node:path";

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

export async function publishMdxPost(draft: AiDraft): Promise<PublishedPost> {
  const directory = resolveBlogDir();
  await fs.mkdir(directory, { recursive: true });

  const baseSlug = slugify(draft.title) || `blog-${Date.now()}`;
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
