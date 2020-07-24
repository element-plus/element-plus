var VueLoaderPlugin = require('vue-loader/dist/plugin');

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
