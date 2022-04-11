import { describe, expect, it, vi } from 'vitest'
import { cAF, rAF } from '..'

describe('raf', () => {
  it('CSR should work', () => {
    vi.useFakeTimers()

    const fn = vi.fn()
    rAF(() => fn('first'))
    vi.runAllTimers()
    expect(fn.mock.calls).toMatchInlineSnapshot(`
      [
        [
          "first",
        ],
      ]
    `)

    rAF(() => fn('second'))
    vi.runAllTimers()
    expect(fn.mock.calls).toMatchInlineSnapshot(`
      [
        [
          "first",
        ],
        [
          "second",
        ],
      ]
    `)

    const handle = rAF(() => fn('cancel'))
    cAF(handle)
    vi.runAllTimers()
    expect(fn.mock.calls).toMatchInlineSnapshot(`
      [
        [
          "first",
        ],
        [
          "second",
        ],
      ]
    `)
  })

  it('SSR should work', () => {
    vi.mock('@vueuse/core', () => ({ isClient: false }))
    vi.useFakeTimers()

    const fn = vi.fn()
    rAF(() => fn('first'))
    vi.runAllTimers()
    expect(fn.mock.calls).toMatchInlineSnapshot(`
      [
        [
          "first",
        ],
      ]
    `)

    rAF(() => fn('second'))
    vi.runAllTimers()
    expect(fn.mock.calls).toMatchInlineSnapshot(`
      [
        [
          "first",
        ],
        [
          "second",
        ],
      ]
    `)

    const handle = rAF(() => fn('cancel'))
    cAF(handle)
    vi.runAllTimers()
    expect(fn.mock.calls).toMatchInlineSnapshot(`
      [
        [
          "first",
        ],
        [
          "second",
        ],
      ]
    `)
  })
})
