import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-paralax": "url('/construcao-artesanal-na-ecovila.webp')",
        "regen-paralax": "url('/diversos-participantes-do-projeto-pangeia-agachados-lado-a-lado.webp')",
      },
      colors: {
        "brand-orange": "#CF520E",
        "brand-green": "#545E46",
        "brand-mud": "#76704C",
      },
      fontFamily: {
        "roboto": ["Roboto", "system-ui", "sans"],
        "montserrat": ["Montserrat", "system-ui", "sans"],
      },
      screens: {
        "md-lg": "912px",
      },
    },
  },
  plugins: [],
};

export default config;
