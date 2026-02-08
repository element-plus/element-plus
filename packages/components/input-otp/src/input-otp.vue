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
        :maxlength="1"
        :inputmode="type === 'number' ? 'numeric' : undefined"
        autocomplete="one-time-code"
        :aria-label="t('el.inputOTP.defaultLabel', { index: index + 1 })"
        @click="handleFocus"
        @focus="handleFocus"
        @paste="handlePaste($event, index)"
        @keydown="handleKeydown($event, index)"
        @input="handleInput($event, index)"
      />
    </label>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { clamp } from '@vueuse/core'
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

const length = computed(() => clamp(props.length, 4, 8))

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
  const value = innerValue.value.join('').slice(0, length.value)
  if (value !== props.modelValue) {
    emit(UPDATE_MODEL_EVENT, value)
    if (value.length === length.value) {
      emit(CHANGE_EVENT, value)
    }
  }
}

const handleKeydown = (event: KeyboardEvent, index: number) => {
  const code = getEventCode(event)
  const prevInputRef = inputRefs.value[index - 1]
  const nextInputRef = inputRefs.value[index + 1]
  const currentInputRef = inputRefs.value[index]
  let preventDefault = true

  switch (code) {
    case EVENT_CODE.backspace:
      innerValue.value[index] = ''
      prevInputRef?.focus()
      emit(INPUT_EVENT, innerValue.value.slice(0, length.value))
      updateModelValue()
      break
    case EVENT_CODE.delete:
      innerValue.value[Math.min(index + 1, length.value - 1)] = ''
      currentInputRef?.focus()
      emit(INPUT_EVENT, innerValue.value.slice(0, length.value))
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

const getFirstIndex = (maxIndex: number) => {
  const index = innerValue.value.findIndex((char, i) => !char && i <= maxIndex)
  return index === -1 ? maxIndex : index
}

const handlePaste = (event: ClipboardEvent, index: number) => {
  const pasteData = event.clipboardData?.getData('text') ?? ''
  if (!pasteData) return

  const targetIndex = getFirstIndex(index)
  let chars = pasteData.split('')
  if (props.type === 'number') {
    chars = chars.filter((ch) => /^\d$/.test(ch))
  }
  chars = chars.slice(0, length.value - targetIndex)
  chars.forEach((char, i) => (innerValue.value[targetIndex + i] = char))

  const nextInputRef =
    inputRefs.value[targetIndex + chars.length] ??
    inputRefs.value[length.value - 1]

  ;(event.target as HTMLInputElement | null)?.blur()
  nextInputRef?.focus()
  updateModelValue()
  emit(INPUT_EVENT, innerValue.value.slice(0, length.value))
  event.preventDefault()
}

const handleInput = (event: Event, index: number) => {
  const target = event.target as HTMLInputElement
  const targetIndex = getFirstIndex(index)
  let value = target.value
  let forward = true

  if (props.type === 'number' && !/^\d$/.test(value)) {
    target.value = innerValue.value[targetIndex] ?? ''
    value = target.value
    forward = false
  }

  const nextInputRef =
    inputRefs.value[targetIndex + (forward ? 1 : 0)] ??
    inputRefs.value[length.value - 1]

  innerValue.value[targetIndex] = value
  target.blur()
  nextInputRef?.focus()
  updateModelValue()
  emit(INPUT_EVENT, innerValue.value.slice(0, length.value))
}

watch(
  () => props.modelValue,
  (value) => {
    let formattedValue = `${value ?? ''}`.split('')
    if (props.type === 'number') {
      formattedValue = formattedValue.filter((char) => /^\d$/.test(char))
    }
    formattedValue = [
      ...formattedValue.slice(0, length.value),
      ...Array.from({
        length: length.value - formattedValue.length,
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
