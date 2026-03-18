import { computed, getCurrentInstance, inject, ref, watch } from 'vue'
import { isArray, isPropAbsent, isUndefined } from '@element-plus/utils'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { checkboxGroupContextKey } from '../constants'

import type { CheckboxProps } from '../checkbox'

export const useCheckboxModel = (props: CheckboxProps) => {
  const selfModel = ref<unknown>(false)
  const { emit } = getCurrentInstance()!
  const checkboxGroup = inject(checkboxGroupContextKey, undefined)
  const isGroup = computed(() => isUndefined(checkboxGroup) === false)
  const isLimitExceeded = ref(false)
  const model = computed({
    get() {
      return isGroup.value
        ? checkboxGroup?.modelValue?.value
        : (props.modelValue ?? selfModel.value)
    },

    set(val: unknown) {
      if (isGroup.value && isArray(val)) {
        isLimitExceeded.value =
          checkboxGroup?.max?.value !== undefined &&
          val.length > checkboxGroup?.max.value &&
          val.length > model.value.length
        isLimitExceeded.value === false && checkboxGroup?.changeEvent?.(val)
      } else {
        emit(UPDATE_MODEL_EVENT, val)
        selfModel.value = val
      }
    },
  })

  watch(
    () => props.modelValue,
    (val) => {
      const hasCustomValue =
        !isPropAbsent(props.trueValue) ||
        !isPropAbsent(props.falseValue) ||
        !isPropAbsent(props.trueLabel) ||
        !isPropAbsent(props.falseLabel)

      if (
        hasCustomValue &&
        !isGroup.value &&
        (val === null || val === undefined)
      ) {
        const falseVal = !isPropAbsent(props.falseValue)
          ? props.falseValue
          : !isPropAbsent(props.falseLabel)
            ? props.falseLabel
            : false
        emit(UPDATE_MODEL_EVENT, falseVal)
      }
    }
  )

  return {
    model,
    isGroup,
    isLimitExceeded,
  }
}

export type CheckboxModel = ReturnType<typeof useCheckboxModel>
