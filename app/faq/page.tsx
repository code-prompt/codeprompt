import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { PageAtmosphere } from "@/components/ui/page-atmosphere";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FAQ - Software Development Services",
  description:
    "Answers to common questions about custom software development services, AI development, SaaS engineering, and startup MVP delivery.",
  keywords: [
    "software development company FAQ",
    "custom software development services questions",
    "AI development company FAQ",
    "startup MVP development FAQ",
  ],
  alternates: { canonical: "/faq" },
  openGraph: {
    url: "/faq",
    type: "website",
    title: "FAQ | CodePrompt Software Development Company",
    description:
      "Frequently asked questions about software development services, AI solutions, SaaS development, and delivery process.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | CodePrompt",
    description: "Common questions about software, AI, SaaS, and MVP development with CodePrompt.",
  },
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
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
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />
      <PageAtmosphere />

      <Container className="relative z-10 max-w-4xl">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            headingLevel="h1"
            title="Frequently asked questions"
            description="Everything founders typically ask before starting a build with us."
            center
          />
        </Reveal>

        <div className="mt-10 md:mt-12">
          <FaqAccordion items={faqItems} />
        </div>
      </Container>
    </main>
  );
}
