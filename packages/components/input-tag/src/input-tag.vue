<template>
  <div
    ref="wrapperRef"
    :class="containerKls"
    :style="containerStyle"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div v-if="slots.prefix" :class="ns.e('prefix')">
      <slot name="prefix" />
    </div>
    <div :class="innerKls">
      <el-tag
        v-for="(item, index) in modelValue"
        :key="index"
        :size="tagSize"
        :closable="closable"
        :type="tagType"
        :effect="tagEffect"
        disable-transitions
        @close="handleTagRemove(index)"
      >
        <slot name="tag" :value="item" :index="index">
          {{ item }}
        </slot>
      </el-tag>
      <div :class="ns.e('input-wrapper')">
        <input
          :id="inputId"
          ref="inputRef"
          v-model="inputValue"
          v-bind="attrs"
          type="text"
          :minlength="minlength"
          :maxlength="maxlength"
          :disabled="disabled"
          :readonly="readonly"
          :autocomplete="autocomplete"
          :tabindex="tabindex"
          :placeholder="placeholder"
          :autofocus="autofocus"
          :class="ns.e('input')"
          :style="inputStyle"
          @compositionstart="handleCompositionStart"
          @compositionupdate="handleCompositionUpdate"
          @compositionend="handleCompositionEnd"
          @input="handleInput"
          @keydown="handleKeydown"
        />
        <span
          ref="calculatorRef"
          aria-hidden="true"
          :class="ns.e('input-calculator')"
          v-text="inputValue"
        />
      </div>
    </div>
    <div v-if="showSuffix" :class="ns.e('suffix')">
      <slot name="suffix" />
      <el-icon
        v-if="showClear"
        :class="[ns.e('icon'), ns.e('clear')]"
        @mousedown.prevent="NOOP"
        @click="handleClear"
      >
        <circle-close />
      </el-icon>
      <el-icon
        v-if="validateState && validateIcon && needStatusIcon"
        :class="[
          nsInput.e('icon'),
          nsInput.e('validateIcon'),
          nsInput.is('loading', validateState === 'validating'),
        ]"
      >
        <component :is="validateIcon" />
      </el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  ref,
  shallowRef,
  useAttrs as useRawAttrs,
  useSlots,
  watch,
} from 'vue'
import { useResizeObserver } from '@vueuse/core'
import { CircleClose } from '@element-plus/icons-vue'
import {
  useAttrs,
  useComposition,
  useFocusController,
  useNamespace,
} from '@element-plus/hooks'
import {
  CHANGE_EVENT,
  EVENT_CODE,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'
import ElIcon from '@element-plus/components/icon'
import ElTag from '@element-plus/components/tag'
import {
  useFormDisabled,
  useFormItem,
  useFormItemInputId,
  useFormSize,
} from '@element-plus/components/form'
import {
  NOOP,
  ValidateComponentsMap,
  debugWarn,
  isUndefined,
} from '@element-plus/utils'
import { inputTagEmits, inputTagProps } from './input-tag'
import type { StyleValue } from 'vue'

defineOptions({
  name: 'ElInputTag',
  inheritAttrs: false,
})

const props = defineProps(inputTagProps)
const emit = defineEmits(inputTagEmits)

const MINIMUM_INPUT_WIDTH = 11

const { form: elForm, formItem: elFormItem } = useFormItem()
const { inputId } = useFormItemInputId(props, {
  formItemContext: elFormItem,
})
const disabled = useFormDisabled()
const size = useFormSize()
const ns = useNamespace('input-tag')
const nsInput = useNamespace('input')
const rawAttrs = useRawAttrs()
const attrs = useAttrs()
const slots = useSlots()

const inputRef = shallowRef<HTMLInputElement>()
const calculatorRef = ref<HTMLElement>()
const inputValue = ref<string>()
const hovering = ref(false)
const calculatorWidth = ref(0)

const containerKls = computed(() => [
  ns.b(),
  ns.is('focused', isFocused.value),
  ns.is('hovering', hovering.value),
  ns.m(size.value),
  ns.e('wrapper'),
  rawAttrs.class,
])
const containerStyle = computed<StyleValue>(() => [
  rawAttrs.style as StyleValue,
])
const innerKls = computed(() => [
  ns.e('inner'),
  ns.is('left-space', !props.modelValue?.length && !slots.prefix),
  ns.is('right-space', !props.modelValue?.length && !showSuffix.value),
])
const inputStyle = computed(() => ({
  minWidth: `${Math.max(calculatorWidth.value, MINIMUM_INPUT_WIDTH)}px`,
}))

const tagSize = computed(() => {
  return ['small'].includes(size.value) ? 'small' : 'default'
})
const placeholder = computed(() => {
  return props.modelValue?.length ? undefined : props.placeholder
})
const showClear = computed(() => {
  return (
    props.clearable &&
    !disabled.value &&
    !props.readonly &&
    (props.modelValue?.length || inputValue.value) &&
    (isFocused.value || hovering.value)
  )
})
const showSuffix = computed(() => {
  return (
    slots.suffix ||
    showClear.value ||
    (validateState.value && validateIcon.value && needStatusIcon.value)
  )
})
const needStatusIcon = computed(() => elForm?.statusIcon ?? false)
const validateState = computed(() => elFormItem?.validateState || '')
const validateIcon = computed(() => {
  return validateState.value && ValidateComponentsMap[validateState.value]
})
const closable = computed(() => !(props.readonly || disabled.value))
const inputLimit = computed(() => {
  return isUndefined(props.max)
    ? false
    : (props.modelValue?.length ?? 0) >= props.max
})

const handleInput = (event: Event) => {
  if (inputLimit.value) {
    inputValue.value = undefined
    return
  }

  if (isComposing.value) return
  emit(INPUT_EVENT, (event.target as HTMLInputElement).value)
}

const handleKeydown = (event: KeyboardEvent) => {
  switch (event.code) {
    case props.trigger:
      event.preventDefault()
      event.stopPropagation()
      handleTagAdd()
      break
    case EVENT_CODE.numpadEnter:
      if (props.trigger === EVENT_CODE.enter) {
        event.preventDefault()
        event.stopPropagation()
        handleTagAdd()
      }
      break
    case EVENT_CODE.backspace:
      if (!inputValue.value && props.modelValue?.length) {
        event.preventDefault()
        event.stopPropagation()
        handleTagRemove(props.modelValue.length - 1)
      }
      break
  }
}

const handleTagAdd = () => {
  const value = inputValue.value?.trim()
  if (!value || inputLimit.value) return
  const list = [...(props.modelValue ?? []), value]

  emit(UPDATE_MODEL_EVENT, list)
  emit(CHANGE_EVENT, list)
  emit('tagAdd', value)
  inputValue.value = undefined
}

const handleTagRemove = (index: number) => {
  const value = (props.modelValue ?? []).slice()
  const [item] = value.splice(index, 1)

  emit(UPDATE_MODEL_EVENT, value)
  emit(CHANGE_EVENT, value)
  emit('tagRemove', item)
}

const handleClear = () => {
  inputValue.value = undefined
  emit(UPDATE_MODEL_EVENT, undefined)
  emit(CHANGE_EVENT, undefined)
  emit('clear')
}

const handleMouseEnter = () => {
  hovering.value = true
}

const handleMouseLeave = () => {
  hovering.value = false
}

const focus = () => {
  inputRef.value?.focus()
}

const blur = () => {
  inputRef.value?.blur()
}

const resetCalculatorWidth = () => {
  calculatorWidth.value =
    calculatorRef.value?.getBoundingClientRect().width ?? 0
}

const { wrapperRef, isFocused } = useFocusController(inputRef, {
  beforeFocus() {
    return disabled.value
  },
  afterBlur() {
    handleTagAdd()
    if (props.validateEvent) {
      elFormItem?.validate?.('blur').catch((err) => debugWarn(err))
    }
  },
})

const {
  isComposing,
  handleCompositionStart,
  handleCompositionUpdate,
  handleCompositionEnd,
} = useComposition({ afterComposition: handleInput })

useResizeObserver(calculatorRef, resetCalculatorWidth)

watch(
  () => props.modelValue,
  () => {
    if (props.validateEvent) {
      elFormItem?.validate?.(CHANGE_EVENT).catch((err) => debugWarn(err))
    }
  }
)

defineExpose({
  focus,
  blur,
})
</script>
