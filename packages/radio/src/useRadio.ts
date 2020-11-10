import { ref, computed, inject, WritableComputedRef } from 'vue'
import { elFormKey, elFormItemKey } from '@element-plus/form'
import { useGlobalConfig } from '@element-plus/utils/util'
import radioGroupKey from './token'

import type { ComputedRef } from 'vue'
import type { ElFormContext, ElFormItemContext } from '@element-plus/form'
import type { RadioGroupContext } from './token'

export const useRadio = () => {

  const ELEMENT = useGlobalConfig()
  const elForm = inject(elFormKey, {} as ElFormContext)
  const elFormItem = inject(elFormItemKey, {} as ElFormItemContext)
  const radioGroup = inject(radioGroupKey, {} as RadioGroupContext)
  const focus = ref(false)
  const isGroup = computed(() => radioGroup?.name === 'ElRadioGroup')
  const elFormItemSize = computed(() => elFormItem.size || ELEMENT.size)

  return {
    isGroup,
    focus,
    radioGroup,
    elForm,
    ELEMENT,
    elFormItemSize,
  }
}

interface IUseRadioAttrsProps {
  disabled?: boolean
  label: string | number | boolean
}

interface IUseRadioAttrsState {
  isGroup: ComputedRef<boolean>
  radioGroup: RadioGroupContext
  elForm: ElFormContext
  model: WritableComputedRef<string | number | boolean>
}

export const useRadioAttrs = (props: IUseRadioAttrsProps, {
  isGroup,
  radioGroup,
  elForm,
  model,
}: IUseRadioAttrsState) => {
  const isDisabled = computed(() => {
    return isGroup.value
      ? radioGroup.disabled || props.disabled || elForm.disabled
      : props.disabled || elForm.disabled
  })

  const tabIndex = computed(() => {
    return (isDisabled.value || (isGroup.value && model.value !== props.label)) ? -1 : 0
  })

  return {
    isDisabled,
    tabIndex,
  }

}
