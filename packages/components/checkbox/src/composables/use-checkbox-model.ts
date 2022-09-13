import { computed, getCurrentInstance, inject, ref } from 'vue'
import { isUndefined } from '@element-plus/utils'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { checkboxGroupContextKey } from '@element-plus/tokens/checkbox'

import type { CheckboxProps } from '../checkbox'

export const useCheckboxModel = (props: CheckboxProps) => {
  const selfModel = ref<any>(false)
  const { emit } = getCurrentInstance()!
  const checkboxGroup = inject(checkboxGroupContextKey, undefined)
  const isGroup = computed(() => isUndefined(checkboxGroup) === false)
  const isLimitExceeded = ref(false)
  const model = computed({
    get() {
      return isGroup.value
        ? checkboxGroup?.modelValue?.value
        : props.modelValue ?? selfModel.value
    },

    set(val: unknown) {
      if (isGroup.value && Array.isArray(val)) {
        isLimitExceeded.value =
          checkboxGroup?.max !== undefined && val.length > checkboxGroup.max
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
