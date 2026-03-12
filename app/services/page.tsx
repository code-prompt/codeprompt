import { Check } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { PageAtmosphere } from "@/components/ui/page-atmosphere";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software development services for startups: MVP launch, SaaS development, AI product engineering, and dedicated tech teams.",
};

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden pb-14 pt-12 md:pb-16 md:pt-20">
      <PageAtmosphere />

      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Software development services for fast-moving startups"
            description="From MVP development to senior team extension, we help founders ship with confidence and speed."
          />
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

        <Reveal delay={0.2}>
          <div className="fx-card mt-12 rounded-2xl bg-slate-900 px-5 py-8 text-white sm:mt-16 sm:px-8 sm:py-10 md:px-10">
            <h3 className="text-2xl font-bold">Need a custom engagement model?</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              We can combine team augmentation, fixed-scope sprints, and roadmap ownership based
              on your stage and runway.
            </p>
            <Link
              href="/contact"
              className="btn-base btn-secondary mt-6 px-6 py-3 text-sm"
            >
              Talk to an Expert
            </Link>
          </div>
        </Reveal>
      </Container>
    </main>
  );
}
