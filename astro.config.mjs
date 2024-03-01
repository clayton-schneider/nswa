import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://www.nswadvisors.com/",
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), sitemap(), react(), partytown()],
  vite: {
    ssr: {
      noExternal: ["@splidejs/splide"]
    }
  }
});