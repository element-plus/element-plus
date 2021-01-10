import { on } from '@element-plus/utils/dom'
import type { ObjectDirective } from 'vue'

export default {
  beforeMount(el, binding) {
    let dom = null
    on(el, 'mousedown', e => {
      dom = e.target
    })
    on(el, 'mouseup', e => {
      if(e.target === el && e.target === dom){
        binding.value()
      }
    })
  },
} as ObjectDirective
