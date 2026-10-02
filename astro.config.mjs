// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // Base path for GitHub Pages project site (https://girishlade111.github.io/astra-pro-portfolio/)
  base: '/astra-pro-portfolio/',
  integrations: [tailwind()],
});
