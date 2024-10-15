<template>
  <div
    v-bind="containerAttrs"
    :class="containerKls"
    :style="containerStyle"
    :role="containerRole"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- textarea -->
    <template v-if="type === 'textarea'">
      <textarea
        ref="textarea"
        :class="[nsTextarea.e('inner'), nsInput.is('focus', isFocused)]"
        v-bind="commonAttrs"
        :style="textareaStyle"
        :rows="rows"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <span
        v-if="isWordLimitVisible"
        :style="countStyle"
        :class="nsInput.e('count')"
      >
        {{ textLength }} / {{ maxlength }}
      </span>
    </template>
    <!-- input -->
    <template v-else>
      <!-- prepend slot -->
      <div v-if="$slots.prepend" :class="nsInput.be('group', 'prepend')">
        <slot name="prepend" />
      </div>

      <div ref="wrapperRef" :class="wrapperKls">
        <!-- prefix slot -->
        <span v-if="$slots.prefix || prefixIcon" :class="nsInput.e('prefix')">
          <span :class="nsInput.e('prefix-inner')">
            <slot name="prefix" />
            <el-icon v-if="prefixIcon" :class="nsInput.e('icon')">
              <component :is="prefixIcon" />
            </el-icon>
          </span>
        </span>

        <input
          ref="input"
          :class="nsInput.e('inner')"
          v-bind="commonAttrs"
          :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
          :style="inputStyle"
        />

        <!-- suffix slot -->
        <span v-if="suffixVisible" :class="nsInput.e('suffix')">
          <span :class="nsInput.e('suffix-inner')">
            <template
              v-if="!showClear || !showPwdVisible || !isWordLimitVisible"
            >
              <slot name="suffix" />
              <el-icon v-if="suffixIcon" :class="nsInput.e('icon')">
                <component :is="suffixIcon" />
              </el-icon>
            </template>
            <el-icon
              v-if="showClear"
              :class="[nsInput.e('icon'), nsInput.e('clear')]"
              @mousedown.prevent="NOOP"
              @click="clear"
            >
              <circle-close />
            </el-icon>
            <el-icon
              v-if="showPwdVisible"
              :class="[nsInput.e('icon'), nsInput.e('password')]"
              @click="handlePasswordVisible"
            >
              <component :is="passwordIcon" />
            </el-icon>
            <span v-if="isWordLimitVisible" :class="nsInput.e('count')">
              <span :class="nsInput.e('count-inner')">
                {{ textLength }} / {{ maxlength }}
              </span>
            </span>
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
          </span>
        </span>
      </div>

      <!-- append slot -->
      <div v-if="$slots.append" :class="nsInput.be('group', 'append')">
        <slot name="append" />
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { computed, toRef, unref } from 'vue'
import { pick } from 'lodash-unified'

import { ElIcon } from '@element-plus/components/icon'
import {
  CircleClose,
  Hide as IconHide,
  View as IconView,
} from '@element-plus/icons-vue'

import { NOOP } from '@element-plus/utils'

import { inputEmits, inputProps } from './input'
import { useInput } from './use-input'

defineOptions({
  name: 'ElInput',
  inheritAttrs: false,
})
const props = defineProps(inputProps)
const emit = defineEmits(inputEmits)

const {
  inputId,
  inputDisabled,
  showClear,
  showPwdVisible,
  isFocused,
  isComposing,
  suffixVisible,
  isWordLimitVisible,
  textLength,

  passwordVisible,
  validateIcon,
  validateState,
  needStatusIcon,

  // event handlers and methods
  blur,
  clear,
  select,
  handleCompositionStart,
  handleCompositionUpdate,
  handleCompositionEnd,
  handleMouseEnter,
  handleMouseLeave,
  handleKeydown,
  handleChange,
  handleBlur,
  handleFocus,
  handlePasswordVisible,
  handleInput,

  input,
  _ref,
  wrapperRef,
  textarea,

  containerKls,
  wrapperKls,

  containerStyle,
  countStyle,
  textareaStyle,

  // namespaces
  nsInput,
  nsTextarea,

  // attributes
  attrs,
  containerAttrs,

  resizeTextarea,
} = useInput(props, emit)

const passwordIcon = computed(() =>
  passwordVisible.value ? IconView : IconHide
)

const commonAttrs = computed(() => {
  return {
    ...unref(attrs),
    ...pick(props, [
      'autocomplete',
      'autofocus',
      'form',
      'id',
      'maxlength',
      'minlength',
      'placeholder',
      'readonly',
      'tabindex',
    ]),
    disabled: inputDisabled.value,
    id: inputId.value,
    onCompositionstart: handleCompositionStart,
    onCompositionupdate: handleCompositionUpdate,
    onCompositionend: handleCompositionEnd,
    onChange: handleChange,
    onInput: handleInput,
    onKeydown: handleKeydown,
  }
})

defineExpose({
  /** @description HTML input element */
  input,
  /** @description HTML textarea element */
  textarea,
  /** @description HTML element, input or textarea */
  ref: _ref,
  /** @description style of textarea. */
  textareaStyle,

  /** @description from props (used on unit test) */
  autosize: toRef(props, 'autosize'),

  /** @description is input composing */
  isComposing,

  /** @description HTML input element native method */
  focus,
  /** @description HTML input element native method */
  blur,
  /** @description HTML input element native method */
  select,
  /** @description clear input value */
  clear,
  /** @description resize textarea. */
  resizeTextarea,
})
</script>
