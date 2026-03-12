export function PageAtmosphere() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-20 sm:opacity-35 [background-image:linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(59,130,246,0.2),transparent_32%),radial-gradient(circle_at_88%_18%,rgba(14,165,233,0.16),transparent_30%),radial-gradient(circle_at_72%_70%,rgba(37,99,235,0.12),transparent_36%)] sm:bg-[radial-gradient(circle_at_12%_12%,rgba(59,130,246,0.22),transparent_34%),radial-gradient(circle_at_88%_18%,rgba(14,165,233,0.18),transparent_32%),radial-gradient(circle_at_72%_70%,rgba(37,99,235,0.14),transparent_38%)]" />
      <div className="anim-float-slow absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/10 blur-3xl sm:-right-20 sm:-top-20 sm:h-56 sm:w-56" />
      <div className="anim-float-medium anim-delay-1 absolute -left-10 top-40 h-24 w-24 rounded-full bg-sky-400/10 blur-3xl sm:-left-16 sm:top-56 sm:h-44 sm:w-44" />
      <div className="anim-pulse-soft anim-delay-2 absolute bottom-10 right-8 h-14 w-14 rounded-full border border-brand/20 bg-white/45 backdrop-blur-sm sm:bottom-12 sm:right-1/4 sm:h-28 sm:w-28" />
    </div>
  );
}
