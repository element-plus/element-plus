import { computed, isRef, onScopeDispose, watch } from 'vue'
import {
  addClass,
  getScrollBarWidth,
  getStyle,
  hasClass,
  isClient,
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

  if (!isClient || hasClass(document.body, hiddenCls.value)) {
    return
  }

  let scrollBarWidth = 0
  let withoutHiddenClass = false
  let bodyWidth = '0'

  const cleanup = () => {
    setTimeout(() => {
      // When the test case is running, the context environment simulated by jsdom may have been destroyed,
      // and the document does not exist at this time.
      if (typeof document === 'undefined') return
      if (withoutHiddenClass && document) {
        document.body.style.width = bodyWidth
        removeClass(document.body, hiddenCls.value)
      }
    }, 200)
  }
  watch(trigger, (val) => {
    if (!val) {
      cleanup()
      return
    }

    withoutHiddenClass = !hasClass(document.body, hiddenCls.value)
    if (withoutHiddenClass) {
      bodyWidth = document.body.style.width
      addClass(document.body, hiddenCls.value)
    }
    scrollBarWidth = getScrollBarWidth(ns.namespace.value)
    const bodyHasOverflow =
      document.documentElement.clientHeight < document.body.scrollHeight
    const bodyOverflowY = getStyle(document.body, 'overflowY')
    if (
      scrollBarWidth > 0 &&
      (bodyHasOverflow || bodyOverflowY === 'scroll') &&
      withoutHiddenClass
    ) {
      document.body.style.width = `calc(100% - ${scrollBarWidth}px)`
    }
  })
  onScopeDispose(() => cleanup())
}
