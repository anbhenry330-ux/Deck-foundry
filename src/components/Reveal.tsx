"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Reveal({
  children,
  delay = 0,
  className = "",
  mode = "scroll",
}: {
  children: ReactNode;
  /** delay in ms, matches the rest of the codebase's convention */
  delay?: number;
  className?: string;
  /** "scroll": fades in the first time it enters the viewport. "load": fades in immediately on mount (hero-style, above-the-fold content). */
  mode?: "scroll" | "load";
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const transition = { duration: 0.7, delay: delay / 1000, ease: EASE };
  const hidden = { opacity: 0, y: 18 };
  const shown = { opacity: 1, y: 0 };

  if (mode === "load") {
    return (
      <motion.div
        initial={hidden}
        animate={shown}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, amount: 0.15 }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
