/* eslint-disable */
const fs = require('fs')
const path = require('path')
const rollup = require('rollup')
const vue = require('rollup-plugin-vue')
const css = require('rollup-plugin-css-only')
const filesize = require('rollup-plugin-filesize')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const esbuild = require('rollup-plugin-esbuild')
const chalk = require('chalk')

const { projRoot, compRoot } = require('./paths')
const getDeps = require('./get-deps')
const genDefs = require('./gen-dts')
const reporter = require('./size-reporter')

const outputDir = path.resolve(projRoot, './dist/components')
const pathToPkgJson = path.resolve(compRoot, './package.json')

async function getComponents() {
  const raw = await fs.promises.readdir(compRoot)
  // filter out package.json since under packages/components we only got this file
  //
  return raw
    .filter(f => f !== 'package.json' && f !== 'index.ts')
    .map(f => ({ path: path.resolve(compRoot, f), name: f }))
}

const plugins = [
  css(),
  vue({
    target: 'browser',
    css: false,
  }),
  nodeResolve(),
  esbuild(),
]

const VUE_REGEX = 'vue'
const VUE_MONO = '@vue'
const EP_PREFIX = '@element-plus'
const externals = getDeps(pathToPkgJson)

  ; (async () => {
    // run type diagnoses first
    yellow('Start building types for individual components')
    await genDefs(compRoot)
    green('Typing generated successfully')

    yellow('Start building individual components')
    await buildComponents()
    green('Components built successfully')

    yellow('Start building entry file')
    await buildEntry()
    green('Entry built successfully')
    yellow('Start copying package.json')
    await copyPkgJson()
    green('Package.json copied successfully')
  })().then(() => {
    console.log('finished')
    process.exit(0)
  }).catch((e) => {
    console.error(e.message)
    process.exit(1)
  })

async function buildComponents() {
  const componentPaths = await getComponents()

  const builds = componentPaths.map(async ({
    path: p,
    name: componentName,
  }) => {
    const entry = path.resolve(p, './index.ts')
    if (!fs.existsSync(entry)) return

    const external = (id) => {
      return id.startsWith(VUE_REGEX)
        || id.startsWith(VUE_MONO)
        || id.startsWith(EP_PREFIX)
        || externals.some(i => id.startsWith(i))
    }
    const esm = {
      format: 'es',
      file: `${outputDir}/${componentName}/index.js`,
      plugins: [
        filesize({
          reporter,
        })
      ]
    }
    const rollupConfig = {
      input: entry,
      plugins,
      external,
    }
    const bundle = await rollup.rollup(rollupConfig)
    await bundle.write(esm)

  })
  try {
    await Promise.all(
      builds
    )
  } catch (e) {
    logAndShutdown(e)
  }
}

async function buildEntry() {
  const entry = path.resolve(compRoot, 'index.ts')
  const config = {
    input: entry,
    plugins,
    external: _ => true,
  }

  try {
    const bundle = await rollup.rollup(config)
    await bundle.write({
      format: 'es',
      file: `${outputDir}/index.js`,
      // banner: `import '@element-plus/theme-chalk/el-${componentName}.css'`,
      plugins: [
        filesize({
          reporter,
        })
      ]
    })
  } catch (e) {
    logAndShutdown(e)
  }
}

async function copyPkgJson() {
  try {
    await fs.promises.copyFile(pathToPkgJson, path.resolve(outputDir, './package.json'))
    return true
  } catch (e) {
    logAndShutdown(e)
  }
}

function yellow(str) {
  console.log(chalk.cyan(str))
}

function green(str) {
  console.log(chalk.green(str))
}

function red(str) {
  console.error(chalk.red(str))
}

function logAndShutdown(e) {
  red(e.message)
  process.exit(1)
}
