import { describe, expect, it } from 'vitest'
import { castArray as lodashCastArray } from 'lodash-unified'
import { castArray, ensureArray, extractFirst, unique } from '..'

describe('arrays', () => {
  it('unique should work', () => {
    expect(unique([1, 2, 3, 1])).toEqual([1, 2, 3])
    expect(unique([1, 2, 3])).toEqual([1, 2, 3])
  })

  it('castArray should work', () => {
    expect(castArray([1, 2, 3])).toEqual([1, 2, 3])
    expect(castArray(0)).toEqual([0])
    expect(castArray(undefined)).toEqual([])
  })

  it('re-export ensureArray', () => {
    expect(ensureArray).toBe(lodashCastArray)
  })

  it('extractFirst should work', () => {
    expect(extractFirst([1, 2, 3])).toBe(1)
    expect(extractFirst(['a', 'b', 'c'])).toBe('a')
    expect(extractFirst(42)).toBe(42)
    expect(extractFirst('hello')).toBe('hello')
    expect(extractFirst(null)).toBe(null)
    expect(extractFirst(undefined)).toBe(undefined)
    expect(extractFirst([])).toBe(undefined)
  })
})
