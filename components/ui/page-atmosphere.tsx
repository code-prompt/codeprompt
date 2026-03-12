export function PageAtmosphere() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,rgba(59,130,246,0.22),transparent_34%),radial-gradient(circle_at_88%_18%,rgba(14,165,233,0.18),transparent_32%),radial-gradient(circle_at_72%_70%,rgba(37,99,235,0.14),transparent_38%)]" />
      <div className="anim-float-slow absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand/10 blur-3xl" />
      <div className="anim-float-medium anim-delay-1 absolute -left-16 top-56 h-44 w-44 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="anim-pulse-soft anim-delay-2 absolute bottom-12 right-1/4 h-28 w-28 rounded-full border border-brand/20 bg-white/45 backdrop-blur-sm" />
    </div>
  );
}
