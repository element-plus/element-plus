import { useResizeObserver } from '@vueuse/core'

import type { DirectiveBinding, ObjectDirective } from 'vue'

declare interface ResizeEl extends HTMLElement {
  _handleResize?: () => void
  _stop?: () => void
}

const Resize: ObjectDirective = {
  beforeMount(el: ResizeEl, binding: DirectiveBinding) {
    el._handleResize = () => {
      el && binding.value?.(el)
    }
    el._stop = useResizeObserver(el, el._handleResize).stop
  },
  beforeUnmount(el: ResizeEl) {
    el && el._stop!()
  },
}

export default Resize
