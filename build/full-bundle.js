/* eslint-disable */
// import vue from 'rollup-plugin-vue'
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const rollup = require('rollup')
const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const alias = require('@rollup/plugin-alias')
// const commonjs = require('@rollup/plugin-commonjs')
const { terser } = require('rollup-plugin-terser')
// const typescript = require('rollup-plugin-typescript2')
const vue = require('rollup-plugin-vue')
const esbuild = require('rollup-plugin-esbuild')
const { epRoot, buildOutput, compRoot, hookRoot, directiveRoot, utilRoot, localeRoot } = require('./paths')

const pkg = require(path.resolve(epRoot, './package.json'))

// const deps = Object.keys(pkg.dependencies)

;(async () => {
  const raw = await fs.promises.readdir(compRoot, {
    withFileTypes: true,
  })
  // filter out package.json since under packages/components we only got this file
  //
  // const dedupe = raw
  //   .filter(f => f.isDirectory())
  //   .map(f => `@element-plus/components/${f.name}`)
  //   .concat([
  //     '@element-plus/hooks',
  //     '@element-plus/directives',
  //     '@element-plus/utils',
  //   ])
  const dedupe = [
    '@element-plus/components',
    '@element-plus/locale',
    '@element-plus/hooks',
    '@element-plus/directives',
    '@element-plus/utils',
  ]
  // console.log(dedupe)
  const config = {
    input: path.resolve(epRoot, './index.ts'),
    plugins: [
      alias({
        entries: [
          {
            find: '@element-plus/components',
            replacement: compRoot,
          },
          {
            find: '@element-plus/directives',
            replacement: directiveRoot
          },
          {
            find: '@element-plus/hooks',
            replacement: hookRoot
          },
          {
            find: '@element-plus/utils',
            replacement: utilRoot
          },
          {
            find: '@element-plus/locale',
            replacement: localeRoot,
          }
        ],
      }),
      nodeResolve({
        dedupe,
        browser: true,
      }),
      // commonjs(),
      vue({
        target: 'browser',
        css: false,
        exposeFilename: false,
      }),
      esbuild(),
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
    plugins: [terser()],
  }

  console.log(chalk.yellow('Building bundle'))
  const bundle = await rollup.rollup(config)

  console.log(chalk.yellow('Generate unminified index.full.js'))

  await bundle.write(umd)

  console.log(chalk.green('Unminified index.full.js generated'))

  console.log(chalk.yellow('Generate unminified index.full.js'))

  await bundle.write(umdMinified)

  console.log(chalk.green('Unminified index.full.min.js generated'))

  // console.log(chalk.green(''))
})()
