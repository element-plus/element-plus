const path = require('path');

module.exports = {
  stories: ['../packages/**/doc/*.stories.[tj]s'],
  presets: [path.resolve(__dirname, './custom-presets')],
  addons: ['@storybook/addon-storysource'],
};
