import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros({
      setupComponent: false,
      setupSFC: false,
      plugins: {
        vue: vue(),
        vueJsx: vueJsx(),
      },
    }),
  ],
  server: {
    port: 5000,
  },
  test: {
    include: ['**/*.puppeteer.{ts,tsx}'],
    testTimeout: 30_000,
    hookTimeout: 30_000,
  },
})
