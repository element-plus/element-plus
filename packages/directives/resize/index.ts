import { addResizeListener, removeResizeListener } from '@element-plus/utils/resize-event'

import type { ObjectDirective } from 'vue'

function handleResize(el, binding) {
  el && binding.value?.()
}

const Resize: ObjectDirective = {
  beforeMount(el, binding) {
    addResizeListener(el, handleResize.bind(null, el, binding))
  },
  beforeUnmount(el) {
    removeResizeListener(el, handleResize)
  },
}

export default Resize
