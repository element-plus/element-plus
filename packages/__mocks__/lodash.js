
const _ = jest.requireActual('lodash')

_.debounce = _.throttle = jest.fn(fn => {
  fn.cancel = jest.fn()
  fn.flush = jest.fn()
  return fn
})

module.exports = _
