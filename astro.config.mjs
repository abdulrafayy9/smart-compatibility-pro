// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'www.devicecompat.com',
  integrations: [sitemap()],
});
