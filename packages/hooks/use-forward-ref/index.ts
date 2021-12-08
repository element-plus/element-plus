import { provide, ref } from 'vue'

import type { InjectionKey, Ref } from 'vue'

export type ForwardRefInjectionContext = {
  setForwardRef: <T>(el: T) => void
}

export const FORWARD_REF_INJECTION_KEY: InjectionKey<ForwardRefInjectionContext> =
  Symbol('elForwardRef')

export const useForwardRef = <T>(forwardRef: Ref<T | null>) => {
  const setForwardRef = (el: T) => {
    forwardRef.value = el
  }

  provide(FORWARD_REF_INJECTION_KEY, {
    setForwardRef,
  })
}
