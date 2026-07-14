import Link from "next/link";
import { Facebook, MessageCircle } from "lucide-react";
import { WreathMark } from "./WreathMark";

const LINE_URL = "https://line.me/R/ti/p/@881djjb";
const FB_URL = "https://www.facebook.com/profile.php?id=61584390375051&locale=zh_TW";

export function Footer() {
  return (
    <footer className="bg-kraft-texture">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="card-mounted rounded-2xl border border-[#8B5E3C]/10 px-7 py-10 sm:px-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <WreathMark className="h-10 w-10 text-[#8B5E3C]" />
                <div className="leading-tight">
                  <p className="font-serif text-lg font-black text-[#8B5E3C]">構築所</p>
                  <p className="font-display text-xs italic tracking-[0.1em] text-[#8B5E3C]/50">
                    Deck Foundry
                  </p>
                </div>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#8B5E3C]/75">
                牌組構築專門店，鎖定日本上位環境主流牌組，專門構築、收購、客製化，價格實惠、下單最快當日寄出。
              </p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#06C755] px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
                  LINE 官方帳號
                </a>
                <a
                  href={FB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#1877F2] px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  <Facebook className="h-4 w-4" strokeWidth={1.75} />
                  FB 粉專
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#8B5E3C]/45">
                服務項目
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-[#8B5E3C]/80">
                <li>日本上位環境牌組構築販售</li>
                <li>大量收購實用牌料</li>
                <li>客製化牌組訂製</li>
                <li>
                  <Link href="/order-guide" className="hover:underline">
                    下單教學與防詐提醒
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#8B5E3C]/45">
                交易方式
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-[#8B5E3C]/80">
                <li>超商取貨：賣貨便、交貨便</li>
                <li>付款方式：貨到付款、匯款</li>
                <li>面交地點：北捷各大捷運站</li>
                <li className="text-[#8B5E3C]/60">LINE：@881djjb</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-[#8B5E3C]/10 pt-6 text-xs text-[#8B5E3C]/50 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} 構築所 Deck Foundry. All rights reserved.</span>
            <div className="flex gap-5 font-medium">
              <Link href="/about" className="hover:text-[#8B5E3C]">
                關於構築所
              </Link>
              <Link href="/order-guide" className="hover:text-[#8B5E3C]">
                下單教學
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
