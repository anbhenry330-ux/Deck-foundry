import Link from "next/link";
import { Facebook, MessageCircle } from "lucide-react";

const LINE_URL = "https://line.me/R/ti/p/@881idjjb";
const FB_URL = "https://www.facebook.com/profile.php?id=61584390375051&locale=zh_TW";

export function Footer() {
  return (
    <footer className="bg-kraft-texture">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="card-mounted rounded-2xl border border-[#3C382F]/10 px-7 py-10 sm:px-10">
          <div className="grid grid-cols-1 gap-x-10 gap-y-3 md:grid-cols-[1.3fr_1fr_1fr]">
            <div className="leading-tight">
              <p className="font-serif text-lg font-black text-[#3C382F]">構築所</p>
              <p className="font-display text-xs italic tracking-[0.1em] text-[#3C382F]/50">
                Deck Foundry
              </p>
            </div>
            <h4 className="self-end font-mono text-xs uppercase tracking-[0.2em] text-[#3C382F]/45">
              服務項目
            </h4>
            <h4 className="self-end font-mono text-xs uppercase tracking-[0.2em] text-[#3C382F]/45">
              交易方式
            </h4>

            <ul className="max-w-sm space-y-2 text-sm text-[#3C382F]/80">
              <li>專營PTCG主流及熱門牌組構築</li>
              <li>日本最新上位卡表、賽場環境變化分享</li>
              <li>服務全臺各地PTCG玩家，解決組牌需求</li>
              <li>牌組皆可客製化、構築可根據需求調整</li>
            </ul>
            <ul className="space-y-2 text-sm text-[#3C382F]/80">
              <li>日本上位環境牌組及牌料販售</li>
              <li>牌組周邊販售</li>
              <li>客製化牌組訂製</li>
              <li>
                <Link href="/order-guide" className="hover:underline">
                  下單教學與防詐提醒
                </Link>
              </li>
            </ul>
            <ul className="space-y-2 text-sm text-[#3C382F]/80">
              <li>超商取貨：賣貨便</li>
              <li>付款方式：貨到付款</li>
              <li>面交地點：北捷各大捷運站</li>
              <li className="text-[#3C382F]/60">LINE：@881idjjb</li>
            </ul>

            <div className="mt-2 flex flex-wrap gap-2.5">
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

          <div className="mt-10 flex flex-col gap-3 border-t border-[#3C382F]/10 pt-6 text-xs text-[#3C382F]/50 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} 構築所 Deck Foundry. All rights reserved.</span>
            <div className="flex gap-5 font-medium">
              <Link href="/about" className="hover:text-[#3C382F]">
                關於我們
              </Link>
              <Link href="/order-guide" className="hover:text-[#3C382F]">
                下單教學
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
