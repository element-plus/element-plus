module.exports = jest.fn(fn => {
  fn.cancel = jest.fn()
  fn.flush = jest.fn()
  return fn
})
