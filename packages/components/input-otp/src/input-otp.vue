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
        @click="handleFocus"
        @focus="handleFocus"
        @blur="handleBlur"
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
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'
import { inputOtpEmits } from './input-otp'

import type { InputOtpProps } from './input-otp'

defineOptions({
  name: 'ElInputOtp',
})

const props = withDefaults(defineProps<InputOtpProps>(), {
  length: 6,
  validator: () => true,
  type: 'outlined',
  size: 'default',
  disabled: undefined,
  validateEvent: true,
})
const emit = defineEmits(inputOtpEmits)

const length = computed(() => clamp(props.length, 4, 8))
const initialValue = computed(() => {
  const value = String(props.modelValue ?? '')
  return Array.from({ length: length.value }, (_, i) => value.charAt(i))
})

const inputRefs = ref<HTMLInputElement[]>([])
const innerValue = ref<string[]>(initialValue.value)
const isFocused = ref(false)

const ns = useNamespace('input-otp')
const { t } = useLocale()
const { formItem } = useFormItem()
const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
  formItemContext: formItem,
})
const disabled = useFormDisabled()
let modelValueOnFocus = props.modelValue

const getFirstIndex = (maxIndex: number) => {
  const index = innerValue.value.findIndex((char, i) => !char && i <= maxIndex)
  return index === -1 ? maxIndex : index
}

const handleFocus = (event: FocusEvent | PointerEvent) => {
  const { target, type, relatedTarget } = event
  if (type === 'focus' && !inputRefs.value.includes(relatedTarget as any)) {
    isFocused.value = true
    emit('focus', event)
  }
  rAF(() => {
    // When it is called, the focus may have already been captured by another element.
    // e.g. typing quickly and deleting.
    if (document.activeElement === target) {
      ;(target as HTMLInputElement | null)?.select()
    }
  })
}

const handleBlur = (event: FocusEvent) => {
  const { relatedTarget } = event
  if (!inputRefs.value.includes(relatedTarget as any)) {
    isFocused.value = false
    emit('blur', event)
    if (props.validateEvent) {
      formItem?.validate?.('blur').catch((err) => debugWarn(err))
    }
  }
}

const updateModelValue = (emitFinish = true) => {
  const value = innerValue.value.join('').slice(0, length.value)
  if (value !== props.modelValue) {
    emit(UPDATE_MODEL_EVENT, value)
    if (emitFinish && value.length === length.value) {
      emit('finish', value)
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
      if (props.readonly) break
      innerValue.value[index] = ''
      prevInputRef?.focus()
      updateModelValue()
      break
    case EVENT_CODE.delete:
      if (props.readonly) break
      innerValue.value[index] = ''
      currentInputRef?.focus()
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
  if (!pasteData || props.readonly) return

  event.preventDefault()

  const targetIndex = getFirstIndex(index)
  const chars = castValues(pasteData, targetIndex)
  const focusIndex = Math.min(targetIndex + chars.length, length.value - 1)

  chars.forEach((char, i) => (innerValue.value[targetIndex + i] = char))
  inputRefs.value[focusIndex]?.focus()
  updateModelValue()
}

const handleInput = (event: Event, index: number) => {
  const target = event.target as HTMLInputElement
  const targetIndex = getFirstIndex(index)
  let value = target.value
  let forward = true

  if (!props.validator(value, targetIndex)) {
    target.value = innerValue.value[index] ?? ''
    value = target.value
    forward = false
  }

  const focusIndex = Math.min(targetIndex + (forward ? 1 : 0), length.value - 1)

  innerValue.value[targetIndex] = value
  inputRefs.value[focusIndex]?.focus()
  inputRefs.value[focusIndex]?.select()
  if (targetIndex !== index) {
    target.value = innerValue.value[index] ?? ''
  }
  updateModelValue()
}

const castValues = (value: InputOtpProps['modelValue'], startIndex = 0) => {
  const chars = `${value ?? ''}`.split('')
  const result: string[] = []
  for (const char of chars) {
    if (result.length + startIndex >= length.value) {
      break
    }
    if (props.validator(char, result.length + startIndex)) {
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
  updateModelValue(false)
})

watch(isFocused, (value) => {
  if (value) {
    modelValueOnFocus = props.modelValue
    return
  }
  if (modelValueOnFocus !== props.modelValue) {
    emit(CHANGE_EVENT, props.modelValue as string)
  }
})

defineExpose({
  /**
   * @description HTML input elements array
   */
  inputRefs,
})
</script>
