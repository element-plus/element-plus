import { describe, expect, it } from 'vitest'
import { ensureOnlyChild } from '../..'

describe('ensureOnlyChild', () => {
  it('it should throw an error if input is not an array or undefined', () => {
    expect(() => {
      ensureOnlyChild('not an array' as any)
    }).toThrow('expect to receive a single Vue element child')
  })

  it('it should throw an error if input array has more than one element', () => {
    expect(() => {
      ensureOnlyChild([1, 2])
    }).toThrow('expect to receive a single Vue element child')
  })

  it('it should return the only child if input is an array with one element', () => {
    const child = { type: 'div' }
    expect(ensureOnlyChild([child as any])).toEqual(child)
  })
})
