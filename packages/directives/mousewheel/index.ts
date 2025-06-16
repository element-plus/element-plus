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
    // 将事件处理函数存储在元素上，以便后续移除
    element._mousewheelHandler = fn
    element.addEventListener('wheel', fn, { passive: true })
  }
}

const Mousewheel: ObjectDirective = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    mousewheel(el, binding.value)
  },
  unmounted(el: HTMLElement) {
    if (el && el._mousewheelHandler) {
      el.removeEventListener('wheel', el._mousewheelHandler)
      delete el._mousewheelHandler
    }
  }
}

export default Mousewheel 