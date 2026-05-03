import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern Medical Brutalism palette
        surgical: { DEFAULT: "#003366", light: "#004488", dark: "#001F3F", muted: "#E8EDF4" },
        teal: { DEFAULT: "#00C5A3", light: "#00DDB8", dark: "#009E84", muted: "#E0F7F3" },
        hospital: { white: "#FFFFFF", off: "#F8F9FA", grey: "#F2F4F6" },
        grid: { line: "#E2E4E8", strong: "#C8CDD4" },
        ink: { DEFAULT: "#0A0A0A", secondary: "#2C2C2C", muted: "#6B7280", faint: "#9CA3AF" },
        // Compatibility
        primary: { DEFAULT: "#003366", light: "#004488", foreground: "#FFFFFF" },
        accent: { DEFAULT: "#00C5A3", foreground: "#FFFFFF" },
        success: "#00C5A3",
        "bg-light": "#F8F9FA",
        "text-main": "#0A0A0A",
        "text-muted": "#6B7280",
        border: "#E2E4E8",
        background: "#FFFFFF",
        foreground: "#0A0A0A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "d-2xl": ["clamp(3.25rem, 8vw, 7.5rem)", { lineHeight: "0.93", letterSpacing: "-0.04em" }],
        "d-xl":  ["clamp(2.25rem, 5vw, 4.75rem)", { lineHeight: "0.97", letterSpacing: "-0.03em" }],
        "d-lg":  ["clamp(1.75rem, 3vw, 3rem)",    { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "d-md":  ["clamp(1.25rem, 2vw, 1.875rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        "mono-xl": ["clamp(1.5rem, 2.5vw, 2.25rem)", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "mono-md": ["clamp(0.875rem, 1vw, 1rem)",    { lineHeight: "1.3", letterSpacing: "0" }],
        "mono-sm": ["0.6875rem", { lineHeight: "1.5", letterSpacing: "0.06em" }],
      },
      boxShadow: {
        "crisp": "3px 3px 0 #003366",
        "crisp-teal": "3px 3px 0 #00C5A3",
        "crisp-sm": "2px 2px 0 #003366",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up": { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
