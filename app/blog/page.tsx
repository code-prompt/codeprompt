import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { PageAtmosphere } from "@/components/ui/page-atmosphere";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Software Development Blog",
  description:
    "Insights on software development services, AI development, startup MVP delivery, SaaS architecture, and automation systems.",
  keywords: [
    "software development blog",
    "custom software development guides",
    "AI development articles",
    "SaaS development strategy",
    "startup MVP development guide",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    url: "/blog",
    type: "website",
    title: "Software Development Blog | CodePrompt",
    description:
      "Practical guides on software development services, AI product engineering, SaaS delivery, and startup execution.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Blog | CodePrompt",
    description: "Articles on software development, AI, SaaS, and startup product strategy.",
  },
};

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await getAllPosts();
  const hasPosts = posts.length > 0;
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "CodePrompt Blog",
    url: "https://codeprompt.in/blog",
    description:
      "Guides on custom software development services, AI development, SaaS architecture, and startup MVP strategy.",
  };

  return (
    <main className="relative overflow-hidden pb-14 pt-12 md:pb-16 md:pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema).replace(/</g, "\\u003c"),
        }}
      />
      <PageAtmosphere />

      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Blog"
            headingLevel="h1"
            title="Startup engineering insights"
            description="Guides and breakdowns on MVP launches, SaaS architecture, and product development strategy."
          />
        </Reveal>

        {hasPosts ? (
          <div className="mt-10 grid gap-5 md:mt-12 md:gap-6 lg:grid-cols-2">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.07}>
                <article className="fx-card h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.5)] sm:p-6 md:p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-brand"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="mt-5 text-xl font-bold text-slate-900 sm:text-2xl">{post.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{post.description}</p>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <Link href={`/blog/${post.slug}`} className="font-semibold text-brand">
                      Read article
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.04}>
            <div className="fx-card mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-[0_20px_50px_-40px_rgba(15,23,42,0.5)] sm:mt-12 sm:p-10">
              <p className="text-lg font-semibold text-slate-900">No blog articles are published yet.</p>
              <p className="mt-2 text-sm text-slate-600">
                Browse our <Link href="/services" className="font-semibold text-brand">services</Link> or{" "}
                <Link href="/contact" className="font-semibold text-brand">contact us</Link> to discuss your product requirements.
              </p>
            </div>
          </Reveal>
        )}
      </Container>
    </main>
  );
}
