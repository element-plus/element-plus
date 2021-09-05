import {
  addResizeListener,
  removeResizeListener,
} from '@element-plus/utils/resize-event'

import type { ObjectDirective } from 'vue'

const Resize: ObjectDirective = {
  beforeMount(el, binding) {
    el._handleResize = () => {
      el && binding.value?.(el)
    }
    addResizeListener(el, el._handleResize)
  },
  beforeUnmount(el) {
    removeResizeListener(el, el._handleResize)
  },
}

export default Resize
