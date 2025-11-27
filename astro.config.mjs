import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    react()
  ],
  site: "https://moxin-org.github.io",
  base: "/moxin-ai-org-website",
});
