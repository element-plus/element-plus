import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { cAF, rAF } from '..'

describe('raf', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('CSR should work', () => {
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
