import normalizeWheel from 'normalize-wheel-es'

import type { DirectiveBinding, ObjectDirective } from 'vue'
import type { NormalizedWheelEvent } from 'normalize-wheel-es'

let fnCallback:
  | ((event: WheelEvent, normalized: NormalizedWheelEvent) => void)
  | null = null

const fn = function (this: HTMLElement, event: WheelEvent) {
  const normalized = normalizeWheel(event)
  if (fnCallback) {
    Reflect.apply(fnCallback, this, [event, normalized])
  }
}

const mousewheel = function (
  element: HTMLElement,
  callback: (e: WheelEvent, normalized: NormalizedWheelEvent) => void
) {
  if (element && element.addEventListener) {
    fnCallback = callback
    element.addEventListener('wheel', fn, { passive: true })
  }
}

const Mousewheel: ObjectDirective = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    mousewheel(el, binding.value)
  },
  unmounted(el: HTMLElement) {
    el.removeEventListener('wheel', fn)
  },
}

export default Mousewheel
