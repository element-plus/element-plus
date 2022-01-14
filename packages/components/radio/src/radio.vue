<template>
  <label
    :class="{
      [radioPrefixClass]: true,
      [`${radioPrefixClass}--${size || ''}`]: size,
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
      :class="{
        [`${radioPrefixClass}__input`]: true,
        'is-disabled': disabled,
        'is-checked': modelValue === label,
      }"
    >
      <span :class="`${radioPrefixClass}__inner`"></span>
      <input
        ref="radioRef"
        v-model="modelValue"
        :class="`${radioPrefixClass}__original`"
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
    <span :class="`${radioPrefixClass}__label`" @keydown.stop>
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>

<script lang="ts">
import { defineComponent, nextTick } from 'vue'
import { useRadio, radioEmits, radioProps } from './radio'
import { usePrefixClass } from '@element-plus/hooks'

export default defineComponent({
  name: 'ElRadio',
  props: radioProps,
  emits: radioEmits,

  setup(props, { emit }) {
    const radioPrefixClass = usePrefixClass('radio')
    const { radioRef, isGroup, focus, size, disabled, tabIndex, modelValue } =
      useRadio(props, emit)

    function handleChange() {
      nextTick(() => emit('change', modelValue.value))
    }

    return {
      radioPrefixClass,
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
