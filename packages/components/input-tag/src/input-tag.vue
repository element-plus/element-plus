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
        :draggable="closable && draggable"
        disable-transitions
        @close="handleRemoveTag(index)"
        @dragstart="(event: DragEvent) => handleDragStart(event, index)"
        @dragover="(event: DragEvent) => handleDragOver(event, index)"
        @dragend="handleDragEnd"
        @drop.stop
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
          :ariaLabel="ariaLabel"
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
      <div
        v-show="showDropIndicator"
        ref="dropIndicatorRef"
        :class="ns.e('drop-indicator')"
      />
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
import { computed, useSlots } from 'vue'
import { CircleClose } from '@element-plus/icons-vue'
import { useAttrs, useCalcInputWidth } from '@element-plus/hooks'
import { NOOP, ValidateComponentsMap } from '@element-plus/utils'
import ElIcon from '@element-plus/components/icon'
import ElTag from '@element-plus/components/tag'
import { useFormItem, useFormItemInputId } from '@element-plus/components/form'
import { inputTagEmits, inputTagProps } from './input-tag'
import {
  useDragTag,
  useHovering,
  useInputTag,
  useInputTagDom,
} from './composables'

defineOptions({
  name: 'ElInputTag',
  inheritAttrs: false,
})

const props = defineProps(inputTagProps)
const emit = defineEmits(inputTagEmits)

const attrs = useAttrs()
const slots = useSlots()
const { form, formItem } = useFormItem()
const { inputId } = useFormItemInputId(props, { formItemContext: formItem })

const needStatusIcon = computed(() => form?.statusIcon ?? false)
const validateState = computed(() => formItem?.validateState || '')
const validateIcon = computed(() => {
  return validateState.value && ValidateComponentsMap[validateState.value]
})

const {
  inputRef,
  wrapperRef,
  isFocused,
  inputValue,
  size,
  tagSize,
  placeholder,
  closable,
  disabled,
  handleDragged,
  handleInput,
  handleKeydown,
  handleRemoveTag,
  handleClear,
  handleCompositionStart,
  handleCompositionUpdate,
  handleCompositionEnd,
  focus,
  blur,
} = useInputTag({ props, emit, formItem })
const { hovering, handleMouseEnter, handleMouseLeave } = useHovering()
const { calculatorRef, inputStyle } = useCalcInputWidth()
const {
  dropIndicatorRef,
  showDropIndicator,
  handleDragStart,
  handleDragOver,
  handleDragEnd,
} = useDragTag({ wrapperRef, handleDragged, afterDragged: focus })
const {
  ns,
  nsInput,
  containerKls,
  containerStyle,
  innerKls,
  showClear,
  showSuffix,
} = useInputTagDom({
  props,
  hovering,
  isFocused,
  inputValue,
  disabled,
  size,
  validateState,
  validateIcon,
  needStatusIcon,
})

defineExpose({
  focus,
  blur,
})
</script>
