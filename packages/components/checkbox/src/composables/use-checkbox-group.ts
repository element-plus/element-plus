import { computed, inject } from 'vue'
import { useFormItem, useFormItemInputId } from '@element-plus/hooks'

import type {
  CheckboxGroupProps,
  ICheckboxGroupInstance,
} from '../checkbox-group'

export const useCheckboxGroup = () => {
  const { form: elForm, formItem: elFormItem } = useFormItem()
  const checkboxGroup = inject<ICheckboxGroupInstance>('CheckboxGroup', {})
  const isGroup = computed(
    () => checkboxGroup && checkboxGroup?.name === 'ElCheckboxGroup'
  )
  const elFormItemSize = computed(() => {
    return elFormItem?.size
  })

  return {
    isGroup,
    checkboxGroup,
    elForm,
    elFormItemSize,
    elFormItem,
  }
}

export const useCheckboxGroupId = (
  props: CheckboxGroupProps,
  { elFormItem }: Partial<ReturnType<typeof useCheckboxGroup>>
) => {
  const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
    formItemContext: elFormItem,
  })

  return {
    isLabeledByFormItem,
    groupId,
  }
}
