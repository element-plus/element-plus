import { computed, inject, ref, toRaw } from 'vue'
import { useSize } from '@element-plus/hooks'
import { isArray, isBoolean } from '@element-plus/utils'
import { checkboxGroupContextKey } from '@element-plus/tokens/checkbox'

import type { ComponentInternalInstance } from 'vue'
import type { CheckboxProps } from '../checkbox'
import type { CheckboxModel } from '../composables'

export const useCheckboxStatus = (
  props: CheckboxProps,
  slots: ComponentInternalInstance['slots'],
  { model }: Partial<CheckboxModel>
) => {
  const checkboxGroup = inject(checkboxGroupContextKey, undefined)
  const isFocused = ref(false)
  const isChecked = computed<boolean>(() => {
    const value = model!.value
    if (isBoolean(value)) {
      return value
    } else if (isArray(value)) {
      return value.map(toRaw).includes(props.label)
    } else if (value !== null && value !== undefined) {
      return value === props.trueLabel
    } else {
      return !!value
    }
  })

  const checkboxButtonSize = useSize(
    computed(() => checkboxGroup?.size?.value),
    {
      prop: true,
    }
  )
  const checkboxSize = useSize(computed(() => checkboxGroup?.size?.value))

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

export type CheckboxStatus = ReturnType<typeof useCheckboxStatus>
