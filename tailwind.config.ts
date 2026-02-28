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
                void: "#0A0908",
                obsidian: "#131210",
                ash: "#1E1C1A",
                smoke: "#2E2B28",
                stone: "#6B6560",
                parchment: "#C9B99A",
                ivory: "#EDE8DF",
                gold: "#C9973A",
                "gold-dim": "#8A6728",
                ember: "#8B3A2F",
            },
            fontFamily: {
                cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
                cinzel: ["var(--font-cinzel)", "serif"],
                garamond: ["var(--font-eb-garamond)", "Georgia", "serif"],
                mono: ["var(--font-dm-mono)", "monospace"],
            },
            animation: {
                "fade-up": "fadeUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
                "fade-in": "fadeIn 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
                "ticker": "ticker 30s linear infinite",
            },
            keyframes: {
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                ticker: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};

export default config;
