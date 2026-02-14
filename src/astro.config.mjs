// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/configuration
export default defineConfig({
  integrations: [
    react({
      include: ["**/react/*"],
    }),
  ]
});
