import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "brand-orange": "#CF520E",
        "brand-green": "#545E46",
        "brand-mud": "#76704C",
      },
      fontFamily: {
        "roboto": ["Roboto", "system-ui", "sans"],
        "montserrat": ["Montserrat", "system-ui", "sans"],
      },
    },
  },
  plugins: [],
};

export default config;
