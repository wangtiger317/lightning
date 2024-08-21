import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "dropshadow":"0px 0px 14.8227px rgba(0, 0, 0, 0.05)"
      },
      colors: {
        ...colors,
        "primary": "#1E1E1E",
        "blue": "#1675FF",
        "green":"#00B67A"
      },
      borderRadius: {
        "default":"14.82px"
      }
    },
  },
  plugins: [],
};
export default config;
