import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [Vue(), VueJsx()],
  optimizeDeps: {
    disabled: true,
  },
  test: {
    name: 'unit',
    clearMocks: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    reporters: ['default'],
    coverage: {
      reporter: ['text', 'json-summary', 'json'],
      exclude: [
        'play/**',
        '**/lang/**',
        'packages/components/*/style/**',
        'scripts/**',
        'ssr-testing/**',
      ],
    },
  },
})
