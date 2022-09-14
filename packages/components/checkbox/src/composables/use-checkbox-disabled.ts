import { computed, inject } from 'vue'
import { useDisabled } from '@element-plus/hooks'
import { isUndefined } from '@element-plus/utils'
import { checkboxGroupContextKey } from '@element-plus/tokens'

import type { CheckboxModel, CheckboxStatus } from '../composables'

export const useCheckboxDisabled = ({
  model,
  isChecked,
}: Partial<CheckboxModel> & Partial<CheckboxStatus>) => {
  const checkboxGroup = inject(checkboxGroupContextKey, undefined)

  const isLimitDisabled = computed(() => {
    const max = checkboxGroup?.props?.max
    const min = checkboxGroup?.props?.min
    return (
      (!isUndefined(max) && model!.value.length >= max && !isChecked!.value) ||
      (!isUndefined(min) && model!.value.length <= min && isChecked!.value)
    )
  })

  const isDisabled = useDisabled(
    computed(() => checkboxGroup?.props?.disabled || isLimitDisabled.value)
  )

  return {
    isDisabled,
    isLimitDisabled,
  }
}

export type CheckboxDisabled = ReturnType<typeof useCheckboxDisabled>
