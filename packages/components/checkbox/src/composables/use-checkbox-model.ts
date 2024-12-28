import { computed, getCurrentInstance, inject, ref } from 'vue'
import { isArray, isUndefined } from '@element-plus/utils'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { checkboxGroupContextKey } from '../constants'

import type { CheckboxProps, CheckboxValueType } from '../checkbox'
import type { CheckboxGroupValueType } from '../checkbox-group'
export const useCheckboxModel = (props: CheckboxProps) => {
  const selfModel = ref<unknown>(false)
  const { emit } = getCurrentInstance()!
  const checkboxGroup = inject(checkboxGroupContextKey, undefined)
  const isGroup = computed(() => isUndefined(checkboxGroup) === false)
  const isLimitExceeded = ref(false)
  const model = computed<CheckboxValueType | CheckboxGroupValueType>({
    get() {
      return isGroup.value
        ? checkboxGroup?.modelValue?.value
        : props.modelValue ?? selfModel.value
    },

    set(val: unknown) {
      if (isGroup.value && isArray(val)) {
        isLimitExceeded.value =
          checkboxGroup?.max?.value !== undefined &&
          val.length > checkboxGroup?.max.value &&
          val.length > (isArray(model.value) ? model.value.length : 0)

        isLimitExceeded.value === false && checkboxGroup?.changeEvent?.(val)
      } else {
        emit(UPDATE_MODEL_EVENT, val)
        selfModel.value = val
      }
    },
  })

  return {
    model,
    isGroup,
    isLimitExceeded,
  }
}

export type CheckboxModel = ReturnType<typeof useCheckboxModel>
