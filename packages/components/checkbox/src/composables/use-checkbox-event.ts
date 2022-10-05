import { computed, getCurrentInstance, inject, watch } from 'vue'
import { useFormItem } from '@element-plus/hooks'
import { checkboxGroupContextKey } from '@element-plus/tokens'
import { debugWarn } from '@element-plus/utils'

import type { useFormItemInputId } from '@element-plus/hooks'
import type { CheckboxProps } from '../checkbox'
import type {
  CheckboxDisabled,
  CheckboxModel,
  CheckboxStatus,
} from '../composables'

export const useCheckboxEvent = (
  props: CheckboxProps,
  {
    isLimitExceeded,
    hasOwnLabel,
    isDisabled,
    isLabeledByFormItem,
  }: Pick<CheckboxModel, 'isLimitExceeded'> &
    Pick<CheckboxStatus, 'hasOwnLabel'> &
    Pick<CheckboxDisabled, 'isDisabled'> &
    Pick<ReturnType<typeof useFormItemInputId>, 'isLabeledByFormItem'>
) => {
  const checkboxGroup = inject(checkboxGroupContextKey, undefined)
  const { formItem } = useFormItem()
  const { emit, vnode } = getCurrentInstance()!

  function getLabeledValue(value: string | number | boolean) {
    return value === props.trueLabel || value === true
      ? props.trueLabel ?? true
      : props.falseLabel ?? false
  }

  function handleChange(e: Event) {
    if (isLimitExceeded.value) return

    const target = e.target as HTMLInputElement
    emit('change', getLabeledValue(target.checked), e)
  }

  // get whether the checkbox input is wrapped with label
  function wrappedByLabel(e: Event) {
    let isWrapped = false
    // root element of checkbox component is span instead of label if the following condition is true
    if (!hasOwnLabel.value && isLabeledByFormItem.value) {
      // users still possible to wrap checkbox with label
      const eventTargets = e.composedPath()
      isWrapped = eventTargets.some(
        (target) => (target as HTMLElement)?.tagName === 'LABEL'
      )
    } else {
      isWrapped = true
    }
    return isWrapped
  }

  function attachToInput(e: Event) {
    if (!isLimitExceeded.value && !isDisabled.value && !wrappedByLabel(e)) {
      vnode.el?.querySelector('input:first-of-type').click()
    }
  }

  const validateEvent = computed(
    () => checkboxGroup?.validateEvent || props.validateEvent
  )

  watch(
    () => props.modelValue,
    () => {
      if (validateEvent.value) {
        formItem?.validate('change').catch((err) => debugWarn(err))
      }
    }
  )

  return {
    handleChange,
    attachToInput,
  }
}
