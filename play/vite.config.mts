import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import Inspect from 'vite-plugin-inspect'
import mkcert from 'vite-plugin-mkcert'
import { glob } from 'tinyglobby'
import {
  epPackage,
  epRoot,
  getPackageDependencies,
  pkgRoot,
  projRoot,
} from '@element-plus/build-utils'

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  let { dependencies } = getPackageDependencies(epPackage)
  dependencies = dependencies.filter((dep) => !dep.startsWith('@types/')) // exclude dts deps
  const optimizeDeps = await glob(['dayjs/(locale|plugin)/*.js'], {
    cwd: path.resolve(projRoot, 'node_modules'),
  })

  return {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@use "/styles/custom.scss" as *;`,
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
    resolve: {
      alias: [
        {
          find: /^@guwave\/ui(\/(es|lib))?$/,
          replacement: path.resolve(epRoot, 'index.ts'),
        },
        {
          find: /^@guwave\/ui\/(es|lib)\/(.*)$/,
          replacement: `${pkgRoot}/$2`,
        },
      ],
    },
    server: {
      port: 3000,
      host: true,
      https: !!env.HTTPS ? {} : false,
    },
    build: {
      sourcemap: true,
    },
    plugins: [
      vue(),
      vueJsx(),
      Components({
        include: `${__dirname}/**`,
        resolvers: [
          (componentName) => {
            if (componentName.startsWith('G')) {
              const name = componentName.slice(1)
              const kebab = name
                .replace(/([A-Z])/g, '-$1')
                .toLowerCase()
                .slice(1)
              return {
                name: componentName,
                from: '@guwave/ui',
                sideEffects: `@guwave/ui/es/components/${kebab}/style/css`,
              }
            }
          },
        ],
        dts: false,
      }),
      mkcert(),
      Inspect(),
    ],

    optimizeDeps: {
      include: ['vue', '@vue/shared', ...dependencies, ...optimizeDeps],
    },
    esbuild: {
      target: 'chrome64',
    },
  }
})
