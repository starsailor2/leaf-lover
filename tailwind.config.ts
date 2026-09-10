import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#183A2B",
          50: "#f2f7f4",
          100: "#e0ede5",
          200: "#c2dccd",
          300: "#98c3ab",
          400: "#69a384",
          500: "#468565",
          600: "#346b50",
          700: "#2a5540",
          800: "#234434",
          900: "#183A2B",
          950: "#0d2118",
        },
        leaf: {
          DEFAULT: "#4F7659",
          light: "#729b7c",
          dark: "#395740",
        },
        cream: {
          DEFAULT: "#F7F4EC",
          light: "#FAF8F3",
          dark: "#EFEADB",
        },
        sage: {
          DEFAULT: "#E7EDE3",
          light: "#F0F5EC",
          dark: "#D6E0D0",
        },
        terracotta: {
          DEFAULT: "#B87355",
          light: "#CF8B6D",
          dark: "#98563A",
        },
        dark: {
          DEFAULT: "#18211C",
          muted: "#667067",
        }
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "DM Sans", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "8px",
        md: "14px",
        lg: "24px",
        xl: "32px",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(24, 58, 43, 0.05)",
        card: "0 10px 30px -4px rgba(24, 58, 43, 0.08)",
        hover: "0 20px 40px -6px rgba(24, 58, 43, 0.12)",
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
        '105': '1.05',
        '107': '1.07',
        '110': '1.10',
      },
      willChange: {
        transform: 'transform',
      },
    },
  },
  plugins: [],
};


export default config;
