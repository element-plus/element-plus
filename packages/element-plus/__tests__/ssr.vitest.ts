/**
 * @vitest-environment node
 */

import { describe, expect, it } from 'vitest'

describe('SSR', () => {
  it('import', async () => {
    process.env.VUE_ENV = 'server'
    await import('../index')
    expect('pass').toBe('pass')
  })
})
