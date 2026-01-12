import path from 'path'
import { rolldown  } from 'rolldown'
//@ts-expect-error
import { replacePlugin } from 'rolldown/plugins'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { glob } from 'tinyglobby'
import { camelCase, upperFirst } from 'lodash-unified'
import {
  PKG_BRAND_NAME,
  PKG_CAMELCASE_LOCAL_NAME,
  PKG_CAMELCASE_NAME,
} from '@element-plus/build-constants'
import {
  epOutput,
  epRoot,
  execCommand,
  localeRoot,
} from '@element-plus/build-utils'
import { version } from '../../../../packages/element-plus/version'
import { ElementPlusAlias } from '../plugins/element-plus-alias'
import { formatBundleFilename, generateExternal, writeBundles } from '../utils'
import { SupplyValidator } from '../plugins/supply-validator'

import type { Plugin } from 'rolldown'

const banner = `/*! ${PKG_BRAND_NAME} v${version} */\n`

async function buildFullEntry(minify: boolean) {
  const plugins: Plugin[] = [
    ElementPlusAlias(),
    vue() as Plugin,
    vueJsx() as Plugin,
    //nodeResolve({
    //  extensions: ['.mjs', '.js', '.json', '.ts'],
    //}),
    //esbuild({
    //  exclude: [],
    //  sourceMap: minify,
    //  target,
    //  loaders: {
    //    '.vue': 'ts',
    //  },
    //  define: {
    //    'process.env.NODE_ENV': '"production"',
    //  },
    //  treeShaking: true,
    //  legalComments: 'eof',
    //}),
    replacePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    SupplyValidator(),
  ]
  if (minify) {
    //minifyPlugin({
    //  target,
    //  sourceMap: true,
    //})
    plugins.push({
      name: 'minify',
      outputOptions: {
        handler(options) {
            options.sourcemap = true
          return options
        },
      }
    })
  }

  const bundle = await rolldown({
    input: path.resolve(epRoot, 'index.ts'),
    plugins,
    external: await generateExternal({ full: true }),
    treeshake: true,
  })
  await writeBundles(bundle, [
    {
      format: 'umd',
      file: path.resolve(
        epOutput,
        'dist',
        formatBundleFilename('index.full', minify, 'js')
      ),
      exports: 'named',
      name: PKG_CAMELCASE_NAME,
      globals: {
        vue: 'Vue',
      },
      sourcemap: minify,
      banner,
    },
    {
      format: 'esm',
      file: path.resolve(
        epOutput,
        'dist',
        formatBundleFilename('index.full', minify, 'mjs')
      ),
      sourcemap: minify,
      banner,
    },
  ])
}

async function buildFullLocale(minify: boolean) {
  const files = await glob(`**/*.ts`, {
    cwd: path.resolve(localeRoot, 'lang'),
    absolute: true,
  })
  return Promise.all(
    files.map(async (file) => {
      const filename = path.basename(file, '.ts')
      const name = upperFirst(camelCase(filename))

      const bundle = await rolldown({
        input: file,
        plugins: [
          {
            name: 'minify',
            outputOptions: {
              handler: (options) => {
                options.minify = minify
                options.sourcemap = minify
                return options
              },
            }
          }
        ],
      })
      await writeBundles(bundle, [
        {
          format: 'umd',
          file: path.resolve(
            epOutput,
            'dist/locale',
            formatBundleFilename(filename, minify, 'js')
          ),
          exports: 'default',
          name: `${PKG_CAMELCASE_LOCAL_NAME}${name}`,
          sourcemap: minify,
          banner,
        },
        {
          format: 'esm',
          file: path.resolve(
            epOutput,
            'dist/locale',
            formatBundleFilename(filename, minify, 'mjs')
          ),
          sourcemap: minify,
          banner,
        },
      ])
    })
  )
}

export const buildFull = (minify: boolean) => async () =>
  Promise.all([buildFullEntry(minify), buildFullLocale(minify)])

export const buildFullBundle = () => {
  return Promise.all([
    execCommand(buildFull(true), 'buildFullMinified'),
    execCommand(buildFull(false), 'buildFull'),
  ])
}
