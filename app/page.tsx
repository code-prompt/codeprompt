import { ArrowRight, Check, CirclePlay } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { Parallax } from "@/components/ui/parallax";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  advantages,
  faqItems,
  homepageKeywordCluster,
  processSteps,
  projects,
  services,
  socialProofStats,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Software Development Company for Startups and Businesses",
  description:
    "CodePrompt is a software development company delivering custom software development services, AI development, SaaS platforms, and automation systems.",
  keywords: [
    homepageKeywordCluster.primary_keyword,
    ...homepageKeywordCluster.secondary_keywords,
    ...homepageKeywordCluster.long_tail_keywords,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Software Development Company for Startups and Businesses",
    description:
      "Custom software development services, AI solutions, SaaS development, and startup MVP delivery by CodePrompt.",
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company | CodePrompt",
    description:
      "Build custom software, AI tools, SaaS products, and automation systems with a startup-focused engineering team.",
  },
};

export default function Home() {
  const featuredServices = services.slice(0, 3);
  const featuredProjects = projects.slice(0, 2);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.slice(0, 3).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <section className="relative overflow-hidden pb-16 pt-12 md:pb-24 md:pt-20 lg:pb-32 lg:pt-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="bg-mesh-motion" />
          <Parallax speed={180} xSpeed={120} rotate={14} fade className="absolute -right-14 -top-14 sm:-right-32 sm:-top-32">
            <div className="anim-float-slow h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.34)_0%,rgba(59,130,246,0.06)_45%,transparent_72%)] blur-2xl sm:h-72 sm:w-72" />
          </Parallax>
          <Parallax speed={-160} xSpeed={-92} rotate={-12} fade className="absolute -left-10 top-24 sm:-left-24">
            <div className="anim-pulse-soft h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.25)_0%,rgba(14,165,233,0.06)_50%,transparent_74%)] blur-3xl sm:h-64 sm:w-64" />
          </Parallax>
          <Parallax speed={128} xSpeed={160} rotate={20} scale={0.08} className="absolute bottom-4 right-[12%] hidden sm:block sm:right-[20%]">
            <div className="anim-float-medium anim-delay-1 h-28 w-28 rounded-full border border-brand/25 bg-brand/10 backdrop-blur-sm" />
          </Parallax>
        </div>

        <Container className="relative z-10">
          <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <Parallax speed={52} xSpeed={24} rotate={2.5} scale={0.04}>
                <div>
                  <div className="anim-float-slow inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-brand">
                    <span className="h-2 w-2 rounded-full bg-brand" />
                    Software, AI, SaaS, and Automation Delivery
                  </div>

                  <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.03] tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
                    Software Development Company for{" "}
                    <span className="text-brand">Startups and Businesses</span>
                  </h1>

                  <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-slate-600 md:mt-7 md:text-lg md:leading-8">
                    CodePrompt is a software development company that helps teams launch custom
                    software, AI tools, SaaS products, and automation systems with predictable
                    delivery and measurable business outcomes.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4 md:mt-9">
                    <Link
                      href="/contact"
                      className="btn-base btn-primary w-full justify-center gap-2 px-6 py-3 text-sm sm:w-auto sm:px-7 sm:py-4"
                    >
                      Start Your Project
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="/projects"
                      className="btn-base btn-secondary w-full justify-center gap-2 px-6 py-3 text-sm sm:w-auto sm:px-7 sm:py-4"
                    >
                      <CirclePlay className="h-4 w-4" />
                      View Portfolio
                    </Link>
                  </div>
                </div>
              </Parallax>
            </Reveal>

            <Reveal delay={0.12}>
              <Parallax speed={148} xSpeed={-72} rotate={7} scale={0.09}>
                <div className="relative rounded-2xl border border-white/20 bg-[linear-gradient(140deg,#101822_0%,#1e293b_100%)] p-4 shadow-[0_28px_90px_-45px_rgba(15,23,42,0.8)] sm:p-5">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4">
                    <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
                      <span className="h-3 w-3 rounded-full bg-red-400/80" />
                      <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                      <span className="ml-2 text-[10px] uppercase tracking-[0.16em] text-slate-400">
                        prompt_service.py
                      </span>
                    </div>

                    <pre className="overflow-x-auto text-xs leading-6 text-slate-200 sm:text-sm sm:leading-7">
                      <code>{`class ProductBuilder:
  def __init__(self, idea):
    self.stack = ["React", "FastAPI", "Postgres"]
    self.engineers = "Senior-Level"

  def deploy(self):
    return "🚀 Production Ready"`}</code>
                    </pre>

                    <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                      <div className="flex gap-3">
                        <span className="h-8 w-20 rounded bg-white/10" />
                        <span className="h-8 w-10 rounded bg-white/10" />
                      </div>
                      <span className="text-xs text-brand">Compilation Successful</span>
                    </div>
                  </div>

                  <Parallax speed={-120} xSpeed={90} rotate={-14} scale={0.07}>
                    <div className="absolute bottom-3 left-3 rounded-xl border border-brand/20 bg-white/80 p-3 shadow-xl backdrop-blur-md sm:-bottom-5 sm:-left-5 sm:p-4">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                        Speed
                      </p>
                      <p className="mt-1 text-base font-bold text-slate-900 sm:text-lg">4.2x Faster</p>
                    </div>
                  </Parallax>
                </div>
              </Parallax>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white/90 py-10">
        <Container>
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {socialProofStats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.06}>
                <Parallax
                  speed={index % 2 === 0 ? 72 : -68}
                  xSpeed={index % 2 === 0 ? 26 : -26}
                  rotate={index % 2 === 0 ? 4 : -4}
                  scale={0.05}
                >
                  <div className="space-y-1 rounded-2xl border border-slate-200 bg-white/70 px-4 py-5 backdrop-blur-sm">
                    <p className="text-4xl font-bold tracking-tight text-slate-900">{stat.value}</p>
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                </Parallax>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 lg:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <SectionHeading
                eyebrow="Core Expertise"
                title="Tailored solutions for every stage of your journey"
                description="Software development services crafted for founders moving from idea to scale."
              />
            </Reveal>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:text-brand-dark"
            >
              Explore all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:mt-12 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08}>
                <Parallax
                  speed={index % 2 === 0 ? 88 : -84}
                  xSpeed={index % 2 === 0 ? -34 : 34}
                  rotate={index % 2 === 0 ? 5 : -5}
                  scale={0.06}
                >
                  <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.5)] transition hover:-translate-y-1 hover:shadow-[0_20px_60px_-35px_rgba(15,23,42,0.45)] md:p-8">
                    <div className="inline-flex rounded-xl bg-brand/10 p-3 text-brand">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-slate-900 sm:text-2xl">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
                    <ul className="mt-5 space-y-2">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2 text-sm text-slate-700">
                          <Check className="h-4 w-4 text-brand" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={service.href}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </article>
                </Parallax>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our Process"
              title="How we turn ideas into production-ready software"
              center
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:mt-14 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.07}>
                <Parallax
                  speed={index % 2 === 0 ? 64 : -60}
                  xSpeed={index % 2 === 0 ? 20 : -20}
                  rotate={index % 2 === 0 ? 3 : -3}
                  scale={0.04}
                >
                  <article className="relative rounded-2xl border border-slate-200 bg-[#f8fafc] p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                      Step {step.step}
                    </p>
                    <div className="mt-4 inline-flex rounded-full bg-white p-2 text-brand shadow-sm">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                  </article>
                </Parallax>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f8fafc] py-16 md:py-20 lg:py-24">
        <Container className="max-w-5xl">
          <Reveal>
            <article className="fx-card rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 md:p-10">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
                Custom software development services built around business outcomes
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
                As a software development company, we focus on one core principle: software should
                move your business forward, not just add another system to maintain. Our custom
                software development services are structured around measurable outcomes such as
                faster onboarding, lower operational cost, stronger customer retention, and higher
                team productivity. Whether you are building a brand-new product or modernizing an
                existing platform, we design architecture, delivery plans, and sprint scope around
                the business goals that matter most.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
                Teams work with CodePrompt when they need a software development company that can
                combine strategy and execution: product direction, AI roadmap decisions, SaaS
                scaling, integration planning, and launch support. If you want a practical path
                from concept to production, start with our{" "}
                <Link href="/services" className="font-semibold text-brand">
                  software development services
                </Link>{" "}
                and we can map a delivery model tailored to your stage.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    AI development company support for real workflows
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    We build AI features and AI agents that integrate into real operational
                    workflows, including support, documentation, internal search, and analytics.
                    Instead of demo-only AI, we focus on systems your team can trust in production.
                    Learn how this works on our{" "}
                    <Link href="/ai-development" className="font-semibold text-brand">
                      AI development
                    </Link>{" "}
                    page.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    SaaS development company expertise for product teams
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    SaaS products need multi-tenant foundations, billing workflows, and
                    observability from day one. We design SaaS architectures that keep development
                    velocity high while maintaining security and performance. Explore our{" "}
                    <Link href="/saas-development" className="font-semibold text-brand">
                      SaaS development approach
                    </Link>{" "}
                    for the implementation details.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-slate-900">
                  Common use cases for startups and growth-stage businesses
                </h3>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-700 sm:text-base">
                  <li className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
                    Startup MVP development for founder-led teams preparing for launch, fundraising,
                    or pilot customers.
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
                    Custom business software development for operations, reporting, and internal
                    automation systems.
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
                    Web application development services for partner portals, client dashboards, and
                    data-heavy B2B tools.
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-brand" />
                    API development services for integrations across CRMs, payment providers,
                    analytics platforms, and internal tools.
                  </li>
                </ul>
              </div>

              <p className="mt-8 text-sm leading-7 text-slate-700 sm:text-base">
                If you are comparing software development services, review our{" "}
                <Link href="/projects" className="font-semibold text-brand">
                  recent projects
                </Link>{" "}
                for delivery examples, read implementation guides on the{" "}
                <Link href="/blog" className="font-semibold text-brand">
                  engineering blog
                </Link>
                , and check detailed answers on{" "}
                <Link href="/faq" className="font-semibold text-brand">
                  frequently asked questions
                </Link>
                . When you are ready, our team can outline an execution plan through the{" "}
                <Link href="/contact" className="font-semibold text-brand">
                  contact page
                </Link>
                .
              </p>
            </article>
          </Reveal>
        </Container>
      </section>

      <section className="py-16 md:py-20 lg:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Featured Projects"
              title="Products that shipped fast and scaled right"
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:mt-12 md:gap-6 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.1}>
                <Parallax
                  speed={index % 2 === 0 ? 112 : -108}
                  xSpeed={index % 2 === 0 ? 44 : -44}
                  rotate={index % 2 === 0 ? 6 : -6}
                  scale={0.07}
                >
                  <article className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[linear-gradient(145deg,#1e293b_0%,#0f172a_85%)] p-6 text-white md:p-8">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_95%_0%,rgba(49,130,237,0.45),transparent_55%)]" />
                    <div className="relative">
                      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-200">
                        <span className="rounded-full border border-white/30 px-3 py-1 uppercase tracking-[0.16em] text-white">
                          {project.location}
                        </span>
                        <span className="rounded-full border border-white/20 px-3 py-1 text-[0.7rem] text-slate-200">
                          {project.users}
                        </span>
                      </div>
                      <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{project.title}</h3>
                      <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">{project.description}</p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <li
                            key={`${project.slug}-${tag}`}
                            className="rounded-full border border-white/20 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-slate-200"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white"
                      >
                        Visit Live Product
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </article>
                </Parallax>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {advantages.map((advantage) => (
                  <article key={advantage.title} className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5 sm:p-6">
                    <div className="inline-flex rounded-full bg-brand/10 p-2 text-brand">
                      <advantage.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-slate-900">{advantage.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{advantage.description}</p>
                  </article>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <SectionHeading
                eyebrow="Our Advantage"
                title="Engineering excellence is in our DNA"
                description="We do not just write code. We solve business problems with senior engineers who have built products for unicorns and high-growth startups."
              />
              <ul className="mt-8 space-y-4">
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-0.5 rounded-full bg-emerald-100 p-1 text-emerald-700">
                    <Check className="h-4 w-4" />
                  </span>
                  Startup-focused delivery model
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-0.5 rounded-full bg-emerald-100 p-1 text-emerald-700">
                    <Check className="h-4 w-4" />
                  </span>
                  Senior engineering team only
                </li>
                <li className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-0.5 rounded-full bg-emerald-100 p-1 text-emerald-700">
                    <Check className="h-4 w-4" />
                  </span>
                  Clear sprint rhythm with measurable outcomes
                </li>
              </ul>
              <Link
                href="/contact"
                className="btn-base btn-dark mt-8 px-6 py-3 text-sm"
              >
                Talk to the Team
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 lg:py-24">
        <Container className="max-w-4xl">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Frequently asked questions" center />
          </Reveal>
          <div className="mt-12">
            <FaqAccordion items={faqItems.slice(0, 3)} />
          </div>
        </Container>
      </section>

      <section className="pb-8 md:pb-10">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[1.5rem] bg-brand px-5 py-12 text-center text-white sm:rounded-[2rem] sm:px-8 sm:py-16 md:px-16">
              <Parallax speed={36} className="absolute -left-16 -top-16">
                <div className="anim-float-medium h-56 w-56 rounded-full bg-white/10 blur-2xl" />
              </Parallax>
              <Parallax speed={-32} className="absolute -bottom-20 -right-12">
                <div className="anim-float-slow anim-delay-2 h-64 w-64 rounded-full bg-blue-300/20 blur-2xl" />
              </Parallax>

              <div className="relative">
                <h2 className="text-balance text-3xl font-bold sm:text-4xl md:text-5xl">
                  Ready to turn your idea into reality?
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-white/80 sm:text-lg">
                  Stop waiting for the perfect moment. Join 50+ successful founders who built
                  their future with CodePrompt, a software development company focused on delivery.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4">
                  <Link
                    href="/contact"
                    className="btn-base btn-inverse w-full justify-center px-6 py-3 text-sm sm:w-auto sm:px-8 sm:py-4"
                  >
                    Book a Free Discovery Call
                  </Link>
                  <Link
                    href="/projects"
                    className="btn-base btn-outline-light w-full justify-center px-6 py-3 text-sm sm:w-auto sm:px-8 sm:py-4"
                  >
                    View Case Studies
                  </Link>
                </div>

                <p className="mt-6 text-sm text-white/70">
                  No strings attached. 30-minute expert consultation.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
