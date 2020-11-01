const _ = jest.requireActual('lodash')

_.debounce = require('./debounce')
_.throttle = require('./throttle')

module.exports = _
