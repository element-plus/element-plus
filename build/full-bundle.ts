import path from 'path'
import fs from 'fs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { rollup } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue'
import esbuild from 'rollup-plugin-esbuild'
import replace from '@rollup/plugin-replace'
import { parallel } from 'gulp'
import { genEntryTypes } from './entry-types'
import { RollupResolveEntryPlugin } from './rollup-plugin-entry'
import { epRoot, epOutput } from './utils/paths'
import { yellow, green } from './utils/log'
import {
  generateExternal,
  rollupPathRewriter,
  writeBundles,
} from './utils/rollup'
import { buildConfig } from './info'
import { run } from './utils/process'
import { withTaskName } from './utils/gulp'
import type { BuildConfigEntries } from './info'

import type { RollupOptions, OutputOptions, InputOptions } from 'rollup'

const getConfig = async (
  opt: {
    minify?: boolean
    sourceMap?: boolean
    plugins?: InputOptions['plugins']
  } = {}
): Promise<RollupOptions> => ({
  input: path.resolve(epRoot, 'index.ts'),
  plugins: [
    nodeResolve(),
    vue({
      target: 'browser',
      // css: false,
      exposeFilename: false,
    }),
    commonjs(),
    esbuild({
      minify: opt.minify,
      sourceMap: opt.sourceMap,
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    ...(opt.plugins ?? []),
  ],
  external: await generateExternal({ full: true }),
})

export const buildFull = (minify: boolean) => async () => {
  const bundle = await rollup(
    await getConfig({
      plugins: [RollupResolveEntryPlugin()],
      minify,
      sourceMap: minify,
    })
  )
  await writeBundles(bundle, [
    {
      format: 'umd',
      file: path.resolve(epOutput, `dist/index.full${minify ? '.min' : ''}.js`),
      exports: 'named',
      name: 'ElementPlus',
      globals: {
        vue: 'Vue',
      },
      sourcemap: minify,
    },
    {
      format: 'esm',
      file: path.resolve(
        epOutput,
        `dist/index.full${minify ? '.min' : ''}.mjs`
      ),
      sourcemap: minify,
    },
  ])
}

export const buildEntry = async () => {
  const entryFiles = await fs.promises.readdir(epRoot, {
    withFileTypes: true,
  })

  const entryPoints = entryFiles
    .filter((f) => f.isFile())
    .filter((f) => !['package.json', 'README.md'].includes(f.name))
    .map((f) => path.resolve(epRoot, f.name))

  const bundle = await rollup({
    ...(await getConfig()),
    input: entryPoints,
    external: () => true,
  })

  yellow('Generating entries')
  const rewriter = await rollupPathRewriter()
  writeBundles(
    bundle,
    (Object.entries(buildConfig) as BuildConfigEntries).map(
      ([module, config]): OutputOptions => ({
        format: config.format,
        dir: config.output.path,
        exports: config.format === 'cjs' ? 'named' : undefined,
        paths: rewriter(module),
      })
    )
  )
  green('entries generated')
}

export const copyFullStyle = () =>
  Promise.all([
    run(`cp ${epOutput}/theme-chalk/index.css ${epOutput}/dist/index.css`),
    run(`cp -R ${epOutput}/theme-chalk/fonts ${epOutput}/dist/fonts`),
  ])

export const buildFullBundle = parallel(
  withTaskName('buildFullMinified', buildFull(true)),
  withTaskName('buildFull', buildFull(false)),
  buildEntry,
  genEntryTypes
)
