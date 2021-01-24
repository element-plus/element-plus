import { on } from '@element-plus/utils/dom'
import type { ObjectDirective } from 'vue'

export default {
  beforeMount(el, binding) {
    // refer to this https://javascript.info/mouse-events-basics
    // events fired in the order: mousedown -> mouseup -> click
    // We need to make sure that the dom of the down and up
    // events is the same and then we can trigger the
    // corresponding event
    let mousedownTarget  = null
    on(el, 'mousedown', e => {
      mousedownTarget  = e.target
    })
    on(el, 'mouseup', e => {
      if(e.target === el && e.target === mousedownTarget){
        binding.value()
      }
    })
  },
} as ObjectDirective
