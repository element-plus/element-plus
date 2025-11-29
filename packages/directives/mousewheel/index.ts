import normalizeWheel from 'normalize-wheel-es'

import type { ObjectDirective } from 'vue'
import type { NormalizedWheelEvent } from 'normalize-wheel-es'

export const SCOPE = '_Mousewheel'

interface WheelElement extends HTMLElement {
  [SCOPE]: null | {
    wheelHandler?: (event: WheelEvent) => void
  }
}

type MousewheelCallback = (
  e: WheelEvent,
  normalized: NormalizedWheelEvent
) => void

const mousewheel = function (
  element: WheelElement,
  callback: MousewheelCallback
) {
  if (element && element.addEventListener) {
    removeWheelHandler(element)

    const fn = function (this: HTMLElement, event: WheelEvent) {
      const normalized = normalizeWheel(event)
      callback && Reflect.apply(callback, this, [event, normalized])
    }

    element[SCOPE] = { wheelHandler: fn }
    element.addEventListener('wheel', fn, { passive: true })
  }
}

const removeWheelHandler = (element: WheelElement) => {
  if (element[SCOPE]?.wheelHandler) {
    element.removeEventListener('wheel', element[SCOPE].wheelHandler)
    element[SCOPE] = null
  }
}

const Mousewheel: ObjectDirective<WheelElement, MousewheelCallback> = {
  beforeMount(el, binding) {
    mousewheel(el, binding.value)
  },
  unmounted(el) {
    removeWheelHandler(el)
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      mousewheel(el, binding.value)
    }
  },
}

export default Mousewheel
