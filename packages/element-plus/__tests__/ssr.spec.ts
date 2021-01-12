import path from 'path'

describe('SSR', () => {
  test('require', () => {
    try {
      process.env.VUE_ENV = 'server'
      require('../index')
    } catch (e) {
      throw Error(e)
    }
    expect('pass').toBe('pass')
  })
})
