import { Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { PageAtmosphere } from "@/components/ui/page-atmosphere";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "AI Development Company Services",
  description:
    "CodePrompt is an AI development company building AI agents, LLM-powered features, and workflow automation systems for startups and businesses.",
  keywords: [
    "AI development company",
    "AI development services",
    "AI agents development",
    "LLM integration services",
    "business AI automation solutions",
  ],
  alternates: { canonical: "/ai-development" },
  openGraph: {
    url: "/ai-development",
    type: "website",
    title: "AI Development Company Services | CodePrompt",
    description:
      "Build production-ready AI agents, copilots, and LLM workflows with business-focused engineering.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Development Company Services | CodePrompt",
    description:
      "AI development services for startups and businesses: AI agents, copilots, and workflow automation.",
  },
};

export default function AiDevelopmentPage() {
  const aiServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Development Services",
    name: "AI Development and AI Agent Services",
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
          __html: JSON.stringify(aiServiceSchema).replace(/</g, "\\u003c"),
        }}
      />
      <PageAtmosphere />

      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="AI Development"
            headingLevel="h1"
            title="AI development company for practical, production-ready solutions"
            description="We help teams design and deploy AI agents, LLM-powered product features, and automation workflows that create measurable business impact."
          />
        </Reveal>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-sm leading-7 text-slate-700 sm:text-base">
            CodePrompt is an AI development company focused on execution, not hype. We help
            startups and businesses implement AI systems that improve support workflows, increase
            team productivity, and unlock better decision-making. Our AI development services span
            strategy, model integration, retrieval architecture, evaluation loops, and deployment.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
            The goal is simple: deliver AI experiences users trust. We build around business use
            cases, define quality signals early, and include fallback and monitoring mechanisms so
            your AI stack remains reliable in production.
          </p>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-bold text-slate-900">AI services we offer</h2>
            <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700">
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
                AI agent development for support, operations, and knowledge workflows
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
                LLM integration for copilots, summarization, and semantic search
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
                Retrieval-augmented generation pipelines and knowledge indexing
              </li>
              <li className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
                AI workflow automation with human-in-the-loop controls
              </li>
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6">
            <h2 className="text-xl font-bold text-slate-900">How we ensure AI reliability</h2>
            <h3 className="mt-4 text-base font-semibold text-slate-900">Evaluation-first setup</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              We define quality metrics and test prompts and retrieval strategies before launch.
            </p>
            <h3 className="mt-4 text-base font-semibold text-slate-900">Guardrails and fallback logic</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              Sensitive actions include verification, confidence checks, and safe fallback flows.
            </p>
            <h3 className="mt-4 text-base font-semibold text-slate-900">Monitoring and iteration</h3>
            <p className="mt-2 text-sm leading-7 text-slate-700">
              We track usage quality, user feedback, and error patterns to improve output quality.
            </p>
          </article>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            AI development use cases by business stage
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Startup stage</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Add AI assistants to MVPs and improve onboarding, support, and user guidance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Growth stage</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Automate high-volume workflows and reduce repetitive workload across teams.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Enterprise stage</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                Deploy governed AI systems with secure data boundaries and review controls.
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-700 sm:text-base">
            If you need end-to-end product engineering beyond AI, explore{" "}
            <Link href="/software-development" className="font-semibold text-brand">
              software development services
            </Link>{" "}
            and{" "}
            <Link href="/saas-development" className="font-semibold text-brand">
              SaaS development services
            </Link>
            . You can also review our{" "}
            <Link href="/blog" className="font-semibold text-brand">
              technical blog posts
            </Link>{" "}
            and connect through{" "}
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
