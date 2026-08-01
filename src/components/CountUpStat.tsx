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
    <div className="flex flex-col items-center gap-2 rounded-xl border border-[#D9CEB4] bg-[#FBF8F1] p-3 text-center sm:p-4">
      {icon}
      <p ref={ref} className="inline-flex items-center justify-center gap-0.5 font-serif text-lg font-bold text-[#3C382F] sm:text-xl">
        {count.toLocaleString()}
        <ArrowUp className="h-4 w-4 shrink-0" strokeWidth={2.5} />
      </p>
      <p className="text-sm text-[#3C382F]/60 sm:text-[16px]">{label}</p>
    </div>
  );
}
