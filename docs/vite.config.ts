import path from 'path'
import Inspect from 'vite-plugin-inspect'
import { defineConfig, loadEnv } from 'vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import UnoCSS from 'unocss/vite'
import mkcert from 'vite-plugin-mkcert'
import glob from 'fast-glob'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { VitePWA } from 'vite-plugin-pwa'
import {
  epPackage,
  getPackageDependencies,
  projRoot,
} from '@element-plus/build-utils'
import { MarkdownTransform } from './.vitepress/plugins/markdown-transform'

import type { Alias } from 'vite'

const alias: Alias[] = [
  {
    find: '~/',
    replacement: `${path.resolve(__dirname, './.vitepress/vitepress')}/`,
  },
]
if (process.env.DOC_ENV !== 'production') {
  alias.push(
    {
      find: /^element-plus(\/(es|lib))?$/,
      replacement: path.resolve(projRoot, 'packages/element-plus/index.ts'),
    },
    {
      find: /^element-plus\/(es|lib)\/(.*)$/,
      replacement: `${path.resolve(projRoot, 'packages')}/$2`,
    }
  )
}

export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  let { dependencies } = getPackageDependencies(epPackage)
  dependencies = dependencies.filter((dep) => !dep.startsWith('@types/')) // exclude dts deps
  const optimizeDeps = [
    'vue',
    '@vue/shared',
    'markdown-it',
    'clipboard-copy',
    'axios',
    'nprogress',
    ...dependencies,
  ]
  optimizeDeps.push(
    ...(await glob(['dayjs/plugin/*.js'], {
      cwd: path.resolve(projRoot, 'node_modules'),
      onlyFiles: true,
    }))
  )

  return {
    server: {
      host: true,
      https: !!env.HTTPS,
      fs: {
        allow: [projRoot],
      },
    },
    resolve: {
      alias,
    },
    plugins: [
      vueJsx(),
      DefineOptions(),

      // https://github.com/antfu/unplugin-vue-components
      Components({
        dirs: ['.vitepress/vitepress/components'],

        allowOverrides: true,

        // custom resolvers
        resolvers: [
          // auto import icons
          // https://github.com/antfu/unplugin-icons
          IconsResolver(),
        ],
      }),

      // https://github.com/antfu/unplugin-icons
      Icons({
        autoInstall: true,
      }),
      UnoCSS(),
      MarkdownTransform(),
      Inspect(),
      mkcert(),
      VitePWA({
        outDir: '.vitepress/dist',
        includeAssets: ['images/**'],
        manifest: {
          id: '/',
          name: 'Element Plus',
          short_name: 'Element Plus',
          description:
            'a Vue 3 based component library for designers and developers',
          icons: [
            {
              src: 'android-chrome-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: 'android-chrome-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
          ],
          theme_color: '#ffffff',
          background_color: '#ffffff',
          display: 'standalone',
        },
      }),
    ],
    optimizeDeps: {
      include: optimizeDeps,
    },
  }
})
