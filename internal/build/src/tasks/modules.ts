import path from 'path'
import url from 'node:url'
import { series, parallel } from 'gulp'
import { rollup } from 'rollup'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import { glob } from 'tinyglobby'
import { epRoot, excludeFiles, pkgRoot } from '@element-plus/build-utils'
import { generateExternal, withTaskName, writeBundles } from '../utils'
import { ElementPlusAlias } from '../plugins/element-plus-alias'
import { buildConfigEntries, target } from '../build-info'
import { SupplyValidator } from '../plugins/supply-validator'

import type { TaskFunction } from 'gulp'
import type { OutputOptions, Plugin } from 'rollup'

const plugins: Plugin[] = [
  ElementPlusAlias(),
  vue() as Plugin,
  vueJsx() as Plugin,
  nodeResolve({
    extensions: ['.mjs', '.js', '.json', '.ts'],
  }),
  commonjs(),
  esbuild({
    sourceMap: true,
    target,
    loaders: {
      '.vue': 'ts',
    },
  }),
  SupplyValidator(),
]

async function build(packageName: string) {
  const packageManifestPath = url.fileURLToPath(
    import.meta.resolve(`${packageName}/package.json`)
  )
  const packageRoot = path.resolve(packageManifestPath, '..')
  const input = await glob('**/*.ts', {
    ignore: ['node_modules', '*.d.ts', '__tests__'],
    cwd: packageRoot,
    absolute: true,
  })
  // ;(await import('fs')).writeFileSync('./files.log', input.join('\n'), 'utf-8')
  const bundle = await rollup({
    input,
    plugins,
    external: await generateExternal({
      packageManifestPath,
    }),
    treeshake: { moduleSideEffects: false },
  })

  await writeBundles(
    bundle,
    buildConfigEntries.map(([module, config]): OutputOptions => {
      return {
        format: config.format,
        dir: `${packageRoot}/dist/${module === 'cjs' ? 'lib' : 'es'}`,
        exports: module === 'cjs' ? 'named' : undefined,
        preserveModules: true,
        // preserveModulesRoot: packageRoot,
        sourcemap: true,
        entryFileNames: `[name].${config.ext}`,
      }
    })
  )
}

async function buildModulesComponents() {
  const input = excludeFiles(
    await glob(['**/*.{js,ts,vue}', '!**/style/(index|css).{js,ts,vue}'], {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true,
    })
  )
  const bundle = await rollup({
    input,
    plugins,
    external: await generateExternal({ full: false }),
    treeshake: { moduleSideEffects: false },
  })

  await writeBundles(
    bundle,
    buildConfigEntries.map(([module, config]): OutputOptions => {
      return {
        format: config.format,
        dir: config.output.path,
        exports: module === 'cjs' ? 'named' : undefined,
        preserveModules: true,
        preserveModulesRoot: epRoot,
        sourcemap: true,
        entryFileNames: `[name].${config.ext}`,
      }
    })
  )
}

async function buildModulesStyles() {
  const input = excludeFiles(
    await glob('**/style/(index|css).{js,ts,vue}', {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true,
    })
  )
  const bundle = await rollup({
    input,
    plugins,
    treeshake: false,
  })

  await writeBundles(
    bundle,
    buildConfigEntries.map(([module, config]): OutputOptions => {
      return {
        format: config.format,
        dir: path.resolve(config.output.path, 'components'),
        exports: module === 'cjs' ? 'named' : undefined,
        preserveModules: true,
        preserveModulesRoot: epRoot,
        sourcemap: true,
        entryFileNames: `[name].${config.ext}`,
      }
    })
  )
}

export const buildModules: TaskFunction = parallel(
  withTaskName('buildModules:locale', () => build('@element-plus/locale')),
  withTaskName('buildModules:constants', () =>
    build('@element-plus/constants')
  ),
  withTaskName('buildModules:utils', () => build('@element-plus/utils')),
  withTaskName('buildModules:hooks', () => build('@element-plus/hooks')),
  withTaskName('buildModules:directives', () =>
    build('@element-plus/directives')
  ),
  withTaskName('buildModules:element-plus', () => build('element-plus'))
  // withTaskName('buildModulesStyles', buildModulesStyles)
)
