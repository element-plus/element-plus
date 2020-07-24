const path = require('path');

module.exports = {
  stories: ['../packages/**/*.stories.[tj]s'],
  presets: [path.resolve(__dirname, './custom-presets')],
};
