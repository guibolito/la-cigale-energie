import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

// Remplacez `site` par l'adresse définitive du site (ex. https://www.lacigale-energie.fr)
export default defineConfig({
  site: 'https://lacigaleenergie.fr',
  adapter: cloudflare(),
  // Ancienne adresse de la page clim : redirigée vers la nouvelle
  redirects: { '/climatisation-hyeres': '/climatisation' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') && !page.includes('/api/') })],
  vite: { plugins: [tailwindcss()] },
});
