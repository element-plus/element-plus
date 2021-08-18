/* eslint-disable */
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const rollup = require('rollup')
const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const commonjs = require('@rollup/plugin-commonjs')
const vue = require('rollup-plugin-vue')
const esbuild = require('rollup-plugin-esbuild')
const RollupResolveEntryPlugin = require('./rollup.plugin.entry')
const {
  epRoot,
  buildOutput,
  compRoot,
  hookRoot,
  directiveRoot,
  utilRoot,
  localeRoot,
} = require('./paths')

// const deps = Object.keys(pkg.dependencies)

;(async () => {

  const config = {
    input: path.resolve(epRoot, './index.ts'),
    plugins: [
      nodeResolve(),
      vue({
        target: 'browser',
        css: false,
        exposeFilename: false,
      }),
      commonjs(),
      esbuild({
        minify: false,
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

  console.log(chalk.yellow('Generating index.js'))

  await bundle.write(umd)

  console.log(chalk.green('index.js generated'))

  console.log(chalk.yellow('Generating index.full.js'))

  await bundle.write(umdMinified)

  console.log(chalk.green('index.full.js generated'))

  console.log(chalk.yellow('Generating entry files without dependencies'))

  // Entry bundle generation

  let entryFiles = await fs.promises.readdir(epRoot, { withFileTypes: true })

  entryFiles = entryFiles.filter(f => f.isFile()).filter(f => {
    return f.name !== 'package.json' && f.name !== 'README.md'
  }).map(f => path.resolve(epRoot, f.name))

  const entryBundle = await rollup.rollup({
    ...config,
    input: entryFiles,
    external: _ => true,
  })

  console.log(chalk.yellow('Generating cjs entry'))

  await entryBundle.write({
    format: 'cjs',
    dir: path.resolve(buildOutput, 'element-plus/lib'),
    exports: 'named'
  })

  console.log(chalk.green('cjs entry generated'))

  console.log(chalk.yellow('Generating esm entry'))

  await entryBundle.write({
    format: 'esm',
    dir: path.resolve(buildOutput, 'element-plus/es'),
  })

  console.log(chalk.green('esm entry generated'))

  console.log(chalk.bold(chalk.green('Full bundle generated')))
})()
