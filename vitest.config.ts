import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/vite'

export default defineConfig({
  plugins: [Vue(), VueJsx(), VueMacros()],
  optimizeDeps: {
    disabled: true,
  },
  test: {
    clearMocks: true,
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    transformMode: {
      web: [/\.[jt]sx$/],
    },
  },
})
