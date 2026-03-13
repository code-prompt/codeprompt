import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  center?: boolean;
  headingLevel?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  headingLevel = "h2",
}: SectionHeadingProps) {
  const HeadingTag = headingLevel;

  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
        {eyebrow}
      </p>
      <HeadingTag className="mt-3 text-balance text-2xl font-bold text-slate-900 sm:text-3xl md:text-5xl">
        {title}
      </HeadingTag>
      {description ? (
        <p className="mt-4 text-pretty text-sm leading-7 text-slate-600 sm:text-base md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
