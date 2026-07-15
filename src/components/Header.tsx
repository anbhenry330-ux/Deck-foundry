"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ExternalLink, Menu, X } from "lucide-react";

const NAV = [
  { href: "/", label: "首頁" },
  { href: "/products", label: "商品目錄" },
  { href: "/tournament-results", label: "近期戰績" },
  { href: "/order-guide", label: "下單教學" },
  { href: "/about", label: "關於我們" },
];

// 賣貨便賣場首頁，之後若有品牌自己的網域可再更新
const STORE_URL = "https://myship.7-11.com.tw/general/detail/GM2604248168251";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-[#FBF8F1]/95 backdrop-blur transition-shadow ${
        scrolled ? "border-[#D9CEB4] shadow-[0_4px_16px_-8px_rgba(60,56,47,0.35)]" : "border-[#D9CEB4]/50"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-[padding] duration-300 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl font-black text-[#3C382F]">構築所</span>
            <span className="font-display text-[10px] italic tracking-[0.15em] text-[#3C382F]/50">
              Deck Foundry
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-[#3C382F]/75 transition-colors hover:text-[#3C382F] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#3C382F] after:transition-all hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-md bg-[#3C382F] px-4 py-2 text-sm font-semibold text-[#FBF8F1] transition-transform hover:-translate-y-0.5 hover:shadow-md sm:inline-flex"
          >
            前往下單
            <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "關閉選單" : "開啟選單"}
            aria-expanded={open}
            className="inline-flex items-center justify-center rounded-md p-2 text-[#3C382F] md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* mobile nav */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-[#D9CEB4]/60 px-6 py-3 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2.5 text-sm font-medium text-[#3C382F]/85 hover:bg-[#D9CEB4]/15"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-[#3C382F] px-4 py-2.5 text-sm font-semibold text-[#FBF8F1]"
          >
            前往下單
            <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
          </a>
        </nav>
      )}
    </header>
  );
}
