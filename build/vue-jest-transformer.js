/* eslint-disable @typescript-eslint/no-var-requires */
const transfomer = require('vue-jest')
const { transform } = require('unplugin-vue-define-options')

module.exports = {
  getCacheKey: transfomer.getCacheKey,
  process(src, filename, config) {
    src = transform(src, filename)?.code || src
    return transfomer.process(src, filename, config)
  },
}
