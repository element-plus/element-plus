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

import { compRoot, buildOutput } from './utils/paths'
import { generateExternal, writeBundles } from './utils/rollup'
import { EP_PREFIX, excludes } from './constants'

import { genTypes } from './gen-dts'
import { run } from './utils/process'

const outputDir = path.resolve(buildOutput, 'element-plus')
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

export const buildComponents = series(
  parallel(
    genTypes.bind(undefined, compRoot, undefined),
    buildEachComponent,
    buildEntry
  ),
  copyTypes()
)

function pathsRewriter(id: string) {
  if (id.startsWith(`${EP_PREFIX}/components`))
    return id.replace(`${EP_PREFIX}/components`, '..')
  if (id.startsWith(EP_PREFIX) && excludes.every((e) => !id.endsWith(e)))
    return id.replace(EP_PREFIX, '../..')
  return ''
}

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

async function buildEachComponent() {
  const componentPaths = await getComponents()
  const external = await generateExternal({ full: false })

  const builds = componentPaths.map(
    async ({ path: p, name: componentName }) => {
      const entry = path.resolve(p, 'index.ts')
      if (!fs.existsSync(entry)) return

      const rollupConfig = {
        input: entry,
        plugins,
        external,
      }
      const bundle = await rollup(rollupConfig)

      await writeBundles(bundle, [
        {
          format: 'es',
          file: `${outputDir}/es/components/${componentName}/index.js`,
          paths: pathsRewriter,
        },
        {
          format: 'cjs',
          file: `${outputDir}/lib/components/${componentName}/index.js`,
          exports: 'named',
          paths: pathsRewriter,
        },
      ])
    }
  )
  await Promise.all(builds)
}

async function buildEntry() {
  const entry = path.resolve(compRoot, 'index.ts')
  const config = {
    input: entry,
    plugins,
    external: () => true,
  }

  const bundle = await rollup(config)
  await writeBundles(bundle, [
    {
      format: 'es',
      file: `${outputDir}/es/components/index.js`,
    },
    {
      format: 'cjs',
      file: `${outputDir}/lib/components/index.js`,
    },
  ])
}

function copyTypes() {
  const src = `${buildOutput}/types/components/`

  // rsync -a dist/types/components/ dist/element-plus/es/components/
  const copyTypesToESM = () =>
    run(`rsync -a ${src} ${outputDir}/es/components/`)

  // rsync -a dist/types/components/ dist/element-plus/lib/components/
  const copyTypesToCJS = () =>
    run(`rsync -a ${src} ${outputDir}/es/components/`)

  return parallel([copyTypesToESM, copyTypesToCJS])
}
