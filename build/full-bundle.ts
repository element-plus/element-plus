import path from 'path'
import fs from 'fs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import rollup from 'rollup'
import { bold } from 'chalk'
import commonjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue'
import esbuild from 'rollup-plugin-esbuild'
import replace from 'rollup-plugin-replace'
import genDts from './gen-entry-dts'
import { RollupResolveEntryPlugin } from './rollup.plugin.entry'
import { epRoot, buildOutput } from './paths'
import { EP_PREFIX, excludes } from './constants'
import { getExternals, cyan, yellow, green } from './utils'
;(async () => {
  const config = {
    input: path.resolve(epRoot, 'index.ts'),
    plugins: [
      nodeResolve(),
      vue({
        target: 'browser',
        // css: false,
        exposeFilename: false,
      }),
      commonjs(),
      esbuild({
        minify: false,
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
    ],
    external: await getExternals({ full: true }),
  }

  cyan('Start generating full bundle')

  yellow(bold('Building bundle'))

  // Full bundle generation
  const bundle = await rollup.rollup({
    ...config,
    plugins: [...config.plugins, RollupResolveEntryPlugin()],
  })

  yellow('Generating index.full.js')

  await bundle.write({
    format: 'umd',
    file: path.resolve(buildOutput, 'element-plus/dist/index.full.js'),
    exports: 'named',
    name: 'ElementPlus',
    globals: {
      vue: 'Vue',
    },
  })

  green('index.full.js generated')

  yellow('Generating entry files without dependencies')

  // Entry bundle generation

  const entryFiles = await fs.promises.readdir(epRoot, { withFileTypes: true })

  const entryPoints = entryFiles
    .filter((f) => f.isFile())
    .filter((f) => !['package.json', 'README.md'].includes(f.name))
    .map((f) => path.resolve(epRoot, f.name))

  const entryBundle = await rollup.rollup({
    ...config,
    input: entryPoints,
    external: () => true,
  })

  const rewriter = (id: string) => {
    if (id.startsWith(`${EP_PREFIX}/components`))
      return id.replace(`${EP_PREFIX}/components`, './components')
    else if (id.startsWith(EP_PREFIX) && excludes.every((e) => !id.endsWith(e)))
      return id.replace(EP_PREFIX, '.')
    else return ''
  }

  yellow('Generating cjs entry')

  await entryBundle.write({
    format: 'cjs',
    dir: path.resolve(buildOutput, 'element-plus/lib'),
    exports: 'named',
    paths: rewriter,
  })

  green('cjs entry generated')

  yellow('Generating esm entry')

  await entryBundle.write({
    format: 'esm',
    dir: path.resolve(buildOutput, 'element-plus/es'),
    paths: rewriter,
  })

  green('esm entry generated')

  green(bold('Full bundle generated'))

  yellow('Generate entry file definitions')

  await genDts()

  green('Entry file definitions generated')
})()
