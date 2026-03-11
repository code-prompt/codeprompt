import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogFrontmatter = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  image?: string;
};

export type BlogPostMeta = BlogFrontmatter & {
  slug: string;
};

export type BlogPost = {
  meta: BlogPostMeta;
  content: string;
};

function readMdxFile(fileName: string): BlogPost {
  const slug = fileName.replace(/\.mdx$/, "");
  const filePath = path.join(BLOG_DIR, fileName);
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  const meta: BlogPostMeta = {
    slug,
    title: String(data.title ?? slug),
    date: String(data.date ?? new Date().toISOString().slice(0, 10)),
    description: String(data.description ?? ""),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    image: typeof data.image === "string" ? data.image : undefined,
  };

  return { meta, content };
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map(readMdxFile)
    .map((post) => post.meta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  return readMdxFile(`${slug}.mdx`);
}
