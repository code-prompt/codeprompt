"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import type { FaqItem } from "@/lib/site-data";

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <div
            key={item.question}
            className="rounded-2xl border border-slate-200 bg-white/90 shadow-[0_10px_30px_-25px_rgba(15,23,42,0.5)]"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-slate-900">{item.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {isOpen ? (
              <div className="px-6 pb-6 text-sm leading-7 text-slate-600">{item.answer}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
