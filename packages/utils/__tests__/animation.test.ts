import { describe, expect, it } from 'vitest'
import { cubic, easeInOutCubic } from '..'

describe('animation', () => {
  it('cubic should work', () => {
    expect(cubic(1)).toMatchInlineSnapshot('1')
    expect(cubic(5)).toMatchInlineSnapshot('125')
    expect(cubic(10)).toMatchInlineSnapshot('1000')
  })

  it('easeInOutCubic should work', () => {
    expect(easeInOutCubic(1)).toMatchInlineSnapshot('1')
    expect(easeInOutCubic(0.8).toFixed(4)).toMatchInlineSnapshot('"0.9680"')
    expect(easeInOutCubic(0.4).toFixed(4)).toMatchInlineSnapshot('"0.2560"')
  })
})
