import path from 'path'
import Inspect from 'vite-plugin-inspect'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'

import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import { projRoot } from './.vitepress/utils/paths'
import type { Alias } from 'vite'

const alias: Alias[] = []
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

export default defineConfig({
  server: {
    host: true,
    fs: {
      strict: true,
      allow: [projRoot],
    },
  },
  resolve: {
    alias,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          windicss: ['windicss'],
        },
      },
    },
  },
  plugins: [
    // https://github.com/antfu/unplugin-vue-components
    Components({
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

    WindiCSS(),
    Inspect(),
  ],
  optimizeDeps: {
    include: [
      'vue',
      'markdown-it',
      'clipboard-copy',
      '@vueuse/core',
      'axios',
      'nprogress',
      '@element-plus/icons-vue',
      'dayjs',
      'memoize-one',
      'async-validator',
      'lodash',
      '@popperjs/core',
      'normalize-wheel-es',
    ],
  },
})
