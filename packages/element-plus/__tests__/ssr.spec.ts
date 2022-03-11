/**
 * @jest-environment node
 */

describe('SSR', () => {
  test('require', () => {
    process.env.VUE_ENV = 'server'
    require('..')
    expect('pass').toBe('pass')
  })
})
