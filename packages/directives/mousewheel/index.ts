import normalizeWheel from 'normalize-wheel-es'

import type { DirectiveBinding, ObjectDirective } from 'vue'
import type { NormalizedWheelEvent } from 'normalize-wheel-es'
import type { BindEventHTMLElement } from '../repeat-click/index'

const mousewheel = function (
  element: BindEventHTMLElement,
  callback: (e: WheelEvent, normalized: NormalizedWheelEvent) => void
) {
  if (element && element.addEventListener) {
    const fn = function (this: HTMLElement, event: WheelEvent) {
      const normalized = normalizeWheel(event)
      callback && Reflect.apply(callback, this, [event, normalized])
    }
    element.addEventListener('wheel', fn, { passive: true })
    element.__element_bind_event__ = {
      wheel: fn,
    }
  }
}

const Mousewheel: ObjectDirective<BindEventHTMLElement> = {
  beforeMount(el, binding: DirectiveBinding) {
    mousewheel(el, binding.value)
  },
  beforeUnmount(el) {
    el.removeEventListener('wheel', el.__element_bind_event__['wheel'])
  },
}

export default Mousewheel
