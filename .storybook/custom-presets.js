"use strict";

require("core-js/modules/es.array.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.webpack = webpack;
exports.babelDefault = babelDefault;

var _plugin = _interopRequireDefault(require("vue-loader/dist/plugin"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key)
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function webpack(config) {
  return _objectSpread({}, config, {
    plugins: [...config.plugins, new _plugin.default()],
    module: _objectSpread({}, config.module, {
      rules: [
        ...config.module.rules,
        {
          test: /\.vue$/,
          loader: require.resolve("vue-loader"),
          options: {},
        },
        {
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: require.resolve("ts-loader"),
              options: {
                transpileOnly: true,
              },
            },
          ],
        },
      ],
    }),
    resolve: _objectSpread({}, config.resolve, {
      extensions: [...config.resolve.extensions, ".vue", ".ts"],
      alias: _objectSpread({}, config.resolve.alias, {
        vue$: require.resolve("vue/dist/vue.esm-bundler.js"),
      }),
    }),
  });
}

function babelDefault(config) {
  return _objectSpread({}, config, {
    presets: [...config.presets, require.resolve("babel-preset-vue")],
  });
}
