import { nodeResolve } from '@rollup/plugin-node-resolve'
import rollup from 'rollup'
import chalk from 'chalk'
import path from 'path'
import fs from 'fs'
import commonjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue'
import esbuild from 'rollup-plugin-esbuild'
import replace from 'rollup-plugin-replace'
import genDts from './gen-entry-dts'
import RollupResolveEntryPlugin from './rollup.plugin.entry'
import { epRoot, buildOutput } from './paths'
import { EP_PREFIX, excludes } from './constants'
;(async () => {
  const config = {
    input: path.resolve(epRoot, './index.ts'),
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
    external(id) {
      return /^vue/.test(id)
    },
  }

  console.log(chalk.cyan('Start generating full bundle'))

  const umd = {
    format: 'umd',
    file: path.resolve(buildOutput, 'element-plus/dist/index.js'),
    exports: 'named',
    name: 'ElementPlus',
    globals: {
      vue: 'Vue',
    },
  }

  const umdMinified = {
    ...umd,
    file: path.resolve(buildOutput, 'element-plus/dist/index.full.js'),
  }

  console.log(chalk.bold(chalk.yellow('Building bundle')))

  // Full bundle generation
  const bundle = await rollup.rollup({
    ...config,
    plugins: [...config.plugins, RollupResolveEntryPlugin()],
  })

  console.log(chalk.yellow('Generating index.full.js'))

  await bundle.write(umdMinified as any)

  console.log(chalk.green('index.full.js generated'))

  console.log(chalk.yellow('Generating entry files without dependencies'))

  // Entry bundle generation

  const entryFiles = await fs.promises.readdir(epRoot, { withFileTypes: true })

  const entryPoints = entryFiles
    .filter((f) => f.isFile())
    .filter((f) => {
      return f.name !== 'package.json' && f.name !== 'README.md'
    })
    .map((f) => path.resolve(epRoot, f.name))

  const entryBundle = await rollup.rollup({
    ...config,
    input: entryPoints,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    external: (_) => true,
  })

  const rewriter = (id) => {
    if (id.startsWith(`${EP_PREFIX}/components`))
      return id.replace(`${EP_PREFIX}/components`, './components')
    if (id.startsWith(EP_PREFIX) && excludes.every((e) => !id.endsWith(e)))
      return id.replace(EP_PREFIX, '.')
  }

  console.log(chalk.yellow('Generating cjs entry'))

  await entryBundle.write({
    format: 'cjs',
    dir: path.resolve(buildOutput, 'element-plus/lib'),
    exports: 'named',
    paths: rewriter,
  })

  console.log(chalk.green('cjs entry generated'))

  console.log(chalk.yellow('Generating esm entry'))

  await entryBundle.write({
    format: 'esm',
    dir: path.resolve(buildOutput, 'element-plus/es'),
    paths: rewriter,
  })

  console.log(chalk.green('esm entry generated'))

  console.log(chalk.bold(chalk.green('Full bundle generated')))

  console.log(chalk.yellow('Generate entry file definitions'))

  await genDts()

  console.log(chalk.green('Entry file definitions generated'))
})()
