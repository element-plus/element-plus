import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import css from 'rollup-plugin-css-only'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import path from 'path'

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
      commonjs(),
      typescript({
        abortOnError: false,
      }),
      css(),
      vue({
        target: 'browser',
        css: false,
        exposeFilename: false,
      }),
    ],
    external: ['vue'],
  },
]
