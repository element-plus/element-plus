/* eslint-disable */
const path = require('path')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const rollup = require('rollup')
const typescript = require('rollup-plugin-typescript2')
const klawSync = require('klaw-sync')
const chalk = require('chalk')
const filesize = require('rollup-plugin-filesize')
const genDts = require('./gen-dts')

const { pkgRoot, buildOutput } = require('./paths')
const reporter = require('./size-reporter')


const defaultOpts = {
  plugins: [
    nodeResolve(),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: false,
        },
        exclude: ['node_modules', '__tests__'],
      },
      abortOnError: false,
    }),
  ],
}

;(async () => {
  await buildPkg('utils')
  await buildPkg('directives')
  await buildPkg('hooks')
})()

async function buildPkg(name) {
  const pkgPath = path.resolve(pkgRoot, name)

  const files = klawSync(pkgPath, {
    nodir: true,
  })
    .map(item => item.path)
    .filter(p => !/__test__|__tests__|tests|test|package.json/.test(p))

  const external = _ => true
  console.log(chalk.cyan('Start building package: ' + chalk.bold(name)))
  await Promise.all(
    files.map(async f => {
      const basename = f.split(`packages/${name}/`).pop()
      const basenameNoExt = basename.split('.').shift()
      const esm = {
        format: 'es',
        file: path.resolve(buildOutput, `${name}/${basenameNoExt}.js`),
        plugins: [
          filesize({
            reporter,
          }),
        ],
      }

      console.log(chalk.yellow('Start building file: ' + chalk.bold(basename)))
      const bundle = await rollup.rollup({
        ...defaultOpts,
        input: f,
        external,
      })

      await bundle.write(esm)

      console.log(
        chalk.green('File: ' + chalk.bold(basename) + ' built successfully'),
      )
    }),
  )

  console.log(chalk.yellow('Start generating .d.ts files'))

  await genDts(pkgPath)

  console.log(chalk.green('Generate .d.ts files finished'))

  console.log(
    chalk.cyan('package: ' + chalk.bold(name) + ' built successfully'),
  )
}
