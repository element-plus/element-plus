import { describe, expect, it, vi } from 'vitest'
import { debugWarn, throwError } from '..'

describe('error', () => {
  it('throwError should work', () => {
    expect(() =>
      throwError('scope', 'message')
    ).toThrowErrorMatchingInlineSnapshot(`[ElementPlusError: [scope] message]`)
  })

  it('debugWarn should work', () => {
    const warnFn = vi.spyOn(console, 'warn').mockImplementation(() => vi.fn)
    debugWarn('scope', 'message')
    debugWarn(new SyntaxError('custom error'))
    expect(warnFn.mock.calls).toMatchInlineSnapshot(`
      [
        [
          [ElementPlusError: [scope] message],
        ],
        [
          [SyntaxError: custom error],
        ],
      ]
    `)
  })
})
