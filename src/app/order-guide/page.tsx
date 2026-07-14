import Link from "next/link";
import { UserPlus, ExternalLink } from "lucide-react";
import { OrderFlow } from "@/components/OrderFlow";
import { FraudAwareness } from "@/components/FraudAwareness";

const MEMBER_REGISTER_URL = "https://myship.7-11.com.tw/Member/Register";

export default function OrderGuidePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <div className="border-l-4 border-[#E1C699] pl-6">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8B5E3C]/50">
          購物須知
        </span>
        <h1 className="mt-2 font-serif text-3xl font-bold text-[#8B5E3C]">下單教學</h1>
        <p className="mt-3 text-[15px] leading-relaxed text-[#8B5E3C]/80">
          構築所的商品透過賣貨便（7-11 MyShip）出貨，支援貨到付款。第一次購買的訓練家，
          請先花一分鐘看完這頁，了解完整下單流程與防詐提醒。
        </p>
      </div>

      {/* first-time buyer callout */}
      <div className="mt-8 flex flex-col gap-4 rounded-lg border border-[#8B5E3C] bg-[#8B5E3C]/5 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <UserPlus className="mt-0.5 h-6 w-6 shrink-0 text-[#8B5E3C]" strokeWidth={1.5} />
          <div>
            <h2 className="font-serif text-lg font-bold text-[#8B5E3C]">
              沒用過賣貨便嗎？請先註冊 7-11 會員
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-[#8B5E3C]/75">
              下單前系統會請你登入 7-11 OPEN POINT 會員，第一次使用的買家請先完成註冊，
              才能繼續選擇取貨門市與貨到付款。
            </p>
          </div>
        </div>
        <a
          href={MEMBER_REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-[#8B5E3C] px-5 py-3 text-sm font-semibold text-[#FFFDD0] transition-opacity hover:opacity-90"
        >
          前往註冊 7-11 會員
          <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
        </a>
      </div>

      {/* flowchart */}
      <div className="mt-12">
        <h2 className="mb-6 font-serif text-xl font-bold text-[#8B5E3C]">完整下單流程</h2>
        <OrderFlow />
      </div>

      {/* fraud awareness */}
      <div className="mt-12">
        <FraudAwareness />
      </div>

      <div className="mt-12 flex flex-wrap gap-3 border-t border-[#E1C699] pt-8">
        <Link
          href="/products"
          className="rounded-md bg-[#8B5E3C] px-5 py-3 text-sm font-semibold text-[#FFFDD0] hover:opacity-90"
        >
          瀏覽商品目錄
        </Link>
        <Link
          href="/about"
          className="rounded-md border border-[#E1C699] px-5 py-3 text-sm font-semibold text-[#8B5E3C] hover:bg-[#E1C699]"
        >
          關於構築所
        </Link>
      </div>
    </div>
  );
}
