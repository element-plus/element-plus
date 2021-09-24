import path from 'path'
import fs from 'fs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { rollup } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue'
import esbuild from 'rollup-plugin-esbuild'
import replace from 'rollup-plugin-replace'
import { parallel, series } from 'gulp'
import { genEntryTypes } from './entry-types'
import { RollupResolveEntryPlugin } from './rollup.plugin.entry'
import { epRoot, buildOutput } from './utils/paths'
import { EP_PREFIX, excludes } from './constants'
import { yellow, green } from './utils/log'
import { generateExternal, writeBundles } from './utils/rollup'
import { buildConfig } from './info'

import type { RollupOptions, OutputOptions } from 'rollup'

let config: RollupOptions

const init = async () =>
  (config = {
    input: path.resolve(epRoot, 'index.ts'),
    plugins: [
      nodeResolve(),
      vue({
        target: 'browser',
        // css: false,
        exposeFilename: false,
      }),
      commonjs(),
      esbuild({ minify: false }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
    ],
    external: await generateExternal({ full: true }),
  })

export const buildFull = async () => {
  yellow('Building bundle')

  // Full bundle generation
  const bundle = await rollup({
    ...config,
    plugins: [...config.plugins!, RollupResolveEntryPlugin()],
  })

  yellow('Generating index.full.js')
  await bundle.write({
    format: 'umd',
    file: path.resolve(buildOutput, 'element-plus/dist/index.full.js'),
    exports: 'named',
    name: 'ElementPlus',
    globals: {
      vue: 'Vue',
    },
  })
  green('index.full.js generated')
}

export const buildEntry = async () => {
  yellow('Generating entry files without dependencies')

  const entryFiles = await fs.promises.readdir(epRoot, {
    withFileTypes: true,
  })

  const entryPoints = entryFiles
    .filter((f) => f.isFile())
    .filter((f) => !['package.json', 'README.md'].includes(f.name))
    .map((f) => path.resolve(epRoot, f.name))

  const bundle = await rollup({
    ...config,
    input: entryPoints,
    external: () => true,
  })

  const rewriter = (id: string) => {
    if (id.startsWith(`${EP_PREFIX}/components`))
      return id.replace(`${EP_PREFIX}/components`, './components')
    else if (id.startsWith(EP_PREFIX) && excludes.every((e) => !id.endsWith(e)))
      return id.replace(EP_PREFIX, '.')
    else return ''
  }

  yellow('Generating entries')
  writeBundles(
    bundle,
    Object.values(buildConfig).map(
      (config): OutputOptions => ({
        format: config.format,
        dir: config.output.path,
        exports: config.format === 'cjs' ? 'named' : undefined,
        paths: rewriter,
      })
    )
  )
  green('entries generated')
}

export const buildFullBundle = series(
  init,
  parallel(buildFull, buildEntry, genEntryTypes)
)
