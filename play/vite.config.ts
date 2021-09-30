import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import './vite.init'

export default defineConfig({
  server: {
    host: true,
  },
  plugins: [vue()],
})
