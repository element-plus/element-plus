/**
 * @jest-environment node
 */

describe('SSR', () => {
  test('require', () => {
    try {
      process.env.VUE_ENV = 'server'
      require('..')
    } catch (e) {
      throw new Error(e)
    }
    expect('pass').toBe('pass')
  })
})
