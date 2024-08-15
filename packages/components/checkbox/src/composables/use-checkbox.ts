import { computed } from 'vue'
import { useFormItem, useFormItemInputId } from '@element-plus/components/form'
import { isArray, isPropAbsent } from '@element-plus/utils'
import { useDeprecated } from '@element-plus/hooks'
import { useCheckboxDisabled } from './use-checkbox-disabled'
import { useCheckboxEvent } from './use-checkbox-event'
import { useCheckboxModel } from './use-checkbox-model'
import { useCheckboxStatus } from './use-checkbox-status'
import type { ComponentInternalInstance } from 'vue'

import type { CheckboxProps } from '../checkbox'

export const useCheckbox = (
  props: CheckboxProps,
  slots: ComponentInternalInstance['slots']
) => {
  const { formItem: elFormItem } = useFormItem()
  const { model, isGroup, isLimitExceeded } = useCheckboxModel(props)
  const {
    isFocused,
    isChecked,
    checkboxButtonSize,
    checkboxSize,
    hasOwnLabel,
    actualValue,
  } = useCheckboxStatus(props, slots, { model })
  const { isDisabled } = useCheckboxDisabled({ model, isChecked })
  const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
    formItemContext: elFormItem,
    disableIdGeneration: hasOwnLabel,
    disableIdManagement: isGroup,
  })
  const { handleChange, onClickRoot } = useCheckboxEvent(props, {
    model,
    isLimitExceeded,
    hasOwnLabel,
    isDisabled,
    isLabeledByFormItem,
  })

  const setStoreValue = () => {
    function addToStore() {
      if (isArray(model.value) && !model.value.includes(actualValue.value)) {
        model.value.push(actualValue.value)
      } else {
        model.value = props.trueValue ?? props.trueLabel ?? true
      }
    }
    props.checked && addToStore()
  }

  setStoreValue()

  useDeprecated(
    {
      from: 'label act as value',
      replacement: 'value',
      version: '3.0.0',
      scope: 'el-checkbox',
      ref: 'https://element-plus.org/en-US/component/checkbox.html',
    },
    computed(() => isGroup.value && isPropAbsent(props.value))
  )

  useDeprecated(
    {
      from: 'true-label',
      replacement: 'true-value',
      version: '3.0.0',
      scope: 'el-checkbox',
      ref: 'https://element-plus.org/en-US/component/checkbox.html',
    },
    computed(() => !!props.trueLabel)
  )

  useDeprecated(
    {
      from: 'false-label',
      replacement: 'false-value',
      version: '3.0.0',
      scope: 'el-checkbox',
      ref: 'https://element-plus.org/en-US/component/checkbox.html',
    },
    computed(() => !!props.falseLabel)
  )

  return {
    inputId,
    isLabeledByFormItem,
    isChecked,
    isDisabled,
    isFocused,
    checkboxButtonSize,
    checkboxSize,
    hasOwnLabel,
    model,
    actualValue,
    handleChange,
    onClickRoot,
  }
}
