import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#18191B",
        graphite: "#303236",
        paper: "#F7F7F3",
        wash: "#ECEFEA",
        accent: "#5E6D62",
        line: "#D8D8D2"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(24, 25, 27, 0.08)",
        focus: "0 0 0 4px rgba(94, 109, 98, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
