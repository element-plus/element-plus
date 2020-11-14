/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, '../packages/element-plus/index.ts'),
  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/',
    filename: 'index.js',
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: 'ElementPlus',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  stats: 'verbose',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
}
