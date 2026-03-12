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

export default async function BlogPage() {
  const posts = await getAllPosts();
  const hasPosts = posts.length > 0;

  return (
    <main className="pb-14 pt-12 md:pb-16 md:pt-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Blog"
            title="Startup engineering insights"
            description="Guides and breakdowns on MVP launches, SaaS architecture, and product development strategy."
          />
        </Reveal>

        {hasPosts ? (
          <div className="mt-10 grid gap-5 md:mt-12 md:gap-6 lg:grid-cols-2">
            {posts.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.07}>
                <article className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_20px_50px_-40px_rgba(15,23,42,0.5)] sm:p-6 md:p-7">
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
            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-[0_20px_50px_-40px_rgba(15,23,42,0.5)] sm:mt-12 sm:p-10">
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
