import { computed, getCurrentInstance, ref } from 'vue'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { useCheckboxGroup } from './use-group'

import type { CheckboxProps } from '../../checkbox'

export const useModel = (props: CheckboxProps) => {
  const selfModel = ref<any>(false)
  const { emit } = getCurrentInstance()!
  const { isGroup, checkboxGroup, elFormItem } = useCheckboxGroup()
  const isLimitExceeded = ref(false)
  const model = computed({
    get() {
      return isGroup.value
        ? checkboxGroup.modelValue?.value
        : props.modelValue ?? selfModel.value
    },

    set(val: unknown) {
      if (isGroup.value && Array.isArray(val)) {
        isLimitExceeded.value =
          checkboxGroup.max !== undefined &&
          val.length > checkboxGroup.max.value
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
    elFormItem,
  }
}

export type CheckboxModel = ReturnType<typeof useModel>
