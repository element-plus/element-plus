var VueLoaderPlugin = require('vue-loader/dist/plugin');
const path = require('path')

function webpack(config) {
  return {
    ...config,
    plugins: [...config.plugins, new VueLoaderPlugin.default()],
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.vue$/,
          loader: require.resolve('vue-loader'),
          options: {},
        },
        {
          test: /\.(sass|scss)$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                implementation: require('sass'),
              },
            },
          ],
          include: path.resolve(__dirname, '../'),
        },
        {
          test: /\.stories\.ts$/,
          use: [
              {
                loader: require.resolve('./export-loader')
              },
              {
                loader: require.resolve('ts-loader'),
                options: {
                  transpileOnly: true,
                },
              },
          ]
        },
        {
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: require.resolve('ts-loader'),
              options: {
                transpileOnly: true,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      ...config.resolve,
      extensions: [...config.resolve.extensions, '.vue', '.ts'],
      alias: {
        ...config.resolve.alias,
        vue$: require.resolve('vue/dist/vue.esm-bundler.js'),
      },
    },
  };
}

exports.webpack = webpack;
