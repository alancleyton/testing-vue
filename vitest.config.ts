import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vitest/config';
import VuePlugin from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [VuePlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
