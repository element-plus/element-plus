import fs from 'fs'
import path from 'path'
import rollup from 'rollup'
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import filesize from 'rollup-plugin-filesize'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import { sync as globSync } from 'fast-glob'

import { compRoot, buildOutput } from './paths'
import { errorAndExit, getExternals, yellow, green } from './utils'
import genDefs from './gen-dts'
import reporter from './size-reporter'
import { EP_PREFIX, excludes } from './constants'

import type { RollupBuild, OutputOptions } from 'rollup'

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

;(async () => {
  // run type diagnoses first
  yellow('Start building types for individual components')
  await genDefs(compRoot)
  green('Typing generated successfully')

  yellow('Start building individual components')
  await buildComponents()
  green('Components built successfully')

  yellow('Start building entry file')
  await buildEntry()
  green('Entry built successfully')

  green('Individual component build finished')
})().catch((e: Error) => errorAndExit(e))

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

function pathsRewriter(id: string) {
  if (id.startsWith(`${EP_PREFIX}/components`))
    return id.replace(`${EP_PREFIX}/components`, '..')
  if (id.startsWith(EP_PREFIX) && excludes.every((e) => !id.endsWith(e)))
    return id.replace(EP_PREFIX, '../..')
  return id
}

function buildWriters(bundle: RollupBuild, options: OutputOptions[]) {
  return Promise.all(
    options.map((option) =>
      bundle.write({
        ...option,
        plugins: [
          filesize({
            reporter,
          }),
        ],
      })
    )
  )
}

async function buildComponents() {
  const componentPaths = await getComponents()
  const external = await getExternals({ full: false })

  const builds = componentPaths.map(
    async ({ path: p, name: componentName }) => {
      const entry = path.resolve(p, 'index.ts')
      if (!fs.existsSync(entry)) return

      const rollupConfig = {
        input: entry,
        plugins,
        external,
      }
      const bundle = await rollup.rollup(rollupConfig)

      await buildWriters(bundle, [
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
  try {
    await Promise.all(builds)
  } catch (e: any) {
    errorAndExit(e)
  }
}

async function buildEntry() {
  const entry = path.resolve(compRoot, 'index.ts')
  const config = {
    input: entry,
    plugins,
    external: () => true,
  }

  try {
    const bundle = await rollup.rollup(config)
    await buildWriters(bundle, [
      {
        format: 'es',
        file: `${outputDir}/es/components/index.js`,
      },
      {
        format: 'cjs',
        file: `${outputDir}/lib/components/index.js`,
      },
    ])
  } catch (e: any) {
    errorAndExit(e)
  }
}
