import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/ui/container";
import { PageAtmosphere } from "@/components/ui/page-atmosphere";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Contact CodePrompt",
  description:
    "Contact CodePrompt to discuss custom software development services, AI development, SaaS platforms, automation systems, and startup MVP delivery.",
  keywords: [
    "contact software development company",
    "custom software development consultation",
    "AI development company contact",
    "SaaS development consultation",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    type: "website",
    title: "Contact CodePrompt | Software Development Company",
    description:
      "Discuss custom software development, AI solutions, SaaS products, and startup MVP delivery with CodePrompt.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact CodePrompt",
    description:
      "Talk to CodePrompt about software development services, AI development, and SaaS delivery.",
  },
};

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact CodePrompt",
    url: "https://codeprompt.in/contact",
    about: "Software development services and AI product engineering",
  };

  return (
    <main className="relative overflow-hidden pb-14 pt-12 md:pb-16 md:pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageSchema).replace(/</g, "\\u003c"),
        }}
      />
      <PageAtmosphere />

      <Container className="relative z-10">
        <div className="grid gap-8 md:gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Contact"
                headingLevel="h1"
                title="Talk to a software development company that ships"
                description="Share your goals, timeline, and constraints. We will recommend a practical execution plan for custom software, AI, SaaS, or automation delivery."
              />

              <div className="fx-card mt-6 space-y-4 rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-700 sm:mt-8 sm:p-6">
                <p>
                  <span className="font-semibold text-slate-900">Email:</span> contact@codeprompt.in
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Email:</span> info@codeprompt.in
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </main>
  );
}
