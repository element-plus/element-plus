<template>
  <div
    :id="inputId"
    :class="[ns.b(), ns.m(size), ns.m(type), ns.is('disabled', disabled)]"
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
      :class="ns.e('input-field')"
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
        :inputmode="inputmode"
        autocomplete="one-time-code"
        :aria-label="t('el.inputOTP.defaultLabel', { index: index + 1 })"
        @click="handleFocus($event, index)"
        @focus="handleFocus($event, index)"
        @blur="handleBlur($event, index)"
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
  validate: () => true,
  type: 'outlined',
  size: 'default',
  disabled: undefined,
  validateEvent: true,
})
const emit = defineEmits(inputOtpEmits)

const length = computed(() => clamp(props.length, 4, 8))
const initialValue = computed(() => {
  return Array.from(
    { length: length.value },
    (_, i) => `${props.modelValue ?? ''}`.charAt(i) ?? ''
  )
})

const inputRefs = ref<HTMLInputElement[]>([])
const innerValue = ref<string[]>(initialValue.value)

const ns = useNamespace('input-otp')
const { t } = useLocale()
const { formItem } = useFormItem()
const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
  formItemContext: formItem,
})
const disabled = useFormDisabled()

const getFirstIndex = (maxIndex: number) => {
  const index = innerValue.value.findIndex((char, i) => !char && i <= maxIndex)
  return index === -1 ? maxIndex : index
}

const handleFocus = (event: FocusEvent | PointerEvent, index: number) => {
  if (event.type === 'focus') {
    emit('focus', event, index)
  }
  rAF(() => {
    // When it is called, the focus may have already been captured by another element.
    // e.g. typing quickly and deleting.
    if (document.activeElement === event.target) {
      ;(event.target as HTMLInputElement | null)?.select()
    }
  })
}

const handleBlur = (event: FocusEvent, index: number) => {
  emit('blur', event, index)
}

const updateModelValue = () => {
  const value = innerValue.value.join('').slice(0, length.value)
  if (value !== props.modelValue) {
    emit(UPDATE_MODEL_EVENT, value)
    if (value.length === 0 || value.length === length.value) {
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
      emit(INPUT_EVENT, [...innerValue.value])
      updateModelValue()
      break
    case EVENT_CODE.delete:
      innerValue.value[index] = ''
      currentInputRef?.focus()
      emit(INPUT_EVENT, [...innerValue.value])
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

const handlePaste = (event: ClipboardEvent, index: number) => {
  const pasteData = event.clipboardData?.getData('text') ?? ''
  if (!pasteData) return

  event.preventDefault()

  const targetIndex = getFirstIndex(index)
  const chars = castValues(pasteData, targetIndex)
  const focusIndex = Math.min(targetIndex + chars.length, length.value - 1)

  chars.forEach((char, i) => (innerValue.value[targetIndex + i] = char))
  ;(event.target as HTMLInputElement | null)?.blur()
  inputRefs.value[focusIndex]?.focus()

  updateModelValue()
  emit(INPUT_EVENT, [...innerValue.value])
}

const handleInput = (event: Event, index: number) => {
  const target = event.target as HTMLInputElement
  const targetIndex = getFirstIndex(index)
  let value = target.value
  let forward = true

  if (!props.validate(value, targetIndex)) {
    target.value = innerValue.value[targetIndex] ?? ''
    value = target.value
    forward = false
  }

  const focusIndex = Math.min(targetIndex + (forward ? 1 : 0), length.value - 1)

  innerValue.value[targetIndex] = value
  target.blur()
  inputRefs.value[focusIndex]?.focus()
  updateModelValue()
  emit(INPUT_EVENT, [...innerValue.value])
}

const castValues = (value: InputOtpProps['modelValue'], startIndex = 0) => {
  const chars = `${value ?? ''}`.split('')
  const result: string[] = []
  for (const char of chars) {
    if (result.length + startIndex >= length.value) {
      break
    }
    if (props.validate(char, result.length + startIndex)) {
      result.push(char)
    }
  }
  return result
}

watch(
  () => props.modelValue,
  () => {
    innerValue.value = initialValue.value

    if (props.validateEvent) {
      formItem?.validate?.('change').catch((err) => debugWarn(err))
    }
  }
)

watch(length, () => {
  innerValue.value = initialValue.value
  updateModelValue()
})

defineExpose({
  /**
   * @description HTML input elements array
   */
  inputRefs,
})
</script>
