import { describe, expect, it } from 'vitest'
import { castArray as lodashCastArray } from 'lodash-unified'
import { castArray, ensureArray, unique } from '../index'

describe('arrays', () => {
  it('unique should work', () => {
    expect(unique([1, 2, 3, 1])).toEqual([1, 2, 3])
    expect(unique([1, 2, 3])).toEqual([1, 2, 3])
  })

  it('ensureArray should work', () => {
    expect(ensureArray([1, 2, 3])).toEqual([1, 2, 3])
    expect(ensureArray(0)).toEqual([0])
    expect(ensureArray(undefined)).toEqual([])
  })

  it('re-export castArray', () => {
    expect(castArray).toBe(lodashCastArray)
  })
})
