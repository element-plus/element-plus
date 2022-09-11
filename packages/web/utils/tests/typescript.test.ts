import { describe, expect, it } from 'vitest'
import { mutable } from '../src'

describe('typescript', () => {
  it('mutable should work', () => {
    const obj = { key: 'value', foo: 'bar' }
    expect(mutable(obj)).toBe(obj)
  })
})
