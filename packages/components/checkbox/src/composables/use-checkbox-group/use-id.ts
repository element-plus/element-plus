import { useFormItem, useFormItemInputId } from '@element-plus/hooks'

import type { CheckboxGroupProps } from '../../checkbox-group'

export const useCheckboxGroupId = (props: CheckboxGroupProps) => {
  const { formItem } = useFormItem()
  const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
    formItemContext: formItem,
  })

  return {
    isLabeledByFormItem,
    groupId,
  }
}
