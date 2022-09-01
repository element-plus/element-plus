import { computed } from 'vue'
import { useDisabled as useCheckboxDisabled } from '@element-plus/hooks'
import { isUndefined } from '@element-plus/utils'
import { useCheckboxGroup } from './use-group'

import type { CheckboxModel } from './use-model'
import type { CheckboxStatus } from './use-status'

export const useDisabled = ({
  model,
  isChecked,
}: Partial<CheckboxModel> & Partial<CheckboxStatus>) => {
  const { checkboxGroup } = useCheckboxGroup()

  const isLimitDisabled = computed(() => {
    const max = checkboxGroup.max?.value!
    const min = checkboxGroup.min?.value!
    return (
      (!isUndefined(max) && model!.value.length >= max && !isChecked!.value) ||
      (!isUndefined(min) && model!.value.length <= min && isChecked!.value)
    )
  })

  const isDisabled = useCheckboxDisabled(
    computed(() => checkboxGroup?.disabled?.value || isLimitDisabled.value)
  )

  return {
    isDisabled,
    isLimitDisabled,
  }
}

export type CheckboxDisabled = ReturnType<typeof useDisabled>
