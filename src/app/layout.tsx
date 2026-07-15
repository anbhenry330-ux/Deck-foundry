import type { Metadata } from "next";
import { Noto_Serif_TC, Noto_Sans_TC, JetBrains_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const serif = Noto_Serif_TC({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["italic", "normal"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "構築所 Deck Foundry｜牌組構築專門",
  description:
    "構築所（Deck Foundry）專門販售日本上位環境主流牌組及牌料，同時提供牌組周邊與客製化訂製，價格實惠、當日出貨。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body
        className={`${serif.variable} ${sans.variable} ${mono.variable} ${display.variable} min-h-screen bg-[#F2ECE0] font-sans text-[#3C382F] antialiased`}
      >
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
