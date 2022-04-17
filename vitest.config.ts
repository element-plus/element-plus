import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig({
  plugins: [Vue(), VueJsx(), DefineOptions()],
  optimizeDeps: {
    exclude: ['vue', '@element-plus/icons-vue'],
  },
  test: {
    include: ['**/*.vitest.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['**/*.test.*', '**/*.spec.*', '**/node_modules'],
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.js'],
    transformMode: {
      web: [/\.[jt]sx$/],
    },
  },
})
