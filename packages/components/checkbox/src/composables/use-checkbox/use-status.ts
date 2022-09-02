import { computed, inject, ref, toRaw } from 'vue'
import { toTypeString } from '@vue/shared'
import { useSize } from '@element-plus/hooks'
import { checkboxGroupContextKey } from '@element-plus/tokens/checkbox'

import type { ComponentInternalInstance } from 'vue'
import type { CheckboxProps } from '../../checkbox'
import type { CheckboxModel } from './use-model'

export const useStatus = (
  props: CheckboxProps,
  slots: ComponentInternalInstance['slots'],
  { model }: Partial<CheckboxModel>
) => {
  const checkboxGroup = inject(checkboxGroupContextKey, undefined)
  const isFocused = ref(false)
  const isChecked = computed<boolean>(() => {
    const value = model!.value
    if (toTypeString(value) === '[object Boolean]') {
      return value
    } else if (Array.isArray(value)) {
      return value.map(toRaw).includes(props.label)
    } else if (value !== null && value !== undefined) {
      return value === props.trueLabel
    } else {
      return !!value
    }
  })

  const checkboxButtonSize = useSize(checkboxGroup?.size, {
    prop: true,
  })
  const checkboxSize = useSize(checkboxGroup?.size)

  const hasOwnLabel = computed<boolean>(() => {
    return !!(slots.default || props.label)
  })

  return {
    checkboxButtonSize,
    isChecked,
    isFocused,
    checkboxSize,
    hasOwnLabel,
  }
}

export type CheckboxStatus = ReturnType<typeof useStatus>
