import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Remplacez `site` par l'adresse définitive du site (ex. https://www.lacigale-energie.fr)
export default defineConfig({
  site: 'https://la-cigale-energie.pages.dev',
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  vite: { plugins: [tailwindcss()] },
});
