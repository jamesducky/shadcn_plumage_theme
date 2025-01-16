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
    extend: {
      colors: {
        neutral: {
          50: "hsl(0, 0%, 100%)", // --plmg-color-background-neutral
          100: "hsl(240, 2%, 97%)", // --plmg-color-background-neutral-hover
          200: "hsl(240, 4%, 95%)", // --plmg-color-background-neutral-active
          300: "hsl(228, 9%, 90%)", // --plmg-color-background-neutral-strong
          500: "hsl(228, 6%, 58%)", // --plmg-color-border-neutral
          800: "hsl(228, 11%, 20%)", // Custom darker neutral
          900: "#008290", // --plmg-color-border-neutral-strong
          weak: "hsl(228, 6%, 58%)",
          strong: "#008290",
          dark: "hsl(228, 12%, 10%)",
        },
        red: {
          500: "hsl(356, 70%, 53%)", // --plmg-color-border-danger
          900: "hsl(356, 52%, 38%)", // --plmg-color-background-danger-strong
        },
        primary: {
          100: "hsl(186, 30%, 86%)", // --plmg-color-background-primary
          300: "hsl(186, 44%, 73%)", // --plmg-color-background-primary-hover
          500: "hsl(186, 51%, 61%)", // --plmg-color-background-primary-active
          700: "hsl(186, 100%, 28%)", // --plmg-color-background-primary-strong
          900: "hsl(186, 100%, 24%)", // --plmg-color-background-primary-strong-hover
          weak: "hsl(186, 44%, 73%)",
          strong: "hsl(186, 100%, 28%)",
          hover: "hsl(186, 51%, 61%)",
          active: "hsl(186, 100%, 24%)",
        },
        success: {
          100: "hsl(120, 39%, 88%)", // --plmg-color-background-success
          300: "hsl(120, 39%, 77%)", // --plmg-color-background-success-hover
          500: "hsl(120, 39%, 65%)", // --plmg-color-background-success-active
          700: "hsl(120, 38%, 35%)", // --plmg-color-background-success-strong
          900: "hsl(120, 39%, 29%)", // --plmg-color-background-success-strong-hover
          weak: "hsl(120, 39%, 77%)",
          strong: "hsl(120, 38%, 35%)",
        },
        warning: {
          100: "hsl(48, 100%, 93%)", // --plmg-color-background-warning
          300: "hsl(48, 100%, 86%)", // --plmg-color-background-warning-hover
          500: "hsl(48, 100%, 80%)", // --plmg-color-background-warning-active
          700: "hsl(46, 93%, 20%)", // --plmg-color-background-warning-strong
          weak: "hsl(48, 100%, 86%)",
          strong: "hsl(46, 93%, 20%)",
        },
        info: {
          100: "hsl(186, 47%, 89%)", // --plmg-color-background-info
          300: "hsl(186, 62%, 78%)", // --plmg-color-background-info-hover
          500: "hsl(187, 60%, 63%)", // --plmg-color-background-info-active
          700: "hsl(192, 100%, 28%)", // --plmg-color-background-info-strong
          900: "hsl(186, 100%, 13%)", // --plmg-color-background-info-strong-active
        },
        standout: {
          100: "hsl(18, 100%, 73%)", // --plmg-color-background-standout
          300: "hsl(16, 100%, 63%)", // --plmg-color-background-standout-hover
          500: "hsl(14, 100%, 54%)", // --plmg-color-background-standout-active
          700: "hsl(14, 74%, 40%)", // --plmg-color-background-standout-strong
          weak: "hsl(16, 100%, 63%)",
          strong: "hsl(14, 74%, 40%)",
          hover: "hsl(14, 100%, 54%)",
          active: "hsl(18, 100%, 73%)",
        },
        danger: {
          500: "hsl(356, 70%, 53%)",
          900: "hsl(356, 52%, 38%)",
          strong: "hsl(356, 52%, 38%)",
        },
        white: "hsl(0, 0%, 100%)", //
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
  },
};

export default config;
