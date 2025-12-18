import { computed, inject } from 'vue'
import { formContextKey, useFormDisabled } from '@element-plus/components/form'
import { isUndefined } from '@element-plus/utils'
import { checkboxGroupContextKey } from '../constants'

import type { CheckboxModel, CheckboxStatus } from '../composables'

export const useCheckboxDisabled = ({
  model,
  isChecked,
}: Pick<CheckboxModel, 'model'> & Pick<CheckboxStatus, 'isChecked'>) => {
  const checkboxGroup = inject(checkboxGroupContextKey, undefined)
  const formContext = inject(formContextKey, undefined)

  const isLimitDisabled = computed(() => {
    const max = checkboxGroup?.max?.value
    const min = checkboxGroup?.min?.value
    return (
      (!isUndefined(max) && model.value.length >= max && !isChecked.value) ||
      (!isUndefined(min) && model.value.length <= min && isChecked.value)
    )
  })

  const isDisabled = useFormDisabled(
    computed(() => {
      // Directly use the checkbox
      if (checkboxGroup === undefined) {
        return formContext?.disabled ?? isLimitDisabled.value
      } else {
        return checkboxGroup.disabled?.value || isLimitDisabled.value
      }
    })
  )

  return {
    isDisabled,
    isLimitDisabled,
  }
}

export type CheckboxDisabled = ReturnType<typeof useCheckboxDisabled>
