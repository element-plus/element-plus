import normalizeWheel from 'normalize-wheel'
import type { ObjectDirective } from 'vue'

const isFirefox =
  typeof navigator !== 'undefined' &&
  navigator.userAgent.toLowerCase().indexOf('firefox') > -1

const mousewheel = function (element, callback) {
  if (element && element.addEventListener) {
    const fn = function (event) {
      const normalized = normalizeWheel(event)
      callback && callback.apply(this, [event, normalized])
    }
    if (isFirefox) {
      element.addEventListener('DOMMouseScroll', fn)
    } else {
      element.onmousewheel = fn
    }
  }
}

const Mousewheel: ObjectDirective = {
  beforeMount(el, binding) {
    mousewheel(el, binding.value)
  },
}

export default Mousewheel
