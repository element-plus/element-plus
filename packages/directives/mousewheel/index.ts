import normalizeWheel from 'normalize-wheel-es'
import { isFirefox } from '@element-plus/utils'
import type { ObjectDirective, DirectiveBinding } from 'vue'

const mousewheel = function (element, callback) {
  if (element && element.addEventListener) {
    const fn = function (this: any, event) {
      const normalized = normalizeWheel(event)
      callback && callback.apply(this, [event, normalized])
    }
    if (isFirefox()) {
      element.addEventListener('DOMMouseScroll', fn)
    } else {
      element.onmousewheel = fn
    }
  }
}

const Mousewheel: ObjectDirective = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    mousewheel(el, binding.value)
  },
}

export default Mousewheel
