<template>
  <div
    :id="inputId"
    :class="[ns.b(), ns.m(size), ns.m(variant), ns.is('disabled', disabled)]"
    role="group"
    :aria-label="
      !isLabeledByFormItem
        ? ariaLabel || t('el.inputOTP.groupLabel')
        : undefined
    "
    :aria-labelledby="isLabeledByFormItem ? formItem?.labelId : undefined"
  >
    <label
      v-for="(_, index) in length"
      :key="index"
      :class="[ns.e('input-field')]"
    >
      <input
        v-bind="$attrs"
        ref="inputRefs"
        :value="innerValue[index]"
        :class="[ns.e('input')]"
        type="text"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="index === 0 ? length : 1"
        :inputmode="type === 'number' ? 'numeric' : undefined"
        autocomplete="one-time-code"
        :aria-label="t('el.inputOTP.defaultLabel', { index: index + 1 })"
        @click="handleFocus"
        @focus="handleFocus"
        @keydown="handleKeydown($event, index)"
        @input="handleInput($event, index)"
      />
    </label>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { debugWarn, getEventCode, rAF } from '@element-plus/utils'
import {
  useFormDisabled,
  useFormItem,
  useFormItemInputId,
} from '@element-plus/components/form'
import {
  CHANGE_EVENT,
  EVENT_CODE,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'
import { inputOtpEmits } from './input-otp'

import type { InputOtpProps } from './input-otp'

defineOptions({
  name: 'ElInputOtp',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<InputOtpProps>(), {
  length: 6,
  type: 'text',
  variant: 'outlined',
  size: 'default',
  disabled: undefined,
  validateEvent: true,
})
const emit = defineEmits(inputOtpEmits)

const inputRefs = ref<HTMLInputElement[]>([])
const innerValue = ref<string[]>([])

const ns = useNamespace('input-otp')
const { t } = useLocale()
const { formItem } = useFormItem()
const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
  formItemContext: formItem,
})
const disabled = useFormDisabled()

const handleFocus = (event: FocusEvent) => {
  rAF(() => (event.target as HTMLInputElement | null)?.select())
}

const updateModelValue = () => {
  const value = innerValue.value.join('').slice(0, props.length)
  if (value !== props.modelValue) {
    emit(UPDATE_MODEL_EVENT, value)
    emit(CHANGE_EVENT, value)
  }
}

const handleKeydown = (event: KeyboardEvent, index: number) => {
  const code = getEventCode(event)
  const prevInputRef = inputRefs.value[index - 1]
  const nextInputRef = inputRefs.value[index + 1]
  let preventDefault = true

  switch (code) {
    case EVENT_CODE.backspace:
    case EVENT_CODE.delete:
      innerValue.value[index] = ''
      prevInputRef?.focus()
      emit(INPUT_EVENT, innerValue.value.slice(0, props.length))
      updateModelValue()
      break
    case EVENT_CODE.up:
    case EVENT_CODE.left:
      prevInputRef?.focus()
      break
    case EVENT_CODE.down:
    case EVENT_CODE.right:
      nextInputRef?.focus()
      break
    default:
      preventDefault = false
  }

  if (preventDefault) {
    event.preventDefault()
  }
}

const handleInput = (event: Event, index: number) => {
  const target = event.target as HTMLInputElement
  const firstEmptyIndex = innerValue.value.findIndex(
    (char, i) => !char && i <= index
  )
  const targetIndex = firstEmptyIndex === -1 ? index : firstEmptyIndex
  let value = target.value
  let forward = true

  if (props.type === 'number' && !/^\d$/.test(value)) {
    target.value = innerValue.value[targetIndex] ?? ''
    value = target.value
    forward = false
  }

  const nextInputRef =
    inputRefs.value[targetIndex + (forward ? 1 : 0)] ??
    inputRefs.value[props.length - 1]

  innerValue.value[targetIndex] = value
  target.blur()
  nextInputRef?.focus()
  updateModelValue()
  emit(INPUT_EVENT, innerValue.value.slice(0, props.length))
}

watch(
  () => props.modelValue,
  (value) => {
    let formattedValue = `${value ?? ''}`.split('')
    if (props.type === 'number') {
      formattedValue = formattedValue.filter((char) => /^\d$/.test(char))
    }
    formattedValue = [
      ...formattedValue.slice(0, props.length),
      ...Array.from({
        length: props.length - formattedValue.length,
      }).fill(''),
    ] as string[]
    innerValue.value = formattedValue

    if (props.validateEvent) {
      formItem?.validate?.('change').catch((err) => debugWarn(err))
    }
  },
  { immediate: true }
)
</script>
