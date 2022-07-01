// @ts-nocheck
import normalizeWheel from 'normalize-wheel-es'
import type { DirectiveBinding, ObjectDirective } from 'vue'

const mousewheel = function (element, callback) {
  if (element && element.addEventListener) {
    const fn = function (this: any, event) {
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
