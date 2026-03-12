"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

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
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yDistance = toDistance(speed);
  const yFrom = speed >= 0 ? -yDistance : yDistance;
  const yTo = -yFrom;
  const y = useTransform(scrollYProgress, [0, 1], [yFrom, yTo]);

  const xDistance = toDistance(xSpeed);
  const xFrom = xSpeed >= 0 ? -xDistance : xDistance;
  const xTo = -xFrom;
  const x = useTransform(scrollYProgress, [0, 1], [xFrom, xTo]);

  const rotateFrom = rotate ? -rotate : 0;
  const rotateTo = rotate ? rotate : 0;
  const rotateZ = useTransform(scrollYProgress, [0, 1], [rotateFrom, rotateTo]);

  const scaleDelta = Math.max(0, Math.min(0.2, scale));
  const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], [1 - scaleDelta, 1, 1 - scaleDelta]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], fade ? [0.55, 1, 1, 0.55] : [1, 1, 1, 1]);

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
