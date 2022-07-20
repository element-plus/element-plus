// @ts-nocheck
import { nextTick } from 'vue'
import { isFunction } from '@vue/shared'
import { throttle } from 'lodash-unified'
import { useIntersectionObserver } from '@vueuse/core'
import { getScrollContainer, throwError } from '@element-plus/utils'

import type { ComponentPublicInstance, ObjectDirective } from 'vue'

export const SCOPE = 'ElInfiniteScroll'
export const CHECK_INTERVAL = 50
export const DEFAULT_DELAY = 200
export const DEFAULT_DISTANCE = 0

const attributes = {
  delay: {
    type: Number,
    default: DEFAULT_DELAY,
  },
  distance: {
    type: Number,
    default: DEFAULT_DISTANCE,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  immediate: {
    type: Boolean,
    default: true,
  },
}

type Attrs = typeof attributes
type ScrollOptions = { [K in keyof Attrs]: Attrs[K]['default'] }
type InfiniteScrollCallback = () => void
type InfiniteScrollEl = HTMLElement & {
  [SCOPE]: {
    container: HTMLElement | Window
    containerEl: HTMLElement
    instance: ComponentPublicInstance
    delay: number // export for test
    lastScrollTop: number
    cb: InfiniteScrollCallback
    onScroll: () => void
    observer?: MutationObserver
  }
}

const getScrollOptions = (
  el: HTMLElement,
  instance: ComponentPublicInstance
): ScrollOptions => {
  return Object.entries(attributes).reduce((acm, [name, option]) => {
    const { type, default: defaultValue } = option
    const attrVal = el.getAttribute(`infinite-scroll-${name}`)
    let value = instance[attrVal] ?? attrVal ?? defaultValue
    value = value === 'false' ? false : value
    value = type(value)
    acm[name] = Number.isNaN(value) ? defaultValue : value
    return acm
  }, {} as ScrollOptions)
}

const destroyObserver = (el: InfiniteScrollEl) => {
  const { observer } = el[SCOPE]

  if (observer) {
    observer.disconnect()
    delete el[SCOPE].observer
  }
}

const intersectionObserverCallback = (
  loadMoreEl: HTMLElement,
  el: InfiniteScrollEl,
  cb: InfiniteScrollCallback,
  instance
) => {
  const { disabled, distance, container } = getScrollOptions(el, instance)
  if (disabled) return
  const { stop } = useIntersectionObserver(
    loadMoreEl,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        cb.call(instance)
      }
    },
    {
      rootMargin: `0px 0px -${distance}px 0px`,
      root: container,
    }
  )
  el[SCOPE] = {
    ...el[SCOPE],
    stop,
  }
}

const stopIntersectionObserverCallback = (el: InfiniteScrollEl) => {
  const { stop, loadMoreEl } = el[SCOPE]
  stop()
  el.removeChild(loadMoreEl)
}

function checkFull(el: InfiniteScrollEl, cb: InfiniteScrollCallback) {
  const { containerEl, instance } = el[SCOPE]
  const { disabled } = getScrollOptions(el, instance)

  if (disabled || containerEl.clientHeight === 0) return

  if (containerEl.scrollHeight <= containerEl.clientHeight) {
    cb.call(instance)
  } else {
    destroyObserver(el)
  }
}

const InfiniteScroll: ObjectDirective<
  InfiniteScrollEl,
  InfiniteScrollCallback
> = {
  async mounted(el, binding) {
    const { instance, value: cb } = binding

    if (!isFunction(cb)) {
      throwError(SCOPE, "'v-infinite-scroll' binding value must be a function")
    }

    // ensure parentNode mounted
    await nextTick()

    const { delay, immediate } = getScrollOptions(el, instance)
    const container = getScrollContainer(el, true)
    const containerEl =
      container === window
        ? document.documentElement
        : (container as HTMLElement)
    if (!container) return

    const loadMoreEl = document.createElement('div')
    el.appendChild(loadMoreEl)

    el[SCOPE] = {
      instance,
      container,
      containerEl,
      delay,
      cb,
      loadMoreEl,
    }
    intersectionObserverCallback(loadMoreEl, el, cb, instance)

    if (immediate) {
      const observer = new MutationObserver(
        throttle(checkFull.bind(null, el, cb), CHECK_INTERVAL)
      )
      el[SCOPE].observer = observer
      observer.observe(el, { childList: true, subtree: true })
      checkFull(el, cb)
    }
  },
  unmounted(el) {
    stopIntersectionObserverCallback(el)
    destroyObserver(el)
  },
  async updated(el) {
    if (!el[SCOPE]) {
      await nextTick()
    }
    const { containerEl, cb, observer } = el[SCOPE]
    if (containerEl.clientHeight && observer) {
      checkFull(el, cb)
    }
  },
}

export default InfiniteScroll
