import path from 'path'
import { series } from 'gulp'
import { rollup } from 'rollup'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import glob from 'fast-glob'
import { epRoot, excludeFiles, pkgRoot } from '@element-plus/build-utils'
import { generateExternal, withTaskName, writeBundles } from '../utils'
import { ElementPlusAlias } from '../plugins/element-plus-alias'
import { buildConfigEntries, target } from '../build-info'
import type { TaskFunction } from 'gulp'

import type { OutputOptions, Plugin } from 'rollup'

const plugins: Plugin[] = [
  ElementPlusAlias(),
  VueMacros({
    setupComponent: false,
    setupSFC: false,
    plugins: {
      vue: vue({
        isProduction: true,
        template: {
          compilerOptions: {
            hoistStatic: false,
            cacheHandlers: false,
          },
        },
      }),
      vueJsx: vueJsx(),
    },
  }),
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
]

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

export const buildModules: TaskFunction = series(
  withTaskName('buildModulesComponents', buildModulesComponents),
  withTaskName('buildModulesStyles', buildModulesStyles)
)
