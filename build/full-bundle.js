/* eslint-disable */
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const rollup = require('rollup')
const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const commonjs = require('@rollup/plugin-commonjs')
// const { terser } = require('rollup-plugin-terser')
const vue = require('rollup-plugin-vue')
const esbuild = require('rollup-plugin-esbuild')
const { epRoot, buildOutput, compRoot, hookRoot, directiveRoot, utilRoot, localeRoot } = require('./paths')

const pkg = require(path.resolve(epRoot, './package.json'))

// const deps = Object.keys(pkg.dependencies)

;(async () => {
  const raw = await fs.promises.readdir(compRoot, {
    withFileTypes: true,
  })
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
      {
        transform(code, id) {
          if (id.includes('packages')) {
            return {
              code: code
                .replace(
                  /@element-plus\//g,
                  `${
                    path
                      .relative(
                        path.dirname(id),
                        path.resolve(process.cwd(), './packages'),
                      )
                  }/`,
                ),
              map: null,
            }
          }
          return { code, map: null }
        },
      },
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
    // plugins: [terser()],
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
