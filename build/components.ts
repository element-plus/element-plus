/* eslint-disable */
import fs from 'fs'
import path from 'path'
import rollup from 'rollup'
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import filesize from 'rollup-plugin-filesize'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import { sync as globSync } from 'fast-glob'

import { compRoot, buildOutput } from './paths'
import { errorAndExit, getExternals, yellow, green } from './utils'
import genDefs from './gen-dts'
import reporter from './size-reporter'
import { EP_PREFIX } from './constants'

const outputDir = path.resolve(buildOutput, './element-plus')

const plugins = [
  css(),
  vue({
    target: 'browser',
    // css: false,
  }),
  nodeResolve(),
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
  const files = globSync('*', { cwd: compRoot, onlyDirectories: true })
  return files.map((file) => ({
    path: path.resolve(compRoot, file),
    name: file,
  }))
}

function pathsRewriter(id: string) {
  const excludes = ['icons']
  if (id.startsWith(`${EP_PREFIX}/components`))
    return id.replace(`${EP_PREFIX}/components`, '..')
  if (id.startsWith(EP_PREFIX) && excludes.every((e) => !id.endsWith(e)))
    return id.replace(EP_PREFIX, '../..')
  return id
}

async function buildComponents() {
  const componentPaths = await getComponents()

  const builds = componentPaths.map(
    async ({ path: p, name: componentName }) => {
      const entry = path.resolve(p, './index.ts')
      if (!fs.existsSync(entry)) return

      const rollupConfig = {
        input: entry,
        plugins,
        external: getExternals({ full: false }),
      }
      const bundle = await rollup.rollup(rollupConfig)

      // ESM
      await bundle.write({
        format: 'es',
        file: `${outputDir}/es/components/${componentName}/index.js`,
        plugins: [
          filesize({
            reporter,
          }),
        ],
        paths: pathsRewriter,
      })

      // CJS
      await bundle.write({
        format: 'cjs',
        file: `${outputDir}/lib/components/${componentName}/index.js`,
        exports: 'named',
        plugins: [
          filesize({
            reporter,
          }),
        ],
        paths: pathsRewriter,
      })
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
    await bundle.write({
      format: 'es',
      file: `${outputDir}/es/components/index.js`,
      plugins: [
        filesize({
          reporter,
        }),
      ],
    })

    await bundle.write({
      format: 'cjs',
      file: `${outputDir}/lib/components/index.js`,
      plugins: [
        filesize({
          reporter,
        }),
      ],
    })
  } catch (e: any) {
    errorAndExit(e)
  }
}
