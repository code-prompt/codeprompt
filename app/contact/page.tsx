import type { Metadata } from "next";

import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Code Prompt to discuss MVP development, SaaS architecture, and startup product engineering.",
};

export default function ContactPage() {
  return (
    <main className="pb-16 pt-14 md:pt-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let us turn your product idea into a working software business"
                description="Share your roadmap, constraints, and timeline. We will propose a practical execution plan tailored to your stage."
              />

              <div className="mt-8 space-y-4 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-700">
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
