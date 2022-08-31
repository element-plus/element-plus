import { computed } from 'vue'
import { useCheckboxGroup } from '../use-checkbox-group'

import type { CheckboxProps } from '../../checkbox'
import type { useModel } from './use-model'
import type { useStatus } from './use-status'

export const useDisabled = (
  props: CheckboxProps,
  {
    model,
    isChecked,
  }: Partial<ReturnType<typeof useModel>> &
    Partial<ReturnType<typeof useStatus>>
) => {
  const { elForm, isGroup, checkboxGroup } = useCheckboxGroup()
  const isLimitDisabled = computed(() => {
    const max = checkboxGroup.max?.value!
    const min = checkboxGroup.min?.value!
    return (
      (!!(max || min) && model!.value.length >= max && !isChecked!.value) ||
      (model!.value.length <= min && isChecked!.value)
    )
  })
  const isDisabled = computed(() => {
    const disabled = props.disabled || elForm?.disabled
    return (
      (isGroup.value
        ? checkboxGroup.disabled?.value || disabled || isLimitDisabled.value
        : disabled) ?? false
    )
  })

  return {
    isDisabled,
    isLimitDisabled,
  }
}
