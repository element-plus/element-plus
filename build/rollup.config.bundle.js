// import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import path from 'path'
import css from 'rollup-plugin-css-only'
// import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import pkg from '../package.json'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const vue = require('./plugin.js')

export default [
  {
    input: path.resolve(__dirname, '../packages/element-plus/index.ts'),
    output: {
      format: 'es',
      file: 'lib/index.esm.js',
    },
    plugins: [
      terser(),
      nodeResolve(),
      // commonjs(),
      css(),
      vue({
        target: 'browser',
        css: false,
        exposeFilename: false,
      }),
      typescript({
        tsconfigOverride: {
          'include': [
            'packages/**/*',
            'typings/vue-shim.d.ts',
          ],
          'exclude': [
            'node_modules',
            'packages/**/__tests__/*',
          ],
        },
        abortOnError: false,
      }),
    ],
    external(id) {
      return /^vue/.test(id)
        || Object.keys(pkg.dependencies).some(k => new RegExp('^' + k).test(id))
    },
  },
]
