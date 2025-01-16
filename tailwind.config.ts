import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  fontFamily: {
    sans: ["Commissioner", "sans-serif"],
    mono: ["JetBrains Mono", "monospace"],
  },

  theme: {
    extend: {
      colors: {
        neutral: {
          50: "#ffffff", // --plmg-color-text-primary:
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          // 900: "#171717",
          900: "#FF69B4",
          950: "#0a0a0a",
        },
        teal: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#008290", // --plmg-color-background-primary-strong
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },
      },
    },
    borderWidth: {
      DEFAULT: "6px",
    },
    borderRadius: {
      none: "0px", //plmg-border-radius-sharp: 0px;
      sm: "4px", // plmg-border-radius-s: 4px;
      DEFAULT: "20px", // plmg-border-radius-m: 8px;
      md: "8px", // plmg-border-radius-m: 8px;
      lg: "16px", // plmg-border-radius-l: 16px;
      xl: "20px", // plmg-border-radius-xl: 32px;
      full: "9999px",
    },
    ringOffsetWidth: {
      2: "8px", // Focus ring offset width
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
