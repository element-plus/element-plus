import fs from 'fs'
import path from 'path'
import { series, parallel } from 'gulp'
import { rollup } from 'rollup'
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import { sync as globSync } from 'fast-glob'
import filesize from 'rollup-plugin-filesize'

import { compRoot, buildOutput } from './utils/paths'
import {
  generateExternal,
  rollupPathRewriter,
  writeBundles,
} from './utils/rollup'
import { run } from './utils/process'
import { withTaskName } from './utils/gulp'

import { genComponentTypes } from './component-types'
import { buildConfig } from './info'
import reporter from './size-reporter'

import type { OutputOptions } from 'rollup'
import type { Module, BuildConfigEntries } from './info'

const plugins = [
  css(),
  vue({
    target: 'browser',
    // css: false,
  }),
  nodeResolve(),
  commonjs(),
  esbuild(),
]

async function getComponents() {
  const files = globSync('*', {
    cwd: compRoot,
    onlyDirectories: true,
  })
  return files.map((file) => ({
    path: path.resolve(compRoot, file),
    name: file,
  }))
}

export async function buildEachComponent() {
  const componentPaths = await getComponents()
  const external = await generateExternal({ full: false })
  const pathRewriter = await rollupPathRewriter()

  const builds = componentPaths.map(
    async ({ path: p, name: componentName }) => {
      const entry = path.resolve(p, 'index.ts')
      if (!fs.existsSync(entry)) return

      const rollupConfig = {
        input: entry,
        plugins,
        external,
      }
      const opts = (Object.entries(buildConfig) as BuildConfigEntries).map(
        ([module, config]): OutputOptions => ({
          format: config.format,
          file: path.resolve(
            config.output.path,
            'components',
            componentName,
            'index.js'
          ),
          exports: module === 'cjs' ? 'named' : undefined,
          paths: pathRewriter(module),
          plugins: [filesize({ reporter })],
        })
      )

      const bundle = await rollup(rollupConfig)
      await writeBundles(bundle, opts)
    }
  )
  await Promise.all(builds)
}

export async function buildComponentEntry() {
  const entry = path.resolve(compRoot, 'index.ts')
  const config = {
    input: entry,
    plugins,
    external: () => true,
  }
  const opts = Object.values(buildConfig).map(
    (config): OutputOptions => ({
      format: config.format,
      file: path.resolve(config.output.path, 'components/index.js'),
      plugins: [filesize({ reporter })],
    })
  )

  const bundle = await rollup(config)
  await writeBundles(bundle, opts)
}

function copyTypes() {
  const src = `${buildOutput}/types/components/`
  const copy = (module: Module) =>
    withTaskName(`copyTypes:${module}`, () =>
      run(`rsync -a ${src} ${buildConfig[module].output.path}/components/`)
    )

  return parallel(copy('esm'), copy('cjs'))
}

export const buildComponent = series(
  parallel(genComponentTypes, buildEachComponent, buildComponentEntry),
  copyTypes()
)

export { genComponentTypes }
