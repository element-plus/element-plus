import { describe, expect, it, vi } from 'vitest'
import { isFocusable, triggerEvent } from '../..'

const CE = (tag: string) => document.createElement(tag)

describe('Aria Utils', () => {
  describe('Trigger Event', () => {
    it('Util trigger event to trigger event correctly', () => {
      const div = document.createElement('div')
      vi.spyOn(div, 'dispatchEvent')
      const eventName = 'click'
      triggerEvent(div, eventName)
      expect(div.dispatchEvent).toHaveBeenCalled()
    })
  })

  describe('isFocusable', () => {
    it("should be focusable when element has tabindex attr, and it's value is greater than 0", () => {
      const $el = CE('div')
      $el.tabIndex = 1
      expect(isFocusable($el)).toBe(true)
    })

    it("should not be focusable when element has tabindex attr, and it's value is smaller than 0", () => {
      const $el = CE('div')
      $el.tabIndex = -1
      expect(isFocusable($el)).toBe(false)
    })

    it('should not be focusable when disbaled', () => {
      const $el = CE('div')
      $el.setAttribute('disabled', 'true')
      expect(isFocusable($el)).toBe(false)
    })
    it('should be focusable when target is anchor and rel is not set to ignore', () => {
      const $el = CE('a') as HTMLAnchorElement
      $el.href = '#anchor'
      $el.rel = 'noreferrer'
      expect(isFocusable($el)).toBe(true)
    })
    it('should not be focusable when target is anchor and rel is set to ignore', () => {
      const $el = CE('a') as HTMLAnchorElement
      $el.href = '#anchor'
      $el.rel = 'ignore'
      expect(isFocusable($el)).toBe(false)
    })
    it('should be focusable when target is input and type is not hidden or is not file', () => {
      const $el = CE('input') as HTMLInputElement
      $el.type = 'hidden'
      expect(isFocusable($el)).toBe(false)
      $el.type = 'file'
      expect(isFocusable($el)).toBe(false)
      $el.type = 'number'
      expect(isFocusable($el)).toBe(true)
    })
    it('should be focusable when the target is button/select/textarea', () => {
      let $el = CE('button')
      expect(isFocusable($el)).toBe(true)
      $el = CE('select')
      expect(isFocusable($el)).toBe(true)
      $el = CE('textarea')
      expect(isFocusable($el)).toBe(true)
    })
  })
})
