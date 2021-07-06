/* eslint-disable */
const pkg = require('../package.json')
const path = require('path')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const rollup = require('rollup')
const typescript = require('rollup-plugin-typescript2')

const root = path.resolve(__dirname, '..');
const file = process.argv[2];
const defaultOpts = {
  input: path.resolve(root, file),
  plugins: [
    nodeResolve(),
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
  external() {
    return true
  },
}

const run = async (name) => {
  const esm = {
    format: 'es',
    file: `es/${name}`,
  };
  const cjs = {
    format: 'cjs',
    file: `lib/${name}`,
    exports: 'named',
  }

  const bundle = await rollup.rollup(defaultOpts);
  await Promise.all([bundle.write(esm), bundle.write(cjs)]);
  console.log(name, 'build finished');
}

let normalizedName = file.slice(11); // remove ./packages

run(`${normalizedName.split('.').shift()}.js`);
