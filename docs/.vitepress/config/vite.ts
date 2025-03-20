import path from 'path'
import Inspect from 'vite-plugin-inspect'
import UnoCSS from 'unocss/vite'
import mkcert from 'vite-plugin-mkcert'
import glob from 'fast-glob'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { loadEnv } from 'vitepress'
import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import {
  docPackage,
  epPackage,
  getPackageDependencies,
  projRoot,
} from '@element-plus/build-utils'
import { MarkdownTransform } from '../plugins/markdown-transform'
import type { Plugin, UserConfig } from 'vitepress'

type ViteConfig = Required<UserConfig>['vite']
type ResolveOptions = Required<ViteConfig>['resolve']
type AliasOptions = Required<ResolveOptions>['alias']

const { dependencies: epDeps } = getPackageDependencies(epPackage)
const { dependencies: docsDeps } = getPackageDependencies(docPackage)
const optimizeDeps = [...new Set([...epDeps, ...docsDeps])].filter(
  (dep) =>
    !dep.startsWith('@types/') &&
    !['@element-plus/metadata', 'element-plus'].includes(dep)
)
optimizeDeps.push(
  ...(await glob(['dayjs/plugin/*.js'], {
    cwd: path.resolve(projRoot, 'node_modules'),
    onlyFiles: true,
  }))
)

const alias: AliasOptions = [
  {
    find: '~/',
    replacement: `${path.resolve(__dirname, '../vitepress')}/`,
  },
  ...(process.env.DOC_ENV === 'production'
    ? []
    : [
        {
          find: /^element-plus(\/(es|lib))?$/,
          replacement: path.resolve(projRoot, 'packages/element-plus/index.ts'),
        },
        {
          find: /^element-plus\/(es|lib)\/(.*)$/,
          replacement: `${path.resolve(projRoot, 'packages')}/$2`,
        },
      ]),
]

export const getViteConfig = ({ mode }: { mode: string }): ViteConfig => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
    server: {
      host: true,
      fs: {
        allow: [projRoot],
      },
    },
    resolve: {
      alias,
    },
    plugins: [
      vueJsx(),

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

        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      }),

      // https://github.com/antfu/unplugin-icons
      Icons({
        autoInstall: true,
      }),

      UnoCSS({
        inspector: false,
      }),

      MarkdownTransform(),
      Inspect(),
      groupIconVitePlugin(),
      env.HTTPS ? (mkcert() as Plugin) : undefined,
    ],
    optimizeDeps: {
      include: optimizeDeps,
    },
  }
}
