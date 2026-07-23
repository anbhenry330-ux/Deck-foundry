"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface HeroSlide {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  desc: string;
  ctaLabel: string;
  ctaHref: string;
}

export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), [slides.length]);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + slides.length) % slides.length),
    [slides.length]
  );

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next, paused, slides.length]);

  return (
    <section
      className="relative overflow-hidden bg-[#3C382F]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[460px] w-full md:h-[580px]">
        {slides.map((slide, i) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3C382F]/85 via-[#3C382F]/30 to-transparent" />
            <div className="relative flex h-full items-end">
              <div className="mx-auto w-full max-w-6xl px-6 pb-14 md:pb-20">
                <div className="max-w-xl">
                  <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/70">
                    {slide.eyebrow}
                  </span>
                  <h1 className="mt-4 font-serif text-3xl font-black leading-tight text-white md:text-5xl">
                    {slide.title}
                  </h1>
                  <p
                    className="mt-4 max-w-md text-sm italic leading-relaxed text-white/80 md:text-base"
                    style={{ fontFamily: "'DFKai-SP', 'BiauKai', 'KaiTi', serif" }}
                  >
                    {slide.desc}
                  </p>
                  <Link
                    href={slide.ctaHref}
                    className="mt-7 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#3C382F] transition-transform hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    {slide.ctaLabel}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="上一張"
            className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/15 p-2 text-white backdrop-blur transition-colors hover:bg-white/25 sm:flex"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="下一張"
            className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white/15 p-2 text-white backdrop-blur transition-colors hover:bg-white/25 sm:flex"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2} />
          </button>

          <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {slides.map((slide, i) => (
              <button
                key={slide.image}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`前往第 ${i + 1} 張輪播`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
