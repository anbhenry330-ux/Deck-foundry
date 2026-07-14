"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Maximize2, X } from "lucide-react";

export function DecklistViewer({
  src,
  alt,
  width,
  height,
  lot,
  inStock,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  lot: string;
  inStock: boolean;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="relative overflow-hidden rounded-md border border-[#E1C699] bg-[#E1C699]/10">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="h-auto w-full"
          priority
        />

        {!inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/70">
            <span className="rounded-full bg-[#8B5E3C] px-3 py-1 text-xs font-semibold text-white">
              已售罄
            </span>
          </div>
        )}

        <div className="absolute left-0 top-0 border-b border-r border-[#E1C699] bg-white/90 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-wider text-[#8B5E3C]/60 backdrop-blur-sm">
          LOT {lot}
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="放大檢視完整卡表"
          className="absolute right-2 top-2 inline-flex items-center gap-1.5 rounded-md bg-white/90 px-2.5 py-1.5 text-[11px] font-medium text-[#8B5E3C] shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
        >
          <Maximize2 className="h-3.5 w-3.5" strokeWidth={1.75} />
          放大卡表
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={`${alt}｜完整卡表`}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 sm:p-8"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="關閉"
              className="absolute right-4 top-4 inline-flex items-center justify-center rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" strokeWidth={1.75} />
            </button>
            <motion.img
              key="lightbox-image"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={src}
              alt={alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-full cursor-zoom-out rounded-md object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
