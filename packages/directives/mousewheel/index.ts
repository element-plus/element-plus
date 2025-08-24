import normalizeWheel from 'normalize-wheel-es'

import type { DirectiveBinding, ObjectDirective } from 'vue'
import type { NormalizedWheelEvent } from 'normalize-wheel-es'

interface WheelElement extends HTMLElement {
  _wheelHandler?: (event: WheelEvent) => void
}

const mousewheel = function (
  element: WheelElement,
  callback: (e: WheelEvent, normalized: NormalizedWheelEvent) => void
) {
  if (element && element.addEventListener) {
    // 先移除可能存在的旧处理函数
    removeWheelHandler(element)
    
    // 创建新的处理函数
    const fn = function (this: HTMLElement, event: WheelEvent) {
      const normalized = normalizeWheel(event)
      callback && Reflect.apply(callback, this, [event, normalized])
    }
    
    // 保存处理函数引用
    element._wheelHandler = fn
    element.addEventListener('wheel', fn, { passive: true })
  }
}

const removeWheelHandler = (element: WheelElement) => {
  if (element._wheelHandler) {
    element.removeEventListener('wheel', element._wheelHandler)
    delete element._wheelHandler
  }
}

const Mousewheel: ObjectDirective = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    mousewheel(el, binding.value)
  },
  unmounted(el: HTMLElement) {
    removeWheelHandler(el as WheelElement)
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    if (binding.value !== binding.oldValue) {
      mousewheel(el as WheelElement, binding.value)
    }
  },
}

export default Mousewheel
