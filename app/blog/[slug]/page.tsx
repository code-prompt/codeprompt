import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { blogMdxComponents } from "@/components/blog/mdx-components";
import { Container } from "@/components/ui/container";
import { PageAtmosphere } from "@/components/ui/page-atmosphere";
import { getPostBySlug } from "@/lib/blog";
import { toAbsoluteUrl } from "@/lib/seo";

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
    keywords: post.meta.tags,
    alternates: {
      canonical: `/blog/${post.meta.slug}`,
    },
    openGraph: {
      type: "article",
      url: `/blog/${post.meta.slug}`,
      title: post.meta.title,
      description: post.meta.description,
      publishedTime: new Date(post.meta.date).toISOString(),
      tags: post.meta.tags,
      images: [
        {
          url: post.meta.image ?? "/logo.png",
          alt: post.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.description,
      images: [post.meta.image ?? "/logo.png"],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postUrl = toAbsoluteUrl(`/blog/${post.meta.slug}`);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.meta.title,
    description: post.meta.description,
    datePublished: new Date(post.meta.date).toISOString(),
    dateModified: new Date(post.meta.date).toISOString(),
    mainEntityOfPage: postUrl,
    url: postUrl,
    image: [post.meta.image ? toAbsoluteUrl(post.meta.image) : toAbsoluteUrl("/logo.png")],
    keywords: post.meta.tags.join(", "),
    publisher: {
      "@type": "Organization",
      name: "CodePrompt",
      logo: {
        "@type": "ImageObject",
        url: toAbsoluteUrl("/logo.png"),
      },
    },
  };

  return (
    <main className="relative overflow-hidden pb-14 pt-12 md:pb-16 md:pt-20">
      <PageAtmosphere />

      <Container className="relative z-10 max-w-4xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
          }}
        />

        <header className="fx-card rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 md:p-8">
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
          <h1 className="mt-5 text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
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

        <article className="prose mdx-content fx-card mt-8 rounded-2xl border border-slate-200 bg-white p-5 sm:mt-10 sm:p-6 md:p-10">
          <MDXRemote source={post.content} components={blogMdxComponents} />
        </article>
      </Container>
    </main>
  );
}
