"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[#D9CEB4]/40 overflow-hidden rounded-2xl border border-[#D9CEB4] bg-[#FBF8F1]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-serif text-[15px] font-bold text-[#3C382F] md:text-base">
                {item.q}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-[#3C382F]/45 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                strokeWidth={1.75}
              />
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-sm leading-relaxed text-[#3C382F]/70">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
