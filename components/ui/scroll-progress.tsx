"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.25,
  });

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[linear-gradient(90deg,#3b82f6_0%,#0ea5e9_45%,#60a5fa_100%)]"
      style={{ scaleX: progress }}
    />
  );
}
