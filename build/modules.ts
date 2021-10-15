import path from 'path'
import { rollup } from 'rollup'
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import glob from 'fast-glob'
import { epOutput, epRoot, pkgRoot } from './utils/paths'
import { RollupResolveEntryPlugin } from './rollup-plugin-entry'
import { generateExternal, writeBundles } from './utils/rollup'

export const buildModules = async () => {
  const excludes = ['node_modules', 'test', 'mocks', 'gulpfile']
  const input = (
    await glob('**/*.{js,ts,vue}', {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true,
    })
  ).filter((path) => !excludes.some((exclude) => path.includes(exclude)))
  const bundle = await rollup({
    input,
    plugins: [
      css(),
      vue({ target: 'browser' }),
      nodeResolve(),
      commonjs(),
      esbuild(),
      RollupResolveEntryPlugin(),
    ],
    external: await generateExternal({ full: false }),
  })
  writeBundles(bundle, [
    {
      format: 'esm',
      dir: path.join(epOutput, 'es'),
      preserveModules: true,
      preserveModulesRoot: epRoot,
    },
    {
      format: 'cjs',
      dir: path.join(epOutput, 'lib'),
      preserveModules: true,
      preserveModulesRoot: epRoot,
      exports: 'named',
    },
  ])
}
