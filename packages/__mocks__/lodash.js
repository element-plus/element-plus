
const _ = jest.requireActual('lodash')


const debounce = jest.fn(fn => {
  const caller = () => {
    return fn()
  }
  caller.cancel = jest.fn()
  caller.flush = jest.fn()
  return caller
})

_.debounce = debounce

module.exports = _
