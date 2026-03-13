import { Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { PageAtmosphere } from "@/components/ui/page-atmosphere";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { services, servicesKeywordCluster } from "@/lib/site-data";

const serviceFaqItems = [
  {
    question: "What are your custom software development services?",
    answer:
      "We provide full-cycle software development services including product discovery, architecture, UI/UX implementation, QA, deployment, and post-launch support.",
  },
  {
    question: "Do you handle AI development and AI agents for existing products?",
    answer:
      "Yes. We integrate AI features and AI agents into existing platforms with clear evaluation criteria, guardrails, and measurable business outcomes.",
  },
  {
    question: "Can CodePrompt deliver startup MVP development quickly?",
    answer:
      "Yes. We run a focused MVP workflow to launch core product value quickly, validate market fit, and prepare for iterative scaling.",
  },
  {
    question: "Do you provide SaaS development services with billing and multi-tenancy?",
    answer:
      "Yes. We build SaaS products with secure multi-tenant architecture, role-based access controls, billing workflows, and analytics foundations.",
  },
];

export const metadata: Metadata = {
  title: "Custom Software Development Services",
  description:
    "Explore CodePrompt custom software development services: AI development, SaaS development, automation systems, web and mobile apps, API integrations, and MVP builds.",
  keywords: [
    servicesKeywordCluster.primary_keyword,
    ...servicesKeywordCluster.secondary_keywords,
    ...servicesKeywordCluster.long_tail_keywords,
  ],
  alternates: { canonical: "/services" },
  openGraph: {
    url: "/services",
    type: "website",
    title: "Custom Software Development Services | CodePrompt",
    description:
      "Software development company for startups and businesses: custom software, AI development, SaaS, automation, APIs, and MVP delivery.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Services | CodePrompt",
    description:
      "Custom software development services for startups and businesses, including AI development, SaaS platforms, and automation systems.",
  },
};

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom Software Development Services",
    provider: {
      "@type": "Organization",
      name: "CodePrompt",
      url: "https://codeprompt.in",
    },
    serviceType: [
      "Custom Software Development",
      "AI Development",
      "SaaS Development",
      "Automation Systems",
      "Web Application Development",
      "Mobile App Development",
      "API Development",
      "Startup MVP Development",
    ],
    areaServed: "Global",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: serviceFaqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="relative overflow-hidden pb-14 pt-12 md:pb-16 md:pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <PageAtmosphere />

      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            headingLevel="h1"
            title="Custom software development services for startups and businesses"
            description="CodePrompt is a software development company offering custom software development services, AI development, SaaS engineering, automation systems, and startup MVP delivery."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <article className="fx-card mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-700 sm:p-8 sm:text-base">
            <p>
              Our custom software development services are designed for teams that need business
              outcomes, not just shipped tickets. We partner with founders, product leaders, and
              operations teams to build software that improves efficiency, unlocks new revenue, and
              supports long-term product growth. As a software development company, we combine
              product strategy, engineering delivery, and practical architecture decisions so every
              sprint contributes to measurable progress.
            </p>
            <p className="mt-4">
              We support full project ownership and embedded team models. If you need a new SaaS
              product, AI features in an existing platform, or a business automation system that
              reduces manual work, our team can design and build it with clear milestones and
              transparent delivery. You can also review how we approach{" "}
              <Link href="/software-development" className="font-semibold text-brand">
                software development
              </Link>
              ,{" "}
              <Link href="/ai-development" className="font-semibold text-brand">
                AI development
              </Link>
              , and{" "}
              <Link href="/saas-development" className="font-semibold text-brand">
                SaaS development
              </Link>{" "}
              in dedicated service pages.
            </p>
          </article>
        </Reveal>

        <div className="mt-10 grid gap-5 md:mt-12 md:gap-6 lg:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <article
                id={service.href.replace("/services#", "")}
                className="fx-card rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-38px_rgba(15,23,42,0.5)] md:p-8"
              >
                <div className="inline-flex rounded-xl bg-brand/10 p-3 text-brand">
                  <service.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-xl font-bold text-slate-900 sm:text-2xl">{service.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
                <ul className="mt-6 space-y-2">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 text-brand" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 md:mt-14">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            How our software development services are delivered
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">1. Discovery and scope</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                We clarify business goals, user intent, technical constraints, and launch goals.
                This phase creates a practical roadmap and avoids expensive rework later.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">2. Build in fast sprints</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                We ship in short cycles with visible progress, acceptance criteria, QA checks, and
                regular demos so stakeholders stay aligned with delivery.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">3. Launch and optimize</h3>
              <p className="mt-2 text-sm leading-7 text-slate-700">
                We deploy to production, monitor outcomes, and iterate based on analytics,
                customer feedback, and operational performance.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 sm:p-8 md:mt-12">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Use cases where businesses choose CodePrompt
          </h2>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
            <li className="flex items-start gap-3">
              <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
              Build a startup MVP to validate demand, onboard early users, and accelerate
              fundraising conversations.
            </li>
            <li className="flex items-start gap-3">
              <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
              Replace manual operations with automation systems and connected APIs.
            </li>
            <li className="flex items-start gap-3">
              <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
              Launch a SaaS platform with multi-tenant architecture, billing, and role-based
              access control.
            </li>
            <li className="flex items-start gap-3">
              <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
              Integrate AI features for internal copilots, support automation, and intelligent
              customer workflows.
            </li>
          </ul>
          <p className="mt-6 text-sm leading-7 text-slate-700 sm:text-base">
            For deeper implementation insights, visit our{" "}
            <Link href="/blog" className="font-semibold text-brand">
              engineering blog
            </Link>{" "}
            and review relevant delivery examples in{" "}
            <Link href="/projects" className="font-semibold text-brand">
              project case studies
            </Link>
            .
          </p>
        </section>

        <section className="mt-12 md:mt-14">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions about software development services"
            center
          />
          <div className="mt-8">
            <FaqAccordion items={serviceFaqItems} />
          </div>
        </section>

        <Reveal delay={0.2}>
          <div className="fx-card mt-12 rounded-2xl bg-slate-900 px-5 py-8 text-white sm:mt-16 sm:px-8 sm:py-10 md:px-10">
            <h2 className="text-2xl font-bold">
              Need a software development company for your next product?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              Tell us what you are building and we will propose a practical engagement model, clear
              milestones, and a delivery plan aligned with your business timeline.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn-base btn-secondary px-6 py-3 text-sm">
                Start your project
              </Link>
              <Link href="/faq" className="btn-base btn-outline-light px-6 py-3 text-sm">
                Review common questions
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </main>
  );
}
