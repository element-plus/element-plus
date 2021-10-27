import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import './vite.init'
import { epRoot, pkgRoot } from '../build/utils/paths'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: /^element-plus$/,
        replacement: path.resolve(epRoot, 'index.ts'),
      },
      {
        find: /^element-plus\/(es|lib)\/(.*)$/,
        replacement: `${pkgRoot}/$2`,
      },
    ],
  },
  server: {
    host: true,
  },
  plugins: [
    vue(),
    Components({
      include: `${__dirname}/**`,
      resolvers: ElementPlusResolver({ importStyle: 'sass' }),
    }),
  ],
})
