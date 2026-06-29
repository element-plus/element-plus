import { computed, isRef, onScopeDispose, watch } from 'vue'
import {
  addClass,
  getScrollBarWidth,
  getStyle,
  hasClass,
  removeClass,
  throwError,
} from '@element-plus/utils'
import { useNamespace } from '../use-namespace'

import type { Ref } from 'vue'
import type { UseNamespaceReturn } from '../use-namespace'

export type UseLockScreenOptions = {
  ns?: UseNamespaceReturn
  // shouldLock?: MaybeRef<boolean>
}

let lockCount = 0
let paddingCompensated = false
let bodyPaddingRightBeforeLock = ''

/**
 * Hook that monitoring the ref value to lock or unlock the screen.
 * When the trigger became true, it assumes modal is now opened and vice versa.
 * @param trigger {Ref<boolean>}
 */
export const useLockscreen = (
  trigger: Ref<boolean>,
  options: UseLockScreenOptions = {}
) => {
  if (!isRef(trigger)) {
    throwError(
      '[useLockscreen]',
      'You need to pass a ref param to this function'
    )
  }

  const ns = options.ns || useNamespace('popup')

  const hiddenCls = computed(() => ns.bm('parent', 'hidden'))

  let scrollBarWidth = 0
  let addedHiddenClass = false
  let hasActiveLock = false
  let cleaned = false

  const cleanup = () => {
    if (cleaned) return

    cleaned = true
    if (hasActiveLock) {
      lockCount = Math.max(0, lockCount - 1)
      hasActiveLock = false
    }
    setTimeout(() => {
      // When the test case is running, the context environment simulated by jsdom may have been destroyed,
      // and the document does not exist at this time.
      if (typeof document === 'undefined') return
      if (addedHiddenClass) {
        removeClass(document.body, hiddenCls.value)
      }
      if (paddingCompensated && lockCount === 0) {
        if (bodyPaddingRightBeforeLock) {
          document.body.style.paddingRight = bodyPaddingRightBeforeLock
        } else {
          document.body.style.removeProperty('padding-right')
        }
        paddingCompensated = false
      }
    }, 200)
  }
  watch(trigger, (val) => {
    if (!val) {
      cleanup()
      return
    }

    cleaned = false
    if (hasActiveLock) return

    addedHiddenClass = !hasClass(document.body, hiddenCls.value)
    hasActiveLock = true
    lockCount++

    scrollBarWidth = getScrollBarWidth(ns.namespace.value)
    const bodyHasOverflow =
      document.documentElement.clientHeight < document.body.scrollHeight
    const bodyOverflowY = getStyle(document.body, 'overflowY')
    const needCompensation =
      scrollBarWidth > 0 && (bodyHasOverflow || bodyOverflowY === 'scroll')

    if (lockCount === 1 && needCompensation) {
      bodyPaddingRightBeforeLock = document.body.style.paddingRight
      const computedBodyPaddingRight =
        Number.parseFloat(getStyle(document.body, 'paddingRight')) || 0
      document.body.style.paddingRight = `${
        computedBodyPaddingRight + scrollBarWidth
      }px`
      paddingCompensated = true
    }
    if (addedHiddenClass) {
      addClass(document.body, hiddenCls.value)
    }
  })
  onScopeDispose(() => cleanup())
}
