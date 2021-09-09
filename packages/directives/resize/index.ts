import {
  addResizeListener,
  removeResizeListener,
} from '@element-plus/utils/resize-event'

import type { ObjectDirective, DirectiveBinding } from 'vue'

const Resize: ObjectDirective = {
  beforeMount(el: HTMLElement | any, binding: DirectiveBinding) {
    el._handleResize = () => {
      el && binding.value?.(el)
    }
    addResizeListener(el, el._handleResize)
  },
  beforeUnmount(el: HTMLElement | any) {
    removeResizeListener(el, el._handleResize)
  },
}

export default Resize
