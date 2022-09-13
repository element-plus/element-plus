import { computed, getCurrentInstance, inject, nextTick, watch } from 'vue'
import { useFormItem } from '@element-plus/hooks'
import { checkboxGroupContextKey } from '@element-plus/tokens/checkbox'
import { debugWarn } from '@element-plus/utils'

import type { useFormItemInputId } from '@element-plus/hooks'
import type { CheckboxProps } from '../checkbox'
import type {
  CheckboxDisabled,
  CheckboxModel,
  CheckboxStatus,
} from '../composables'

export const useEvent = (
  props: CheckboxProps,
  {
    model,
    isLimitExceeded,
    hasOwnLabel,
    isDisabled,
    isLabeledByFormItem,
  }: Partial<
    CheckboxModel &
      CheckboxStatus &
      CheckboxDisabled &
      ReturnType<typeof useFormItemInputId>
  >
) => {
  const checkboxGroup = inject(checkboxGroupContextKey, undefined)
  const { formItem } = useFormItem()
  const { emit } = getCurrentInstance()!

  function getLabeledValue(value: string | number | boolean) {
    return value === props.trueLabel || value === true
      ? props.trueLabel ?? true
      : props.falseLabel ?? false
  }

  function emitChangeEvent(
    checked: string | number | boolean,
    e: InputEvent | MouseEvent
  ) {
    emit('change', getLabeledValue(checked), e)
  }

  function handleChange(e: Event) {
    if (isLimitExceeded!.value) return

    const target = e.target as HTMLInputElement
    emit('change', getLabeledValue(target.checked), e)
  }

  async function onClickRoot(e: MouseEvent) {
    if (isLimitExceeded!.value) return

    if (
      !hasOwnLabel!.value &&
      !isDisabled!.value &&
      isLabeledByFormItem!.value
    ) {
      model!.value = getLabeledValue(
        [false, props.falseLabel].includes(model!.value)
      )
      await nextTick()
      emitChangeEvent(model!.value, e)
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
    onClickRoot,
  }
}
