import type { Config } from "tailwindcss";
import { withTV } from "tailwind-variants/transformer";
import themePlugin from "@shakibdshy/tailwind-theme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@shakibdshy/tailwind-theme/dist/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {}
  },
  plugins: [themePlugin],
};

export default withTV(config);
