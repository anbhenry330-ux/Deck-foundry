import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F2ECE0",
        sand: "#D9CEB4",
        coffee: "#3C382F",
        paper: "#FBF8F1",
        brand: {
          paper: "#FBF8F1",
          kraft: "#D9CEB4",
          ink: "#3C382F",
          ember: "#3C382F",
          brass: "#3C382F",
          pine: "#4B5741",
          tan: "#D9CEB4",
          brick: "#A6553A",
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
