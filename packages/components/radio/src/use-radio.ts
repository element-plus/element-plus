import { computed, inject, ref } from 'vue'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { useFormDisabled, useFormSize } from '@element-plus/components/form'
import { useDeprecated } from '@element-plus/hooks'
import { isPropAbsent } from '@element-plus/utils'
import { radioGroupKey } from './constants'

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
  const actualValue = computed(() => {
    // In version 2.x, if there's no props.value, props.label will act as props.value
    // In version 3.x, remove this computed value, use props.value instead.
    if (!isPropAbsent(props.value)) {
      return props.value
    }
    return props.label
  })
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
      radioRef.value!.checked = props.modelValue === actualValue.value
    },
  })

  const size = useFormSize(computed(() => radioGroup?.size))
  const disabled = useFormDisabled(computed(() => radioGroup?.disabled))
  const focus = ref(false)
  const tabIndex = computed(() => {
    return disabled.value ||
      (isGroup.value && modelValue.value !== actualValue.value)
      ? -1
      : 0
  })

  useDeprecated(
    {
      from: 'label act as value',
      replacement: 'value',
      version: '3.0.0',
      scope: 'el-radio',
      ref: 'https://element-plus.org/en-US/component/radio.html',
    },
    computed(() => isGroup.value && isPropAbsent(props.value))
  )

  return {
    radioRef,
    isGroup,
    radioGroup,
    focus,
    size,
    disabled,
    tabIndex,
    modelValue,
    actualValue,
  }
}
