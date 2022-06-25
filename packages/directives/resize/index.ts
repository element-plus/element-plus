// @ts-nocheck
import { addResizeListener, removeResizeListener } from '@element-plus/utils'

import type { DirectiveBinding, ObjectDirective } from 'vue'

declare interface ResizeEl extends HTMLElement {
  _handleResize?: () => void
}

const Resize: ObjectDirective = {
  beforeMount(el: ResizeEl, binding: DirectiveBinding) {
    el._handleResize = () => {
      el && binding.value?.(el)
    }
    addResizeListener(el, el._handleResize)
  },
  beforeUnmount(el: ResizeEl) {
    removeResizeListener(el, el._handleResize)
  },
}

export default Resize
