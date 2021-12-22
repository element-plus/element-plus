import { ref, unref, inject, computed } from 'vue'
import { useGlobalConfig as useGlobalConfigLegacy } from '@element-plus/utils/util'
import { elFormItemKey, elFormKey } from '@element-plus/tokens'
import { buildProp, componentSize } from '@element-plus/utils/props'
import { useProp } from '../use-prop'
import { useGlobalConfig } from '../use-global-config'
import type { ComponentSize } from '@element-plus/utils/types'
import type { MaybeRef } from '@vueuse/core'

export const useSizeProp = buildProp({
  type: String,
  values: ['', ...componentSize],
  default: '',
} as const)

export const useSize = (
  fallback?: MaybeRef<ComponentSize | '' | undefined>,
  ignore: Partial<Record<'prop' | 'form' | 'formItem' | 'global', boolean>> = {}
) => {
  const emptyRef = ref(undefined)

  const size = ignore.prop ? emptyRef : useProp<ComponentSize>('size')
  const globalConfig = ignore.global ? emptyRef : useGlobalConfig('size')
  const globalConfigLegacy = ignore.global
    ? { size: undefined }
    : useGlobalConfigLegacy()
  const form = ignore.form ? { size: undefined } : inject(elFormKey, undefined)
  const formItem = ignore.formItem
    ? { size: undefined }
    : inject(elFormItemKey, undefined)

  return computed(
    () =>
      size.value ||
      unref(fallback) ||
      formItem?.size ||
      form?.size ||
      globalConfig.value ||
      globalConfigLegacy.size ||
      ''
  )
}

export const useDisabled = (fallback?: MaybeRef<boolean | undefined>) => {
  const disabled = useProp<boolean>('disabled')
  const form = inject(elFormKey, undefined)
  return computed(
    () => disabled.value || unref(fallback) || form?.disabled || false
  )
}
