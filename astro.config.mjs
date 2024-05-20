import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  i18n:{
    defaultLocale:"en",
    locales:["zh","en","ar"],
    // routing: "manual",
    prefixDefaultLocale:true,
    fallback:{
      ar:"en"
    }


  }
});