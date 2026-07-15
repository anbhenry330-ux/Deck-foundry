"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

/**
 * Mounted print that tilts toward the cursor, like leaning in to look at a
 * physical photo pinned to a board. Resting tilt + pointer-driven tilt share
 * the same transform so they never fight each other.
 */
export function TiltCard({
  children,
  className = "",
  restingRotate = 1.2,
}: {
  children: ReactNode;
  className?: string;
  restingRotate?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { stiffness: 200, damping: 22 };
  const tiltX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), springConfig);
  const tiltY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), springConfig);

  if (prefersReducedMotion) {
    return (
      <div className={className} style={{ transform: `rotate(${restingRotate}deg)` }}>
        {children}
      </div>
    );
  }

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: tiltX, rotateY: tiltY, rotate: restingRotate, transformPerspective: 900 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
