const { config } = require('@vue/test-utils')
const _ResizeObserver = require('resize-observer-polyfill')

config.global.stubs = {}

global.ResizeObserver = _ResizeObserver
process.addListener('unhandledRejection', (err) => console.error(err))
