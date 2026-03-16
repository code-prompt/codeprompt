import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

  const accentPalette = [
    {
      gradient: "from-sky-400/20 via-transparent to-indigo-500/10",
      border: "border-sky-100",
    },
    {
      gradient: "from-violet-400/20 via-transparent to-pink-400/10",
      border: "border-pink-100",
    },
    {
      gradient: "from-emerald-400/15 via-transparent to-cyan-400/10",
      border: "border-emerald-100",
    },
    {
      gradient: "from-amber-400/20 via-transparent to-rose-400/10",
      border: "border-amber-100",
    },
  ];

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

        <div className="mt-10 space-y-10 md:mt-14">
          {projects.map((project, index) => {
            const accent = accentPalette[index % accentPalette.length];

            return (
              <Reveal key={project.slug} delay={index * 0.05}>
                <article
                  id={project.slug}
                  className={`relative overflow-hidden rounded-[36px] border bg-white shadow-[0_25px_90px_rgba(15,23,42,0.12)] ${accent.border}`}
                >
                  <div className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${accent.gradient}`} />
                  <div className="relative grid items-center gap-8 p-6 md:p-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-12">
                    <div className="order-2 space-y-5 lg:order-1">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">{project.location}</span>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-800">{project.users}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">{project.title}</h2>
                      <p className="text-base leading-7 text-slate-600 md:text-lg">{project.description}</p>
                      <ul className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <li
                            key={`${project.slug}-${tag}`}
                            className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-600"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-900">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-slate-900 shadow-[0_16px_45px_rgba(15,23,42,0.2)]"
                        >
                          View Live Case Study
                          <ArrowRight className="h-4 w-4" />
                        </a>
                        <span className="text-xs uppercase tracking-[0.24em] text-slate-400">{project.liveUrl}</span>
                      </div>
                    </div>

                    <div className="order-1 lg:order-2">
                      <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-slate-900/60 shadow-[0_20px_60px_rgba(15,23,42,0.25)]">
                        <Image
                          src={project.image}
                          alt={`${project.title} product preview`}
                          width={1200}
                          height={900}
                          className="h-full w-full object-cover object-top"
                          sizes="(min-width: 1280px) 600px, (min-width: 768px) 45vw, 90vw"
                          priority={index < 2}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
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
