import { computed, inject } from 'vue'
import { useDisabled } from '@element-plus/hooks'
import { isUndefined } from '@element-plus/utils'
import { checkboxGroupContextKey } from '@element-plus/tokens'

import type { CheckboxModel, CheckboxStatus } from '../composables'

export const useCheckboxDisabled = ({
  model,
  isChecked,
}: Pick<CheckboxModel, 'model'> & Pick<CheckboxStatus, 'isChecked'>) => {
  const checkboxGroup = inject(checkboxGroupContextKey, undefined)

  const isLimitDisabled = computed(() => {
    const max = checkboxGroup?.max?.value
    const min = checkboxGroup?.min?.value
    return (
      (!isUndefined(max) && model.value.length >= max && !isChecked.value) ||
      (!isUndefined(min) && model.value.length <= min && isChecked.value)
    )
  })

  const isDisabled = useDisabled(
    computed(() => checkboxGroup?.disabled.value || isLimitDisabled.value)
  )

  return {
    isDisabled,
    isLimitDisabled,
  }
}

export type CheckboxDisabled = ReturnType<typeof useCheckboxDisabled>
