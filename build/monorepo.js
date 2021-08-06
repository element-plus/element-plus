/* eslint-disable */
const fs = require('fs')
const path = require('path')
const pkgs = require('./getPkgs')
const rollup = require('rollup')
const vue = require('rollup-plugin-vue')
const alias = require('@rollup/plugin-alias')
const css = require('rollup-plugin-css-only')
const filesize = require('rollup-plugin-filesize')
const { nodeResolve } = require('@rollup/plugin-node-resolve')

const chalk = require('chalk')
const esbuild = require('rollup-plugin-esbuild')
const reporter = require('./size-reporter')

const projRoot = path.resolve(__dirname, '../')
const compRoot = path.resolve(projRoot, './packages/components')

async function getComponents() {
  const raw = await fs.promises.readdir(compRoot)
  // filter out package.json since under packages/components we only got this file
  //
  return raw
    .filter(f => f !== 'package.json')
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
const externals = ['@popperjs/core',
  'async-validator',
  'dayjs',
  'lodash',
  'mitt',
]
  // const EP_EXTERNALS = ['utils', 'hooks', 'directives', 'locale']
  //   .map(item => `${EP_PREFIX}/${item}`)

  ; (async () => {
    const componentPaths = await getComponents()
    // console.log(componentPaths)
    const builds = componentPaths.map(async ({
      path: p,
      name: componentName,
    }) => {
      // console.log(resolved)
      const entry = path.resolve(p, './index.ts')
      const outputDir = path.resolve(compRoot, './dist')
      // const deps = require(
      //   path.resolve(location, './package.json')
      // ).dependencies
      const external = (id) => {
        return id.startsWith(VUE_REGEX)
          || id.startsWith(VUE_MONO)
          || id.startsWith(EP_PREFIX)
        || externals.some(i => id.startsWith(i))
      }
      const esm = {
        format: 'es',
        file: `${outputDir}/${componentName}/index.js`,
        banner: `import '@element-plus/theme-chalk/el-${componentName}.css'`,
        plugins: [
          filesize({
            // showBrotliSize: true,
            reporter,
          })
        ]
      };
      const cjs = {
        format: 'cjs',
        file: `${outputDir}/${componentName}/index.js`,
        // paths: getPaths,
        exports: 'named',
      };
      const rollupConfig = {
        input: entry,
        plugins,
        external,
      }
      const bundle = await rollup.rollup(rollupConfig)
      // console.log(bundle)
      await Promise.all([
        bundle.write(esm),
        // bundle.write(cjs),
      ])

      // console.log(esmResult)
    })
    await Promise.all(
      builds
    )
  })().then(() => {
    console.log('finished')
    process.exit(0)
  }).catch((e) => {
    console.error(e.message)
    process.exit(1)
  })

