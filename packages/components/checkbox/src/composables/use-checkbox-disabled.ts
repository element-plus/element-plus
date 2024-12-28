import { computed, inject } from 'vue'
import { useFormDisabled } from '@element-plus/components/form'
import { isArray, isUndefined } from '@element-plus/utils'
import { checkboxGroupContextKey } from '../constants'

import type { CheckboxModel, CheckboxStatus } from '../composables'

export const useCheckboxDisabled = ({
  model,
  isChecked,
}: Pick<CheckboxModel, 'model'> & Pick<CheckboxStatus, 'isChecked'>) => {
  const checkboxGroup = inject(checkboxGroupContextKey, undefined)

  const isLimitDisabled = computed(() => {
    const max = checkboxGroup?.max?.value
    const min = checkboxGroup?.min?.value
    const modelLength = isArray(model.value) ? model.value.length : 0
    return (
      (!isUndefined(max) && modelLength >= max && !isChecked.value) ||
      (!isUndefined(min) && modelLength <= min && isChecked.value)
    )
  })

  const isDisabled = useFormDisabled(
    computed(() => checkboxGroup?.disabled.value || isLimitDisabled.value)
  )

  return {
    isDisabled,
    isLimitDisabled,
  }
}

export type CheckboxDisabled = ReturnType<typeof useCheckboxDisabled>
