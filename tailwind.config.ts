import type { Config } from "tailwindcss";

// Tailwind v4: All theme customisation (colors, fonts, shadows) lives in
// app/globals.css inside @theme {}. This file only needs content paths.
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
};

export default config;
