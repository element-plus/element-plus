<template>
  <label
    class="el-radio"
    :class="{
      [`el-radio--${size || ''}`]: size,
      'is-disabled': disabled,
      'is-focus': focus,
      'is-bordered': border,
      'is-checked': modelValue === label,
    }"
    role="radio"
    :aria-checked="modelValue === label"
    :aria-disabled="disabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="modelValue = disabled ? modelValue : label"
  >
    <span
      class="el-radio__input"
      :class="{
        'is-disabled': disabled,
        'is-checked': modelValue === label,
      }"
    >
      <span class="el-radio__inner"></span>
      <input
        ref="radioRef"
        v-model="modelValue"
        class="el-radio__original"
        :value="label"
        type="radio"
        aria-hidden="true"
        :name="name"
        :disabled="disabled"
        tabindex="-1"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
      />
    </span>
    <span class="el-radio__label" @keydown.stop>
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>

<script lang="ts">
import { defineComponent, nextTick } from 'vue'
import { useRadio, radioEmits, radioProps } from './radio'

export default defineComponent({
  name: 'ElRadio',
  props: radioProps,
  emits: radioEmits,

  setup(props, { emit }) {
    const { radioRef, isGroup, focus, size, disabled, tabIndex, modelValue } =
      useRadio(props, emit)

    function handleChange() {
      nextTick(() => emit('change', modelValue.value))
    }

    return {
      focus,
      isGroup,
      modelValue,
      tabIndex,
      size,
      disabled,
      radioRef,

      handleChange,
    }
  },
})
</script>
