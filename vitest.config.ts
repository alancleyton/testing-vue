import path from 'path';

import { defineConfig } from 'vitest/config';
import VuePlugin from '@vitejs/plugin-vue';

function _resolve(dir: string) {
  return path.resolve(__dirname, dir);
}

export default defineConfig({
  plugins: [VuePlugin()],
  test: {
    environment: 'happy-dom',
  },
  resolve: {
    alias: {
      '@': _resolve('src'),
    },
  },
});
