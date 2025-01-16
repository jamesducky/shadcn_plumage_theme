import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Commissioner", "sans-serif"],
      mono: ["JetBrains Mono", "monospace"],
    },
    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
      950: "#0a0a0a",
    },
    borderRadius: {
      none: "0px", //plmg-border-radius-sharp: 0px;
      // no tailwind default to override for - plmg-border-radius-xs: 2px;
      sm: "4px", // plmg-border-radius-s: 4px;
      DEFAULT: "8px", // plmg-border-radius-m: 8px;
      md: "8px", // plmg-border-radius-m: 8px;
      lg: "16px", // plmg-border-radius-l: 16px;
      xl: "32px", // plmg-border-radius-xl: 32px;
      // no tailwind default to override --plmg-border-radius-circle: 50%;
      full: "9999px",
    },
    ringOffsetWidth: {
      2: "2px", // Focus ring offset width
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
