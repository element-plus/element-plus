/* eslint-disable */
import fs from 'fs'
import path from 'path'
import rollup from 'rollup'
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import filesize from 'rollup-plugin-filesize'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import chalk from 'chalk'

import { compRoot, buildOutput } from './paths'
import getDeps from './get-deps'
import genDefs from './gen-dts'
import reporter from './size-reporter'

const outputDir = path.resolve(buildOutput, './element-plus')
const pathToPkgJson = path.resolve(compRoot, './package.json')

async function getComponents() {
  const raw = await fs.promises.readdir(compRoot)
  // filter out package.json since under packages/components we only got this file
  //
  return raw
    .filter((f) => f !== 'package.json' && f !== 'index.ts')
    .map((f) => ({ path: path.resolve(compRoot, f), name: f }))
}

const plugins = [
  css(),
  vue({
    target: 'browser',
    // css: false,
  }),
  nodeResolve(),
  esbuild(),
]
const EP_PREFIX = '@element-plus'
const VUE_REGEX = 'vue'
const VUE_MONO = '@vue'
const externals = getDeps(pathToPkgJson)

const excludes = ['icons']

const pathsRewriter = (id) => {
  if (id.startsWith(`${EP_PREFIX}/components`))
    return id.replace(`${EP_PREFIX}/components`, '..')
  if (id.startsWith(EP_PREFIX) && excludes.every((e) => !id.endsWith(e)))
    return id.replace(EP_PREFIX, '../..')
  return id
}

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
})()
  .then(() => {
    console.log('Individual component build finished')
    process.exit(0)
  })
  .catch((e) => {
    console.error(e.message)
    process.exit(1)
  })

async function buildComponents() {
  const componentPaths = await getComponents()

  const builds = componentPaths.map(
    async ({ path: p, name: componentName }) => {
      const entry = path.resolve(p, './index.ts')
      if (!fs.existsSync(entry)) return

      const external = (id) => {
        return (
          id.startsWith(VUE_REGEX) ||
          id.startsWith(VUE_MONO) ||
          id.startsWith(EP_PREFIX) ||
          externals.some((i) => id.startsWith(i))
        )
      }
      const esm = {
        format: 'es',
        file: `${outputDir}/es/components/${componentName}/index.js`,
        plugins: [
          filesize({
            reporter,
          }),
        ],
        paths: pathsRewriter,
      }

      const cjs = {
        format: 'cjs',
        file: `${outputDir}/lib/components/${componentName}/index.js`,
        exports: 'named',
        plugins: [
          filesize({
            reporter,
          }),
        ],
        paths: pathsRewriter,
      }
      const rollupConfig = {
        input: entry,
        plugins,
        external,
      }
      const bundle = await rollup.rollup(rollupConfig)
      await bundle.write(esm as any)
      await bundle.write(cjs as any)
    }
  )
  try {
    await Promise.all(builds)
  } catch (e) {
    logAndShutdown(e)
  }
}

async function buildEntry() {
  const entry = path.resolve(compRoot, 'index.ts')
  const config = {
    input: entry,
    plugins,
    external: (_) => true,
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
  } catch (e) {
    logAndShutdown(e)
  }
}

function yellow(str) {
  console.log(chalk.cyan(str))
}

function green(str) {
  console.log(chalk.green(str))
}

function red(str) {
  console.error(chalk.red(str))
}

function logAndShutdown(e) {
  red(e.message)
  process.exit(1)
}
