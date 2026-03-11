import { ArrowRight, Check, CirclePlay } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  advantages,
  faqItems,
  processSteps,
  projects,
  services,
  socialProofStats,
} from "@/lib/site-data";

export default function Home() {
  const featuredServices = services.slice(0, 3);
  const featuredProjects = projects.slice(0, 2);

  return (
    <main>
      <section className="relative overflow-hidden pb-24 pt-16 md:pb-32 md:pt-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-brand">
                  <span className="h-2 w-2 rounded-full bg-brand" />
                  Now scaling Web3 &amp; AI MVPs
                </div>

                <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.03] tracking-tight text-slate-900 md:text-7xl">
                  Build Your Software <span className="text-brand">Faster</span> With Expert
                  Developers
                </h1>

                <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-slate-600">
                  We help startups launch MVPs, build scalable products, and provide dedicated
                  tech teams. From concept to code, we are your engineering partner.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="btn-base btn-primary gap-2 px-7 py-4 text-sm"
                  >
                    Start Your Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/projects"
                    className="btn-base btn-secondary gap-2 px-7 py-4 text-sm"
                  >
                    <CirclePlay className="h-4 w-4" />
                    View Portfolio
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="relative rounded-2xl border border-white/20 bg-[linear-gradient(140deg,#101822_0%,#1e293b_100%)] p-5 shadow-[0_28px_90px_-45px_rgba(15,23,42,0.8)]">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
                    <span className="h-3 w-3 rounded-full bg-red-400/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                    <span className="ml-2 text-[10px] uppercase tracking-[0.16em] text-slate-400">
                      prompt_service.py
                    </span>
                  </div>

                  <pre className="overflow-x-auto text-sm leading-7 text-slate-200">
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

                <div className="absolute -bottom-5 -left-5 rounded-xl border border-brand/20 bg-white/80 p-4 shadow-xl backdrop-blur-md">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                    Speed
                  </p>
                  <p className="mt-1 text-lg font-bold text-slate-900">4.2x Faster</p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-y border-slate-200 bg-white/90 py-10">
        <Container>
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {socialProofStats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.06}>
                <div className="space-y-1">
                  <p className="text-4xl font-bold tracking-tight text-slate-900">{stat.value}</p>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
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

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08}>
                <article className="h-full rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.5)] transition hover:-translate-y-1 hover:shadow-[0_20px_60px_-35px_rgba(15,23,42,0.45)]">
                  <div className="inline-flex rounded-xl bg-brand/10 p-3 text-brand">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-slate-900">{service.title}</h3>
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
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our Process"
              title="How we turn ideas into production-ready software"
              center
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.07}>
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
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Featured Projects"
              title="Products that shipped fast and scaled right"
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.1}>
                <article className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[linear-gradient(145deg,#1e293b_0%,#0f172a_85%)] p-8 text-white">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_95%_0%,rgba(49,130,237,0.45),transparent_55%)]" />
                  <div className="relative">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                      {project.category}
                    </p>
                    <h3 className="mt-3 text-3xl font-bold">{project.title}</h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300">{project.summary}</p>
                    <p className="mt-5 text-sm font-semibold text-blue-200">{project.outcome}</p>
                    <Link
                      href={project.href}
                      className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white"
                    >
                      View Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {advantages.map((advantage) => (
                  <article
                    key={advantage.title}
                    className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6"
                  >
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
                Talk to an Expert
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-24">
        <Container className="max-w-4xl">
          <Reveal>
            <SectionHeading eyebrow="FAQ" title="Frequently asked questions" center />
          </Reveal>
          <div className="mt-12">
            <FaqAccordion items={faqItems.slice(0, 3)} />
          </div>
        </Container>
      </section>

      <section className="pb-10">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-brand px-8 py-16 text-center text-white md:px-16">
              <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-20 -right-12 h-64 w-64 rounded-full bg-blue-300/20 blur-2xl" />

              <div className="relative">
                <h2 className="text-balance text-4xl font-bold md:text-5xl">
                  Ready to turn your idea into reality?
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-white/80">
                  Stop waiting for the perfect moment. Join 50+ successful founders who built
                  their future with Code Prompt.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/contact"
                    className="btn-base btn-inverse px-8 py-4 text-sm"
                  >
                    Book a Free Discovery Call
                  </Link>
                  <Link
                    href="/projects"
                    className="btn-base btn-outline-light px-8 py-4 text-sm"
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
