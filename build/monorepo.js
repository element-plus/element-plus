/* eslint-disable */
const path = require('path')
const pkgs = require('./getPkgs')
const rollup = require('rollup')
const vue = require('rollup-plugin-vue')
const css = require('rollup-plugin-css-only')
const filesize = require('rollup-plugin-filesize')
const { nodeResolve } = require('@rollup/plugin-node-resolve')

const chalk = require('chalk')
const esbuild = require('rollup-plugin-esbuild')
const reporter = require('./size-reporter')

const pkgRoot = path.resolve(__dirname, '../packages')
const projRoot = path.resolve(__dirname, '../')

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
const EP_REGEX = '@element-plus'

  ; (async () => {

    const builds = pkgs.slice(0, 1).map(async ({ name, location, resolved }) => {
      // console.log(resolved)
      const entry = path.resolve(location, './index.ts')
      const outputDir = path.resolve(location, './dist')
      const deps = require(
        path.resolve(location, './package.json')
      ).dependencies
      const external = (id) => {
        return id.startsWith(VUE_REGEX)
          || id.startsWith(VUE_MONO)
          || id.startsWith(EP_REGEX)
          || Object.keys(deps).some(k => id.startsWith(k))
      }
      const esm = {
        format: 'es',
        file: `${outputDir}/es/index.js`,
        plugins: [
          filesize({
            // showBrotliSize: true,
            reporter,
          })
        ]
      };
      const cjs = {
        format: 'cjs',
        file: `${outputDir}/lib/index.js`,
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
        bundle.write(cjs),
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

