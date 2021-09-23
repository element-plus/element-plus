import fs from 'fs'
import path from 'path'
import { rollup } from 'rollup'
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import { sync as globSync } from 'fast-glob'

import { compRoot, buildOutput } from './utils/paths'
import { generateExternal, writeBundles } from './utils/rollup'
import { yellow, green, errorAndExit } from './utils/log'
import { EP_PREFIX, excludes } from './constants'

import { genTypes } from './gen-dts'

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

export const buildComponents = async () => {
  try {
    await Promise.all([genTypes(compRoot), buildEachComponent(), buildEntry()])
    green('Individual component build finished')
  } catch (err: any) {
    errorAndExit(err)
  }
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

function pathsRewriter(id: string) {
  if (id.startsWith(`${EP_PREFIX}/components`))
    return id.replace(`${EP_PREFIX}/components`, '..')
  if (id.startsWith(EP_PREFIX) && excludes.every((e) => !id.endsWith(e)))
    return id.replace(EP_PREFIX, '../..')
  return ''
}

async function buildEachComponent() {
  yellow('Start building individual components')

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

  green('Components built successfully')
}

async function buildEntry() {
  yellow('Start building entry file')

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

  green('Entry built successfully')
}
