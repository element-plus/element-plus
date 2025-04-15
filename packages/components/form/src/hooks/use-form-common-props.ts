import { computed, getCurrentInstance, inject, reactive, ref, unref } from 'vue'
import { SIZE_INJECTION_KEY, useGlobalSize, useProp } from '@element-plus/hooks'
import { hasOwn } from '@element-plus/utils'
import { formContextKey, formItemContextKey } from '../constants'

import type { FormContext, FormItemContext } from '../types'
import type { InjectionKey } from 'vue'
import type { ComponentSize } from '@element-plus/constants'
import type { MaybeRef } from '@vueuse/core'

export const useFormSize = (
  fallback?: MaybeRef<ComponentSize | undefined>,
  ignore: Partial<Record<'prop', boolean>> = {}
) => {
  const size = ignore.prop ? ref(undefined) : useProp<ComponentSize>('size')
  let context:
    | {
        size?: ComponentSize
      }
    | undefined = undefined

  const instance = getCurrentInstance()!
  // @ts-ignore
  let provides = instance.parent?.provides
  while (provides) {
    const injectionKey = [
      formItemContextKey,
      formContextKey,
      SIZE_INJECTION_KEY,
    ].find((key) => hasOwn(provides, key as symbol))

    if (injectionKey) {
      context =
        injectionKey === SIZE_INJECTION_KEY
          ? reactive({
              size: useGlobalSize(),
            })
          : inject(
              injectionKey as InjectionKey<FormContext | FormItemContext>,
              undefined
            )
      break
    }
    // @ts-ignore
    provides = Object.getPrototypeOf(provides)
  }

  return computed((): ComponentSize => {
    return size.value || unref(fallback) || context?.size || ''
  })
}

export const useFormDisabled = (fallback?: MaybeRef<boolean | undefined>) => {
  const disabled = useProp<boolean>('disabled')
  const form = inject(formContextKey, undefined)
  return computed(
    () => disabled.value || unref(fallback) || form?.disabled || false
  )
}

// These exports are used for preventing breaking changes
export const useSize = useFormSize
export const useDisabled = useFormDisabled
