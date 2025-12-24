import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 60s linear infinite',
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        primary: "#F8A108",
      },
    },
  },
  plugins: [],
};
export default config;
