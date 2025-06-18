import normalizeWheel from 'normalize-wheel-es'

import type { ObjectDirective } from 'vue'
import type { NormalizedWheelEvent } from 'normalize-wheel-es'

type OnMouseWheelHandler = (
  e: WheelEvent,
  normalized: NormalizedWheelEvent
) => void

const mousewheel = function (
  element: HTMLElement,
  callback: OnMouseWheelHandler
) {
  if (element && element.addEventListener) {
    const fn = function (this: HTMLElement, event: WheelEvent) {
      const normalized = normalizeWheel(event)
      callback && Reflect.apply(callback, this, [event, normalized])
    }
    element.addEventListener('wheel', fn, { passive: true })
  }
}

const Mousewheel: ObjectDirective<HTMLElement, OnMouseWheelHandler> = {
  beforeMount(el, binding) {
    mousewheel(el, binding.value)
  },
}

export default Mousewheel
