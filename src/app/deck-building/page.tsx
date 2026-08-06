import type { Metadata } from "next";
import { DeckBuildFlow } from "@/components/DeckBuildFlow";

export const metadata: Metadata = {
  title: "牌組構築教學",
  description:
    "如何構築一副完整的 PTCG 牌組？寶可夢卡、訓練家卡、能量卡建議配置比例，以及開卡包、購買官方戰術牌組、實體卡牌店、線上通路等獲取完整牌組的四種方式比較。",
};

export default function DeckBuildingPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14">
      <div className="border-l-4 border-[#D9CEB4] pl-6 text-center sm:text-left">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#3C382F]/50">
          構築知識
        </span>
        <h1 className="mt-2 font-serif text-3xl font-bold text-[#3C382F]">
          如何構築一副完整牌組？
        </h1>
        <p className="mt-3 text-base leading-relaxed text-[#3C382F]/80">
          一副完整的 PTCG 牌組為 60 張，
          <br />
          由寶可夢卡、訓練家卡（物品、道具、支援者、競技場）及能量卡組成。
        </p>
      </div>

      <div className="mt-12">
        <DeckBuildFlow />
      </div>
    </div>
  );
}
