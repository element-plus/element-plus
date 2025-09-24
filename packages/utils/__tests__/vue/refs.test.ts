import { describe, expect, it, vi } from 'vitest'
import { composeRefs } from '../..'

describe('composeRefs', () => {
  it('ref setter should be called', () => {
    const refSetter = vi.fn()
    const fn = composeRefs(refSetter)
    fn(null)
    expect(refSetter).toHaveBeenCalled()
  })
})
