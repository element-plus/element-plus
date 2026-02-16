import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Inspect from 'vite-plugin-inspect'
import mkcert from 'vite-plugin-mkcert'
import { globSync } from 'tinyglobby'
import { fileURLToPath } from 'node:url'

const elementPlusRoot = import.meta.resolve('element-plus/')
const themeChalkRoot = import.meta.resolve(
  '@element-plus/theme-chalk/',
  elementPlusRoot
)
const componentsRoot = import.meta.resolve(
  '@element-plus/components/',
  elementPlusRoot
)

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@use "/styles/custom.scss" as *;`,
        },
      },
    },
    resolve: {
      alias: [
        {
          find: /^element-plus\/es$/,
          replacement: 'element-plus',
        },
        {
          find: /^element-plus\/es\/components\/(.+)$/,
          replacement: `${componentsRoot}$1`,
        },
        {
          find: /^element-plus\/theme-chalk\/(.+)$/,
          replacement: `${themeChalkRoot}$1`,
        },
      ],
    },
    server: {
      port: 3000,
      host: true,
      https: !!env.HTTPS ? {} : false,
    },
    plugins: [
      vue(),
      vueJsx(),
      Components({
        include: `${__dirname}/**`,
        resolvers: ElementPlusResolver({
          version: '2.0.0-dev.1',
          importStyle: 'sass',
        }),
        dts: false,
      }),
      mkcert(),
      Inspect(),
    ],
    optimizeDeps: {
      noDiscovery: true,
      include: [
        'element-plus > lodash-unified',
        'element-plus > dayjs',
        ...globSync(['(locale|plugin)/*.js'], {
          cwd: fileURLToPath(import.meta.resolve('dayjs/', elementPlusRoot)),
        }).map((path) => `element-plus > dayjs/${path}`),
      ],
    },
  }
})
