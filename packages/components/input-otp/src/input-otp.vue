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
    <template v-for="(_, index) in length" :key="index">
      <label :class="ns.e('input-field')">
        <input
          ref="inputRefs"
          :value="innerValue[index]"
          :class="ns.e('input')"
          :type="mask ? 'password' : 'text'"
          :disabled="disabled"
          :readonly="readonly"
          :inputmode="inputmode"
          autocomplete="one-time-code"
          :aria-label="t('el.inputOTP.defaultLabel', { index: index + 1 })"
          @focus="handleFocus"
          @blur="handleBlur"
          @click="focus(index)"
          @keydown="handleKeydown($event, index)"
          @input="handleInput($event, index)"
        />
      </label>
      <slot
        v-if="($slots.separator || separators[index]) && index < length - 1"
        name="separator"
        :index="index"
      >
        <component :is="() => separators[index]" />
      </slot>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, useTemplateRef, watch } from 'vue'
import { clamp } from '@vueuse/core'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { NOOP, getEventCode, isFunction, rAF } from '@element-plus/utils'
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

const initialValue = computed(() => {
  const value = String(props.modelValue ?? '')
  return Array.from({ length: props.length }, (_, i) => value.charAt(i))
})

const separators = computed(() => {
  const { separator } = props
  const _separator = isFunction(separator) ? separator : () => separator
  return Array.from({ length: props.length - 1 }, (_, i) => _separator(i))
})

const innerValue = ref<string[]>(initialValue.value)
const isFocused = ref(false)
const inputRefs = useTemplateRef('inputRefs')

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

const handleFocus = (event: FocusEvent) => {
  if (inputRefs.value?.includes(event.relatedTarget as any)) {
    return
  }

  isFocused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  if (inputRefs.value?.includes(event.relatedTarget as any)) {
    return
  }

  isFocused.value = false
  emit('blur', event)
  if (props.validateEvent) {
    formItem?.validate?.('blur').catch(NOOP)
  }
}

const updateModelValue = (emitFinish = true) => {
  const value = innerValue.value.join('').slice(0, props.length)
  if (value !== props.modelValue) {
    emit(UPDATE_MODEL_EVENT, value)
    if (emitFinish && value.length === props.length) {
      emit('finish', value)
    }
  }
}

const handleKeydown = (event: KeyboardEvent, index: number) => {
  const code = getEventCode(event)
  let preventDefault = true

  switch (code) {
    case EVENT_CODE.backspace:
      if (props.readonly) break
      innerValue.value[index] = ''
      focus(index - 1)
      updateModelValue()
      break
    case EVENT_CODE.delete:
      if (props.readonly) break
      innerValue.value[index] = ''
      focus(index)
      updateModelValue()
      break
    case EVENT_CODE.up:
    case EVENT_CODE.left:
      focus(index - 1)
      break
    case EVENT_CODE.down:
    case EVENT_CODE.right:
      focus(index + 1)
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
  const targetIndex = getFirstIndex(index)
  let focusIndex = targetIndex + 1
  let value = target.value

  // Safari and Firefox do not trigger the paste event during autofill,
  // so the paste logic needs to be handled in the input event
  if (value.length > 1) {
    const chars = castValues(value, targetIndex)

    // Avoid innerValue inconsistency with the input box value after pasting when char has no change
    target.value = innerValue.value[index] ?? ''

    chars.forEach((char, i) => (innerValue.value[targetIndex + i] = char))
    focus(targetIndex + chars.length)
    updateModelValue()
    return
  }

  if (!props.validator(value, targetIndex)) {
    target.value = innerValue.value[index] ?? ''
    value = target.value
    focusIndex = targetIndex
  }

  innerValue.value[targetIndex] = value
  if (targetIndex !== index) {
    target.value = innerValue.value[index] ?? ''
  }
  focus(focusIndex)
  updateModelValue()
}

const castValues = (value: InputOtpProps['modelValue'], startIndex = 0) => {
  const chars = `${value ?? ''}`.split('')
  const result: string[] = []
  for (const char of chars) {
    if (result.length + startIndex >= props.length) {
      break
    }
    if (props.validator(char, result.length + startIndex)) {
      result.push(char)
    }
  }
  return result
}

const focus = (index: number = 0) => {
  const focusIndex = clamp(index, 0, props.length - 1)
  const target = inputRefs.value?.[focusIndex]

  if (document.activeElement !== target) {
    target?.focus()
  }
  rAF(() => {
    // When it is called, the focus may have already been captured by another element.
    // e.g. typing quickly and deleting.
    if (!props.readonly && document.activeElement === target) {
      ;(target as HTMLInputElement | null)?.select()
    }
  })
}

const blur = () => {
  const target = inputRefs.value?.find(
    (input) => document.activeElement === input
  )
  target?.blur()
}

watch(
  () => props.modelValue,
  () => {
    innerValue.value = initialValue.value

    if (props.validateEvent) {
      formItem?.validate?.('change').catch(NOOP)
    }
  }
)

watch(
  () => props.length,
  () => {
    innerValue.value = initialValue.value
    updateModelValue(false)
  }
)

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
  /**
   * @description Focus an OTP input field
   */
  focus,
  /**
   * @description Blur the focused OTP input field
   */
  blur,
})
</script>
