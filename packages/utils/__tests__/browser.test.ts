import { describe, expect, it, vi } from 'vitest'
import { isFirefox } from '..'

describe('browser', () => {
  it('isFirefox should work', () => {
    const userAgents = [
      [
        'Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0',
        true,
      ],
      ['Mozilla/5.0 (Android; Mobile; rv:40.0) Gecko/40.0 Firefox/40.0', true],
      [
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:99.0) Gecko/20100101 Firefox/99.0',
        true,
      ],
      [
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36',
        false,
      ],
    ] as const
    for (const [userAgent, value] of userAgents) {
      vi.spyOn(navigator, 'userAgent', 'get').mockImplementation(
        () => userAgent
      )
      expect(isFirefox()).toBe(value)
    }
  })
})
