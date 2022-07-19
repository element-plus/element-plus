import { isRef, onScopeDispose, watch } from 'vue'

import { isClient } from '@vueuse/core'
import {
  addClass,
  getScrollBarWidth,
  getStyle,
  hasClass,
  removeClass,
  throwError,
} from '@element-plus/utils'
import { defaultNamespace, useGlobalConfig } from '@element-plus/hooks'

import type { Ref } from 'vue'

/**
 * Hook that monitoring the ref value to lock or unlock the screen.
 * When the trigger became true, it assumes modal is now opened and vice versa.
 * @param trigger {Ref<boolean>}
 */
export const useLockscreen = (trigger: Ref<boolean>) => {
  if (!isRef(trigger)) {
    throwError(
      '[useLockscreen]',
      'You need to pass a ref param to this function'
    )
  }
  const namespace = useGlobalConfig('namespace', defaultNamespace)
  const cls = `${namespace.value}-popup-parent--hidden`

  if (!isClient || hasClass(document.body, cls)) {
    return
  }

  let scrollBarWidth = 0
  let withoutHiddenClass = false
  let bodyPaddingRight = '0'
  let computedBodyPaddingRight = 0

  const cleanup = () => {
    removeClass(document.body, cls)
    if (withoutHiddenClass) {
      document.body.style.paddingRight = bodyPaddingRight
    }
  }
  watch(trigger, (val) => {
    if (!val) {
      cleanup()
      return
    }

    withoutHiddenClass = !hasClass(document.body, cls)
    if (withoutHiddenClass) {
      bodyPaddingRight = document.body.style.paddingRight
      computedBodyPaddingRight = Number.parseInt(
        getStyle(document.body, 'paddingRight'),
        10
      )
    }
    scrollBarWidth = getScrollBarWidth()
    const bodyHasOverflow =
      document.documentElement.clientHeight < document.body.scrollHeight
    const bodyOverflowY = getStyle(document.body, 'overflowY')
    if (
      scrollBarWidth > 0 &&
      (bodyHasOverflow || bodyOverflowY === 'scroll') &&
      withoutHiddenClass
    ) {
      document.body.style.paddingRight = `${
        computedBodyPaddingRight + scrollBarWidth
      }px`
    }
    addClass(document.body, cls)
  })
  onScopeDispose(() => cleanup())
}
