import type { Metadata } from "next";
import { Noto_Serif_TC, Noto_Sans_TC, JetBrains_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SITE_URL } from "@/lib/site";

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

const TITLE = "構築所 Deck Foundry｜牌組構築專門";
const DESCRIPTION =
  "構築所（Deck Foundry）專門販售日本上位環境主流牌組及牌料，同時提供牌組周邊與客製化訂製，價格實惠、當日出貨。";

const FB_URL = "https://www.facebook.com/profile.php?id=61584390375051&locale=zh_TW";
const LINE_URL = "https://line.me/R/ti/p/@881idjjb";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "構築所",
  alternateName: "Deck Foundry",
  url: SITE_URL,
  logo: `${SITE_URL}/cover.png`,
  description: DESCRIPTION,
  sameAs: [FB_URL, LINE_URL],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "構築所 Deck Foundry",
  url: SITE_URL,
  inLanguage: "zh-Hant",
};

const KEYWORDS = [
  "構築所",
  "Deck Foundry",
  "PTCG",
  "寶可夢集換式卡牌",
  "寶可夢卡牌",
  "神奇寶貝卡牌",
  "牌組構築",
  "牌組購買",
  "日本上位環境",
  "上位環境牌組",
  "客製化牌組",
  "牌料收購",
  "卡牌買賣",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s｜構築所 Deck Foundry",
  },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "構築所 Deck Foundry",
    locale: "zh_TW",
    type: "website",
    images: [{ url: "/cover.png", width: 1600, height: 900 }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/cover.png"],
  },
  verification: {
    google: "Ca3G3S_CWNw2tabGURVpIdV-gvGtzZppNDidGmR-Kso",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Header />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
