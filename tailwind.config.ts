import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFFDD0",
        sand: "#E1C699",
        coffee: "#8B5E3C",
        paper: "#FFFFFF",
        brand: {
          paper: "#FFFFFF",
          kraft: "#E1C699",
          ink: "#8B5E3C",
          ember: "#8B5E3C",
          brass: "#8B5E3C",
          pine: "#8B5E3C",
          tan: "#E1C699",
          brick: "#9B4A3F",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-display)", "serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
