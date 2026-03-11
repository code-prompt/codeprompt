import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Featured startup projects from Code Prompt across fintech, social tech, SaaS, and healthtech domains.",
};

export default function ProjectsPage() {
  return (
    <main className="pb-16 pt-14 md:pt-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Recent products we designed, built, and launched"
            description="Real delivery outcomes for founder-led teams and startup operators."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.07}>
              <article
                id={project.href.replace("/projects#", "")}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[linear-gradient(145deg,#1e293b_0%,#0f172a_85%)] p-8 text-white"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_95%_0%,rgba(49,130,237,0.4),transparent_55%)]" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
                    {project.category}
                  </p>
                  <h2 className="mt-3 text-3xl font-bold">{project.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{project.summary}</p>
                  <p className="mt-5 text-sm font-semibold text-blue-200">{project.outcome}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5">
            <p className="text-sm text-slate-700">
              Want to build your next case study with us?
            </p>
            <Link href="/contact" className="btn-base btn-primary px-5 py-2 text-sm font-semibold">
              Start a Project
            </Link>
          </div>
        </Reveal>
      </Container>
    </main>
  );
}
