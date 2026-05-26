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
        ink: "#17201A",
        graphite: "#303832",
        paper: "#F7F8F3",
        wash: "#EAF0E7",
        accent: "#3F6F52",
        line: "#D8DED2"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(23, 32, 26, 0.09)",
        focus: "0 0 0 4px rgba(63, 111, 82, 0.18)"
      }
    }
  },
  plugins: []
};

export default config;
