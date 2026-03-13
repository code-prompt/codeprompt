import { Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { PageAtmosphere } from "@/components/ui/page-atmosphere";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Custom Software Development Company",
  description:
    "CodePrompt is a custom software development company building secure, scalable business software, web applications, and API-first platforms.",
  keywords: [
    "custom software development company",
    "custom software development services",
    "business software development company",
    "enterprise software solutions",
    "web application development services",
  ],
  alternates: { canonical: "/software-development" },
  openGraph: {
    url: "/software-development",
    type: "website",
    title: "Custom Software Development Company | CodePrompt",
    description:
      "Build secure and scalable custom software with a product-focused engineering team.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Company | CodePrompt",
    description:
      "Custom software development services for startups, SMBs, and enterprise teams.",
  },
};

export default function SoftwareDevelopmentPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development Services",
    provider: {
      "@type": "Organization",
      name: "CodePrompt",
      url: "https://codeprompt.in",
    },
    areaServed: "Global",
  };

  return (
    <main className="relative overflow-hidden pb-14 pt-12 md:pb-16 md:pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />
      <PageAtmosphere />

      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Software Development"
            headingLevel="h1"
            title="Custom software development company for modern businesses"
            description="We design and build custom software development solutions that match your workflows, business model, and long-term product roadmap."
          />
        </Reveal>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            CodePrompt is a custom software development company that helps teams replace fragmented
            tools with reliable digital systems. Our approach combines product thinking and
            engineering execution so software decisions align with revenue, operations, and user
            experience goals. Whether you need internal operations software, customer-facing web
            applications, or API-first platforms, we deliver custom software development services
            with clear architecture and measurable outcomes.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            As your software development partner, we handle discovery, planning, delivery, and
            post-launch optimization. Teams choose us when they need quality and speed together,
            especially for business-critical workflows where reliability, security, and data
            accuracy matter.
          </p>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">What we build</h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
                Customer portals, dashboards, and B2B web applications
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
                Business workflow systems with approval and automation logic
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
                Platform modernization and legacy system replacement
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
                API development layers for integrations and data syncing
              </li>
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6">
            <h2 className="text-xl font-bold text-slate-900">How we deliver</h2>
            <h3 className="mt-4 text-base font-semibold text-slate-900">Discovery and scope clarity</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              We map business workflows, identify constraints, and prioritize features by impact.
            </p>
            <h3 className="mt-4 text-base font-semibold text-slate-900">Sprint-based development</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Short cycles with QA checkpoints, demos, and transparent progress tracking.
            </p>
            <h3 className="mt-4 text-base font-semibold text-slate-900">Launch and iteration</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              We deploy, monitor metrics, and continuously improve performance and usability.
            </p>
          </article>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Why teams choose our custom software development services
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Business fit first</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                We build around your process, not generic templates.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Scalable architecture</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Clean, extensible systems that support future integrations and feature growth.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Clear execution</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Predictable milestones, direct communication, and delivery ownership.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-700 sm:text-base">
            If you also need AI capabilities, review our{" "}
            <Link href="/ai-development" className="font-semibold text-brand">
              AI development services
            </Link>
            . For full engagement options, visit the{" "}
            <Link href="/services" className="font-semibold text-brand">
              services page
            </Link>
            , explore delivery outcomes in{" "}
            <Link href="/projects" className="font-semibold text-brand">
              project case studies
            </Link>
            , and contact us through{" "}
            <Link href="/contact" className="font-semibold text-brand">
              the contact page
            </Link>
            .
          </p>
        </section>
      </Container>
    </main>
  );
}
