import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import css from 'rollup-plugin-css-only'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import path from 'path'

export default [
  // ESM
  {
    input: path.resolve(__dirname, '../packages/element-plus/index.ts'),
    output: {
      format: 'esm',
      file: 'lib/library.esm.js',
    },
    plugins: [
      terser(),
      nodeResolve(),
      commonjs(),
      typescript({
        abortOnError: false,
      }),
      css(),
      vue({ css: false }),
    ],
  },
]
