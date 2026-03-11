import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on software development services, startup engineering, MVP delivery, and SaaS architecture.",
};

export const dynamic = "force-dynamic";

export default function BlogPage() {
  const posts = getAllPosts();
  const hasPosts = posts.length > 0;

  return (
    <main className="pb-16 pt-14 md:pt-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Blog"
            title="Startup engineering insights"
            description="Guides and breakdowns on MVP launches, SaaS architecture, and product development strategy."
          />
        </Reveal>

        {hasPosts ? (
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.07}>
                <article className="h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.5)]">
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

                  <h2 className="mt-5 text-2xl font-bold text-slate-900">{post.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{post.description}</p>

                  <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
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
            <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-[0_20px_50px_-40px_rgba(15,23,42,0.5)]">
              <p className="text-lg font-semibold text-slate-900">There is no published blogs.</p>
              <p className="mt-2 text-sm text-slate-600">
                Blogs will appear here after they are published from the backend automation.
              </p>
            </div>
          </Reveal>
        )}
      </Container>
    </main>
  );
}
