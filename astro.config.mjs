// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['kleur']
    },
    optimizeDeps: {
      include: ['kleur']
    }
  },
  output: 'server',
  adapter: vercel({
    edgeMiddleware: true
  })
});