/* eslint-disable import/first */
let isClientMocked = false

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { cAF, rAF } from '..'

vi.mock('@vueuse/core', () => ({
  get isClient() {
    return isClientMocked
  },
}))

describe('raf', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('CSR should work', () => {
    isClientMocked = true

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
    isClientMocked = false

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
