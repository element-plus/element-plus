/* eslint-disable */
const pkg = require('../package.json')
const path = require('path')
const { getPackages } =  require('@lerna/project')
const css = require('rollup-plugin-css-only')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const vue = require('./plugin.js')
const rollup = require('rollup')
const typescript = require('rollup-plugin-typescript2')

const deps = Object.keys(pkg.dependencies)

const runBuild = async () => {
  let index = 0
  const pkgs = await getPackages()
  const inputs = pkgs
    .map(pkg => pkg.name)
    .filter(name =>
      name.includes('@element-plus') &&
      !name.includes('transition') &&
      !name.includes('utils'),
    ).slice(process.argv[2], process.argv[3])

  build(inputs[index])

  async function build(name) {
    if (!name) return
    const inputOptions = {
      input: path.resolve(__dirname, `../packages/${name.split('@element-plus/')[1]}/index.ts`),
      plugins: [
        nodeResolve(),
        css(),
        vue({
          target: 'browser',
          css: false,
        }),
        typescript({
          tsconfigOverride: {
            compilerOptions: {
              declaration: false,
            },
            'exclude': [
              'node_modules',
              '__tests__',
            ],
          },
          abortOnError: false,
        }),
      ],
      external(id) {
        return /^vue/.test(id)
          || /^@element-plus/.test(id)
          || deps.some(k => new RegExp('^' + k).test(id))
      },
    }
    const outOptions = {
      format: 'es',
      file: `lib/${name.split('@element-plus/')[1]}/index.js`,
      paths(id) {
        if (/^@element-plus/.test(id)) {
          return id.replace('@element-plus', '..')
        }
      },
    }

    const bundle = await rollup.rollup(inputOptions)
    console.log(name, 'done')
    await bundle.write(outOptions)
    index++
    if (index < inputs.length) {
      await build(inputs[index])
    }
  }
}

runBuild()
