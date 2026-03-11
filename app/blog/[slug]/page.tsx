import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/container";
import { getPostBySlug } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.meta.title,
    description: post.meta.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="pb-16 pt-14 md:pt-20">
      <Container className="max-w-4xl">
        <header className="rounded-2xl border border-slate-200 bg-white p-8">
          <div className="flex flex-wrap gap-2">
            {post.meta.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-brand"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-5 text-balance text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {post.meta.title}
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600">{post.meta.description}</p>
          <p className="mt-4 text-sm text-slate-500">
            {new Date(post.meta.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </header>

        <article className="prose mt-10 rounded-2xl border border-slate-200 bg-white p-8 md:p-10">
          <MDXRemote source={post.content} />
        </article>
      </Container>
    </main>
  );
}
