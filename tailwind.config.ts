import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        "card-surface": "#141414",
        "border-subtle": "#252525",
        /* ── Brand yellow (matches logo #FFB800) ── */
        gold: "#FFB800",
        "gold-light": "#FFC533",
        "gold-dark": "#E6A800",
        /* brand = same yellow family (replaces old red) */
        brand: "#FFB800",
        "text-primary": "#f5f0e8",
        "text-muted": "#7a7060",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        script: ["var(--font-great-vibes)", "cursive"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 25s linear infinite",
        "spin-slow-reverse": "spin 20s linear infinite reverse",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 60px rgba(255,184,0,0.18)" },
          "50%": { boxShadow: "0 0 100px rgba(255,184,0,0.38)" },
        },
      },
      boxShadow: {
        "gold-glow":    "0 0 80px rgba(255,184,0,0.22), 0 0 160px rgba(255,184,0,0.08)",
        "gold-glow-sm": "0 0 30px rgba(255,184,0,0.18)",
        "brand-glow":   "0 8px 32px rgba(255,184,0,0.35)",
        "brand-glow-lg":"0 12px 50px rgba(255,184,0,0.5)",
        "logo-glow":    "0 4px 20px rgba(255,184,0,0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
