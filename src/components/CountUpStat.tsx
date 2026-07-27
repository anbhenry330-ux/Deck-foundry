"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useInView } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function CountUpStat({
  icon,
  value,
  label,
}: {
  icon: ReactNode;
  value: number;
  label: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1200;
    const start = performance.now();
    let frame: number;

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, value]);

  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-[#D9CEB4] bg-[#FBF8F1] p-4 text-center">
      {icon}
      <p ref={ref} className="relative inline-flex font-serif text-xl font-bold text-[#3C382F]">
        {count.toLocaleString()}
        <ArrowUp
          className="absolute left-full top-1/2 ml-1 h-4 w-4 -translate-y-1/2"
          strokeWidth={2.5}
        />
      </p>
      <p className="text-[16px] text-[#3C382F]/60">{label}</p>
    </div>
  );
}
