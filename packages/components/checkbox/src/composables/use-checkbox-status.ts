import { computed, inject, ref, toRaw } from 'vue'
import { isEqual } from 'lodash-unified'
import { useFormSize } from '@element-plus/components/form'
import { isArray, isBoolean, isObject, isPropAbsent } from '@element-plus/utils'
import { checkboxGroupContextKey } from '../constants'

import type { ComponentInternalInstance } from 'vue'
import type { CheckboxProps } from '../checkbox'
import type { CheckboxModel } from '../composables'

export const useCheckboxStatus = (
  props: CheckboxProps,
  slots: ComponentInternalInstance['slots'],
  { model }: Pick<CheckboxModel, 'model'>
) => {
  const checkboxGroup = inject(checkboxGroupContextKey, undefined)
  const isFocused = ref(false)
  const actualValue = computed(() => {
    // In version 2.x, if there's no props.value, props.label will act as props.value
    // In version 3.x, remove this computed value, use props.value instead.
    if (!isPropAbsent(props.value)) {
      return props.value
    }
    return props.label
  })
  const isChecked = computed<boolean>(() => {
    const value = model.value
    const hasCustomValue =
      !isPropAbsent(props.trueValue) ||
      !isPropAbsent(props.falseValue) ||
      !isPropAbsent(props.trueLabel) ||
      !isPropAbsent(props.falseLabel)

    if (isArray(value)) {
      if (isObject(actualValue.value)) {
        return value.map(toRaw).some((o) => isEqual(o, actualValue.value))
      } else {
        return value.map(toRaw).includes(actualValue.value)
      }
    } else if (hasCustomValue) {
      const hasCustomTrueValue =
        !isPropAbsent(props.trueValue) || !isPropAbsent(props.trueLabel)
      if (!hasCustomTrueValue) {
        return value === true
      }
      return value === props.trueValue || value === props.trueLabel
    } else if (isBoolean(value)) {
      return value
    } else {
      return !!value
    }
  })

  const checkboxButtonSize = useFormSize(
    computed(() => checkboxGroup?.size?.value),
    {
      prop: true,
    }
  )
  const checkboxSize = useFormSize(computed(() => checkboxGroup?.size?.value))

  const hasOwnLabel = computed<boolean>(() => {
    return !!slots.default || !isPropAbsent(actualValue.value)
  })

  return {
    checkboxButtonSize,
    isChecked,
    isFocused,
    checkboxSize,
    hasOwnLabel,
    actualValue,
  }
}

export type CheckboxStatus = ReturnType<typeof useCheckboxStatus>
