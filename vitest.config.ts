import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig({
  plugins: [Vue(), VueJsx(), DefineOptions()],
  test: {
    include: ['**/*.vitest.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    exclude: ['**/*.test.*', '**/*.spec.*'],
    environment: 'jsdom',
  },
})
