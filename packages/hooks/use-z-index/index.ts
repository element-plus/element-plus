import { computed, getCurrentInstance, inject, ref, unref } from 'vue'
import { debugWarn, isClient, isNumber } from '@element-plus/utils'

import type { Ref } from 'vue'

export interface ElZIndexInjectionContext {
  current: number
}

// @ts-ignore
if (!window.$$InitialZindex) {
  // @ts-ignore
  window.$$InitialZindex = {
    current: 0,
  }
}

// @ts-ignore
const initial: ElZIndexInjectionContext = window.$$InitialZindex

// @ts-ignore
if (!window.$$Zindex) {
  // @ts-ignore
  window.$$Zindex = ref(0)
}

export const defaultInitialZIndex = 2000

// For SSR
export const ZINDEX_INJECTION_KEY = 'ZINDEX_INJECTION_KEY'

export const zIndexContextKey = 'zIndexContextKey'

export const useZIndex = (zIndexOverrides?: Ref<number>) => {
  // @ts-ignore
  const zIndex = window.$$Zindex
  const increasingInjection = getCurrentInstance()
    ? inject(ZINDEX_INJECTION_KEY, initial)
    : initial

  const zIndexInjection =
    zIndexOverrides ||
    (getCurrentInstance() ? inject(zIndexContextKey, undefined) : undefined)

  const initialZIndex = computed(() => {
    const zIndexFromInjection = unref(zIndexInjection)
    return isNumber(zIndexFromInjection)
      ? zIndexFromInjection
      : defaultInitialZIndex
  })

  const currentZIndex = computed(() => initialZIndex.value + zIndex.value)

  const nextZIndex = () => {
    increasingInjection.current++
    zIndex.value = increasingInjection.current
    return currentZIndex.value
  }

  if (!isClient && !inject(ZINDEX_INJECTION_KEY)) {
    debugWarn(
      'ZIndexInjection',
      `Looks like you are using server rendering, you must provide a z-index provider to ensure the hydration process to be succeed
usage: app.provide(ZINDEX_INJECTION_KEY, { current: 0 })`
    )
  }

  return {
    initialZIndex,
    currentZIndex,
    nextZIndex,
  }
}

export type UseZIndexReturn = ReturnType<typeof useZIndex>
