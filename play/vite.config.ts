import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import './vite.init'

export default defineConfig({
  server: {
    host: true,
  },
  plugins: [
    vue(),
    Components({
      resolvers: ElementPlusResolver(),
    }),
  ],
})
