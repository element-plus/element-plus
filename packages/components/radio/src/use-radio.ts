import { computed, inject, ref } from 'vue'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { useFormDisabled, useFormSize } from '@element-plus/components/form'
import { radioGroupKey } from './constants'

import { getValueOrLabel } from './utils'
import type { RadioButtonProps } from './radio-button'
import type { SetupContext } from 'vue'
import type { RadioEmits, RadioProps } from './radio'

export const useRadio = (
  props: RadioProps | RadioButtonProps,
  emit?: SetupContext<RadioEmits>['emit']
) => {
  const radioRef = ref<HTMLInputElement>()
  const radioGroup = inject(radioGroupKey, undefined)
  const isGroup = computed(() => !!radioGroup)
  const modelValue = computed<RadioProps['modelValue']>({
    get() {
      return isGroup.value ? radioGroup!.modelValue : props.modelValue!
    },
    set(val) {
      if (isGroup.value) {
        radioGroup!.changeEvent(val)
      } else {
        emit && emit(UPDATE_MODEL_EVENT, val)
      }
      radioRef.value!.checked = props.modelValue === getValueOrLabel(props)
    },
  })

  const size = useFormSize(computed(() => radioGroup?.size))
  const disabled = useFormDisabled(computed(() => radioGroup?.disabled))
  const focus = ref(false)
  const tabIndex = computed(() => {
    return disabled.value ||
      (isGroup.value && modelValue.value !== getValueOrLabel(props))
      ? -1
      : 0
  })

  return {
    radioRef,
    isGroup,
    radioGroup,
    focus,
    size,
    disabled,
    tabIndex,
    modelValue,
  }
}
