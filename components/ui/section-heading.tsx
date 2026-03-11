import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  center?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-balance text-3xl font-bold text-slate-900 md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-base text-slate-600 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
