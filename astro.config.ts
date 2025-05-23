import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/serverless";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://ecovidapangeia.com",

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      lastmod: new Date(),
    }),
    react(),
  ],

  redirects: {
    "/": {
      destination: "/clube-da-transicao",
      status: 301,
    },
  },

  output: "hybrid",
  adapter: vercel(),
});