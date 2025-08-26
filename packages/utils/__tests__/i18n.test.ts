import { describe, expect, it } from 'vitest'
import { isKorean } from '..'

describe('i18n', () => {
  it('isKorean should work', () => {
    expect(isKorean('한국어')).toBe(true)
    expect(isKorean('한국어 korean')).toBe(true)
    expect(isKorean('korean')).toBe(false)
    expect(isKorean('中文')).toBe(false)
    expect(isKorean('にほんご')).toBe(false)
  })
})
