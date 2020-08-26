import { ref, watch, isRef } from 'vue'

import getScrollBarWidth from '@element-plus/utils/scrollbar-width'
import throwError from '@element-plus/utils/error'
import { addClass, removeClass, hasClass, getStyle } from '@element-plus/utils/dom'

import type { Ref } from 'vue'

/**
 * Hook that monitoring the ref value to lock or unlock the screen.
 * When the trigger became true, it assumes modal is now opened and vice versa.
 * @param trigger {Ref<boolean>}
 */
export default function useLockScreen(trigger: Ref<boolean>) {
  if (!isRef(trigger)) {
    throwError('[useLockScreen]', 'You need to pass a ref param to this function')
  }
  const scrollBarWidth = ref(0)
  const withoutHiddenClass = ref(false)
  const bodyPaddingRight = ref('0')
  const computedBodyPaddingRight = ref(0)
  watch(trigger, val => {
    if (val) {
      withoutHiddenClass.value = !hasClass(document.body, 'el-popup-parent--hidden')
      if (withoutHiddenClass.value) {
        bodyPaddingRight.value = document.body.style.paddingRight
        computedBodyPaddingRight.value = parseInt(getStyle(document.body, 'paddingRight'), 10)
      }
      scrollBarWidth.value = getScrollBarWidth()
      const bodyHasOverflow = document.documentElement.clientHeight < document.body.scrollHeight
      const bodyOverflowY = getStyle(document.body, 'overflowY')
      if (scrollBarWidth.value > 0 && (bodyHasOverflow || bodyOverflowY === 'scroll') && withoutHiddenClass.value) {
        document.body.style.paddingRight = computedBodyPaddingRight.value + scrollBarWidth.value + 'px'
      }
      addClass(document.body, 'el-popup-parent--hidden')
    } else {
      if (withoutHiddenClass.value) {
        document.body.style.paddingRight = bodyPaddingRight.value
        removeClass(document.body, 'el-popup-parent--hidden')
      }
      withoutHiddenClass.value = true
    }
  })
}
