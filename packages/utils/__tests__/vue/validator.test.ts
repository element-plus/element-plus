import { describe, expect, it } from 'vitest'
import { isValidComponentSize, isValidDatePickType } from '../..'

describe('validator', () => {
  it('isValidComponentSize', () => {
    expect(isValidComponentSize('')).toBe(true)
    expect(isValidComponentSize('default')).toBe(true)
    expect(isValidComponentSize('small')).toBe(true)
    expect(isValidComponentSize('large')).toBe(true)
    expect(isValidComponentSize('unknown')).toBe(false)
  })
  it('isValidDatePickType', () => {
    expect(isValidDatePickType('year')).toBe(true)
    expect(isValidDatePickType('years')).toBe(true)
    expect(isValidDatePickType('month')).toBe(true)
    expect(isValidDatePickType('months')).toBe(true)
    expect(isValidDatePickType('date')).toBe(true)
    expect(isValidDatePickType('dates')).toBe(true)
    expect(isValidDatePickType('week')).toBe(true)
    expect(isValidDatePickType('datetime')).toBe(true)
    expect(isValidDatePickType('datetimerange')).toBe(true)
    expect(isValidDatePickType('daterange')).toBe(true)
    expect(isValidDatePickType('monthrange')).toBe(true)
    expect(isValidDatePickType('moment')).toBe(false)
  })
})
