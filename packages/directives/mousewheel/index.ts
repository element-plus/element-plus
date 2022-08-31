import normalizeWheel from 'normalize-wheel-es'

import type { DirectiveBinding, ObjectDirective } from 'vue'
import type { NormalizedWheelEvent } from 'normalize-wheel-es'

const mousewheel = function (
  element: HTMLElement,
  callback: (e: WheelEvent, normalized: NormalizedWheelEvent) => void
) {
  if (element && element.addEventListener) {
    const fn = function (this: HTMLElement, event: WheelEvent) {
      const normalized = normalizeWheel(event)
      callback && Reflect.apply(callback, this, [event, normalized])
    }
    element.addEventListener('wheel', fn, { passive: true })
  }
}

const Mousewheel: ObjectDirective = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    mousewheel(el, binding.value)
  },
}

export default Mousewheel
