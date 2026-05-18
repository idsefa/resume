// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://haocheng-he.github.io',
  output: 'static',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          zh: 'zh',
          'zh-hant': 'zh-Hant',
          de: 'de',
          fr: 'fr',
        },
      },
    }),
  ],
});
