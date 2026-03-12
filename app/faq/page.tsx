import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { PageAtmosphere } from "@/components/ui/page-atmosphere";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about our MVP development company and SaaS engineering process.",
  alternates: { canonical: "/faq" },
  openGraph: {
    url: "/faq",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function FaqPage() {
  return (
    <main className="relative overflow-hidden pb-14 pt-12 md:pb-16 md:pt-20">
      <PageAtmosphere />

      <Container className="relative z-10 max-w-4xl">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
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
