import { afterEach, describe, expect, test, vi } from 'vitest'
import { getRTLOffsetType } from '../src/mask-utils'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('getRTLOffsetType', () => {
  test.each([
    { type: 'negative', initial: 0, acceptsPositive: false },
    { type: 'positive-descending', initial: 50, acceptsPositive: true },
    { type: 'positive-ascending', initial: 0, acceptsPositive: true },
  ])(
    'detects and caches $type offsets',
    ({ type, initial, acceptsPositive }) => {
      const appendChild = document.body.appendChild.bind(document.body)
      let probe: HTMLElement | undefined
      const append = vi
        .spyOn(document.body, 'appendChild')
        .mockImplementation((node) => {
          probe = node as HTMLElement
          let offset = initial
          Object.defineProperty(probe, 'scrollLeft', {
            get: () => offset,
            set: (value: number) => {
              offset = acceptsPositive ? value : 0
            },
          })
          return appendChild(node)
        })

      expect(getRTLOffsetType(true)).toBe(type)
      expect(probe?.isConnected).toBe(false)
      expect(probe?.style.position).toBe('absolute')
      expect(probe?.style.visibility).toBe('hidden')
      expect(getRTLOffsetType()).toBe(type)
      expect(append).toHaveBeenCalledTimes(1)

      expect(getRTLOffsetType(true)).toBe(type)
      expect(append).toHaveBeenCalledTimes(2)
      expect(probe?.isConnected).toBe(false)
    }
  )
})
