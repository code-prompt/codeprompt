import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/container";
import { PageAtmosphere } from "@/components/ui/page-atmosphere";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Software Development Projects",
  description:
    "Featured software development projects from CodePrompt across fintech, social tech, SaaS, and healthtech domains.",
  keywords: [
    "software development company portfolio",
    "custom software development case studies",
    "startup MVP project examples",
    "SaaS development case studies",
  ],
  alternates: { canonical: "/projects" },
  openGraph: {
    url: "/projects",
    type: "website",
    title: "Software Development Projects | CodePrompt",
    description:
      "Explore product delivery case studies from a software development company working with startups and growth-stage teams.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Projects | CodePrompt",
    description: "Case studies in SaaS, automation, web apps, and startup product delivery.",
  },
};

export default function ProjectsPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "CodePrompt Projects",
    url: "https://codeprompt.in/projects",
    description: "Project case studies and software delivery outcomes from CodePrompt.",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: project.liveUrl,
      name: project.title,
      description: project.description,
      areaServed: project.location,
    })),
  };

  return (
    <main className="relative overflow-hidden pb-14 pt-12 md:pb-16 md:pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema).replace(/</g, "\\u003c"),
        }}
      />
      <PageAtmosphere />

      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            headingLevel="h1"
            title="Recent products we designed, built, and launched"
            description="Real delivery outcomes for founder-led teams and startup operators."
          />
        </Reveal>

        <div className="mt-10 flex flex-col gap-6 md:mt-12 lg:gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.07}>
              <article
                id={project.slug}
                className="fx-card relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/80 p-6 text-white shadow-[0_25px_70px_rgba(2,6,23,0.55)] backdrop-blur sm:p-8"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_95%_0%,rgba(45,212,191,0.18),transparent_55%)]" />
                <div className="relative grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-100">
                      <span className="rounded-full border border-white/30 px-3 py-1 uppercase tracking-[0.18em] text-[0.68rem] text-white/90">
                        {project.location}
                      </span>
                      <span className="rounded-full border border-white/20 px-3 py-1 text-[0.7rem] text-slate-100">
                        {project.users}
                      </span>
                    </div>
                    <h2 className="mt-4 text-2xl font-bold sm:text-3xl">{project.title}</h2>
                    <p className="mt-4 text-base leading-7 text-slate-200">{project.description}</p>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={`${project.slug}-${tag}`}
                          className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-200/90"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Visit ${project.title}`}
                        className="btn-base btn-primary inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold"
                      >
                        Visit Live Product
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                      <p className="text-sm text-slate-400">{project.liveUrl}</p>
                    </div>
                  </div>

                  <div className="relative min-h-[220px] overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
                    <Image
                      src={project.image}
                      alt={`${project.title} product preview`}
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 1280px) 420px, (min-width: 768px) 45vw, 100vw"
                      priority={index < 2}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/50 via-transparent to-transparent" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="fx-card mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 sm:mt-16 sm:px-6 sm:py-5">
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
