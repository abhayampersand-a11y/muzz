import {extendedConfig} from "./src/utils/extendedConfig";
import type {Config} from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/app/**/*.{ts,tsx,js,jsx,mdx}", "./src/components/**/*.{ts,tsx,js,jsx,mdx}", "./src/pages/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      ...extendedConfig,
    },
  },
  plugins: [],
};
export default config;
