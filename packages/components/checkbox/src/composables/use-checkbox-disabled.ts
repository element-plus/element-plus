import { computed, inject } from 'vue'
import { useDisabled as useCheckboxDisabled } from '@element-plus/hooks'
import { isUndefined } from '@element-plus/utils'
import { checkboxGroupContextKey } from '@element-plus/tokens/checkbox'

import type { CheckboxModel, CheckboxStatus } from '../composables'

export const useDisabled = ({
  model,
  isChecked,
}: Partial<CheckboxModel> & Partial<CheckboxStatus>) => {
  const checkboxGroup = inject(checkboxGroupContextKey, undefined)

  const isLimitDisabled = computed(() => {
    const max = checkboxGroup?.max
    const min = checkboxGroup?.min
    return (
      (!isUndefined(max) && model!.value.length >= max && !isChecked!.value) ||
      (!isUndefined(min) && model!.value.length <= min && isChecked!.value)
    )
  })

  const isDisabled = useCheckboxDisabled(
    computed(() => checkboxGroup?.disabled || isLimitDisabled.value)
  )

  return {
    isDisabled,
    isLimitDisabled,
  }
}

export type CheckboxDisabled = ReturnType<typeof useDisabled>
