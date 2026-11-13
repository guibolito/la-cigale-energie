import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// Remplacez `site` par l'adresse définitive du site (ex. https://www.lacigale-energie.fr)
export default defineConfig({
  site: 'https://la-cigale-energie.vercel.app',
  adapter: vercel(),
  // Ancienne adresse de la page clim : redirigée vers la nouvelle
  redirects: { '/climatisation-hyeres': '/climatisation' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') && !page.includes('/api/') })],
  vite: { plugins: [tailwindcss()] },
});
