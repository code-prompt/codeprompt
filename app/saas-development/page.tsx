import { Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { PageAtmosphere } from "@/components/ui/page-atmosphere";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "SaaS Development Company Services",
  description:
    "CodePrompt is a SaaS development company building secure multi-tenant products with billing, analytics, and scalable architecture for growth-stage teams.",
  keywords: [
    "SaaS development company",
    "SaaS development services",
    "multi-tenant SaaS development",
    "B2B SaaS product development",
    "subscription platform development",
  ],
  alternates: { canonical: "/saas-development" },
  openGraph: {
    url: "/saas-development",
    type: "website",
    title: "SaaS Development Company Services | CodePrompt",
    description:
      "Launch and scale SaaS products with multi-tenant architecture, billing, and product analytics.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Development Company Services | CodePrompt",
    description:
      "SaaS development services for startups and businesses building subscription products.",
  },
};

export default function SaasDevelopmentPage() {
  const saasServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "SaaS Development Services",
    name: "SaaS Product Development",
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
          __html: JSON.stringify(saasServiceSchema).replace(/</g, "\\u003c"),
        }}
      />
      <PageAtmosphere />

      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="SaaS Development"
            headingLevel="h1"
            title="SaaS development company for scalable subscription products"
            description="We build SaaS platforms with secure multi-tenant architecture, subscription billing, analytics, and performance-ready engineering foundations."
          />
        </Reveal>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            CodePrompt is a SaaS development company working with founders and product teams to
            launch and scale subscription software. Our SaaS development services cover the full
            lifecycle: product scope, technical architecture, frontend and backend delivery,
            billing setup, and post-launch optimization. We design systems that support growth
            without creating technical bottlenecks.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            For early-stage teams, we prioritize rapid launch and user feedback loops. For growth
            teams, we focus on stability, tenant isolation, observability, and predictable release
            velocity. Every implementation is aligned to business KPIs such as activation,
            retention, and expansion revenue.
          </p>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">Core SaaS development capabilities</h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
                Multi-tenant architecture with secure tenant data isolation
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
                Role-based access and organization-level permissions
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
                Subscription billing, invoicing, and plan management workflows
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
                Product analytics instrumentation for feature and funnel tracking
              </li>
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6">
            <h2 className="text-xl font-bold text-slate-900">SaaS delivery model</h2>
            <h3 className="mt-4 text-base font-semibold text-slate-900">Roadmap and scope definition</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              We align feature roadmap with product maturity and go-to-market stage.
            </p>
            <h3 className="mt-4 text-base font-semibold text-slate-900">Execution and quality gates</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Sprint-based development with QA and security checks at each release cycle.
            </p>
            <h3 className="mt-4 text-base font-semibold text-slate-900">Scaling and optimization</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Performance tuning, infrastructure optimization, and usage-driven feature iteration.
            </p>
          </article>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            SaaS development use cases we support
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">B2B workflow products</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Internal operations and collaboration platforms with enterprise customer support.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Vertical SaaS products</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Industry-focused SaaS products with domain-specific workflows and integrations.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">AI-enabled SaaS</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                SaaS platforms with AI assistants, copilots, and automation built into the product.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-700 sm:text-base">
            Need broader product support? Combine this with our{" "}
            <Link href="/software-development" className="font-semibold text-brand">
              software development services
            </Link>{" "}
            and{" "}
            <Link href="/ai-development" className="font-semibold text-brand">
              AI development services
            </Link>
            . You can also read practical guides on the{" "}
            <Link href="/blog" className="font-semibold text-brand">
              CodePrompt blog
            </Link>{" "}
            and start planning via{" "}
            <Link href="/contact" className="font-semibold text-brand">
              our contact page
            </Link>
            .
          </p>
        </section>
      </Container>
    </main>
  );
}
