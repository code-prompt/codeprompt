import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqItems } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about our MVP development company and SaaS engineering process.",
};

export default function FaqPage() {
  return (
    <main className="pb-16 pt-14 md:pt-20">
      <Container className="max-w-4xl">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Everything founders typically ask before starting a build with us."
            center
          />
        </Reveal>

        <div className="mt-12">
          <FaqAccordion items={faqItems} />
        </div>
      </Container>
    </main>
  );
}
