import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://master--peppy-bubblegum-5aab13.netlify.app",
  integrations: [preact()]
});