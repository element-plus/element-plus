const path = require("path");

module.exports = {
  stories: ["../packages/**/doc/*.stories.[tj]s"],
  presets: [path.resolve(__dirname, "./custom-presets")]
  // webpackFinal: async (config, { configType }) => {
  //   // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'

  // }
};
