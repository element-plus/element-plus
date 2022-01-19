<template>
  <label
    class="el-radio-button"
    :class="[
      size ? 'el-radio-button--' + size : '',
      {
        'is-active': modelValue === label,
        'is-disabled': disabled,
        'is-focus': focus,
      },
    ]"
    role="radio"
    :aria-checked="modelValue === label"
    :aria-disabled="disabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="modelValue = disabled ? modelValue : label"
  >
    <input
      ref="radioRef"
      v-model="modelValue"
      class="el-radio-button__original-radio"
      :value="label"
      type="radio"
      :name="name"
      :disabled="disabled"
      tabindex="-1"
      @focus="focus = true"
      @blur="focus = false"
    />
    <span
      class="el-radio-button__inner"
      :style="modelValue === label ? activeStyle : {}"
      @keydown.stop
    >
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRadio } from './radio'
import { radioButtonProps } from './radio-button'
import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'ElRadioButton',
  props: radioButtonProps,

  setup(props, { emit }) {
    const {
      radioRef,
      isGroup,
      focus,
      size,
      disabled,
      tabIndex,
      modelValue,
      radioGroup,
    } = useRadio(props, emit)

    const activeStyle = computed<CSSProperties>(() => {
      return {
        backgroundColor: radioGroup?.fill || '',
        borderColor: radioGroup?.fill || '',
        boxShadow: radioGroup?.fill ? `-1px 0 0 0 ${radioGroup.fill}` : '',
        color: radioGroup?.textColor || '',
      }
    })

    return {
      isGroup,
      size,
      disabled,
      tabIndex,
      modelValue,
      focus,
      activeStyle,
      radioRef,
    }
  },
})
</script>
