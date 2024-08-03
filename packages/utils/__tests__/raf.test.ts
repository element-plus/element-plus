/* eslint-disable import/first */
let isClientMocked = false

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

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

  it('CSR should work', async () => {
    isClientMocked = true
    const obj = await import('..')
    const { cAF, rAF } = obj
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

  it('SSR should work', async () => {
    isClientMocked = false
    const obj = await import('..')
    const { cAF, rAF } = obj
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
