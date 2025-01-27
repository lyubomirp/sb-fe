import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        amsterdam: ["New Amsterdam", "Arial", "sans-serif"],
        raleway: ["--font-raleway"],
      },
      animation: {
        text: "text 0.2s ease-in-out infinite",
      },
      keyframes: {
        text: {
          "0%": {
            "background-size": "200% 200%",
            "background-position": "left center",
            transform: "rotate(0deg)",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
            transform: "rotate(180deg)",
          },
          "100%": {
            "background-size": "200% 200%",
            "background-position": "top center",
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
