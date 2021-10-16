import { rollup } from 'rollup'
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import filesize from 'rollup-plugin-filesize'
import glob from 'fast-glob'
import { epRoot, pkgRoot } from './utils/paths'
import { RollupResolveEntryPlugin } from './plugins/rollup-plugin-entry'
import { generateExternal, writeBundles } from './utils/rollup'
import { excludeFiles } from './utils/pkg'
import { reporter } from './plugins/size-reporter'
import { buildConfig } from './info'
import type { BuildConfigEntries } from './info'
import type { OutputOptions } from 'rollup'

export const buildModules = async () => {
  const input = excludeFiles(
    await glob('**/*.{js,ts,vue}', {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true,
    })
  )
  const bundle = await rollup({
    input,
    plugins: [
      RollupResolveEntryPlugin(),
      css(),
      vue({ target: 'browser' }),
      nodeResolve(),
      commonjs(),
      esbuild(),
    ],
    external: await generateExternal({ full: false }),
    treeshake: false,
  })
  await writeBundles(
    bundle,
    (Object.entries(buildConfig) as BuildConfigEntries).map(
      ([module, config]): OutputOptions => {
        return {
          format: config.format,
          dir: config.output.path,
          exports: module === 'cjs' ? 'named' : undefined,
          preserveModules: true,
          preserveModulesRoot: epRoot,
          plugins: [filesize({ reporter })],
        }
      }
    )
  )
}
