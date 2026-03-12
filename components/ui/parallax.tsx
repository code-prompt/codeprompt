"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  speed?: number;
  xSpeed?: number;
  rotate?: number;
  scale?: number;
  fade?: boolean;
};

function toDistance(value: number): number {
  if (value === 0) return 0;
  return Math.max(18, Math.min(360, Math.abs(value)));
}

export function Parallax({
  children,
  className,
  speed = 64,
  xSpeed = 0,
  rotate = 0,
  scale = 0,
  fade = false,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  const ySpeed = isMobile ? speed * 0.34 : speed;
  const effectiveXSpeed = isMobile ? 0 : xSpeed;
  const effectiveRotate = isMobile ? rotate * 0.28 : rotate;
  const effectiveScale = isMobile ? scale * 0.4 : scale;
  const useFade = isMobile ? false : fade;

  const yDistance = toDistance(ySpeed);
  const yFrom = ySpeed >= 0 ? -yDistance : yDistance;
  const yTo = -yFrom;
  const y = useTransform(scrollYProgress, [0, 1], [yFrom, yTo]);

  const xDistance = toDistance(effectiveXSpeed);
  const xFrom = effectiveXSpeed >= 0 ? -xDistance : xDistance;
  const xTo = -xFrom;
  const x = useTransform(scrollYProgress, [0, 1], [xFrom, xTo]);

  const rotateFrom = effectiveRotate ? -effectiveRotate : 0;
  const rotateTo = effectiveRotate ? effectiveRotate : 0;
  const rotateZ = useTransform(scrollYProgress, [0, 1], [rotateFrom, rotateTo]);

  const scaleDelta = Math.max(0, Math.min(0.2, effectiveScale));
  const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], [1 - scaleDelta, 1, 1 - scaleDelta]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    useFade ? [0.55, 1, 1, 0.55] : [1, 1, 1, 1],
  );

  if (reduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y, x, rotateZ, scale: scaleValue, opacity, willChange: "transform, opacity" }}>
        {children}
      </motion.div>
    </div>
  );
}
