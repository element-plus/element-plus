import { describe, expect, it } from 'vitest'
import { getComponentSize } from '../..'

describe('vue size', () => {
  it('default value', () => {
    const value1 = getComponentSize()
    const value2 = getComponentSize('default')
    expect(value1).toBe(32)
    expect(value2).toBe(32)
  })
  it('small value', () => {
    const value = getComponentSize('small')
    expect(value).toBe(24)
  })
  it('large value', () => {
    const value = getComponentSize('large')
    expect(value).toBe(40)
  })
})
