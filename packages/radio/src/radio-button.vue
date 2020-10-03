<template>
  <label
    class="el-radio-button"
    :class="[
      size ? 'el-radio-button--' + size.value : '',
      { 'is-active': value === label },
      { 'is-disabled': isDisabled },
      { 'is-focus': focus }
    ]"
    role="radio"
    :aria-checked="value === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="value = isDisabled ? value : label"
  >
    <input
      v-model="value"
      class="el-radio-button__orig-radio"
      :value="label"
      type="radio"
      :name="name"
      :disabled="isDisabled"
      tabindex="-1"
      @focus="focus = true"
      @blur="focus = false"
    >
    <span
      class="el-radio-button__inner"
      :style="value === label ? activeStyle : null"
      @keydown.stop
    >
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
<script lang="ts">
import { computed } from 'vue'
import useRadio from './useRadio'

export default {
  name: 'ElRadioButton',

  props: {
    label: {
      type: [Boolean, String, Number],
      default: '',
    },
    disabled: Boolean,
    name: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const radioUse = useRadio()
    const isGroup = radioUse.isGroup
    const radioGroup_ = radioUse.radioGroup_
    const elFormItemSize_ = radioUse.elFormItemSize_
    const ELEMENT = radioUse.ELEMENT
    const focus = radioUse.focus
    const elForm = radioUse.elForm
    const size = computed(() => {
      return radioGroup_.radioGroupSize || elFormItemSize_ || (ELEMENT || {} as any).size
    })
    const isDisabled = computed(() => {
      return props.disabled || radioGroup_.disabled || (elForm || {} as any).disabled
    })
    const tabIndex = computed(() => {
      return (isDisabled.value || (radioGroup_ && value.value !== props.label)) ? -1 : 0
    })
    const value = computed({
      get() {
        return radioGroup_.modelValue.value
      },
      set(value) {
        radioGroup_.changeEvent(value)
      },
    })
    const activeStyle = computed(() => {
      return {
        backgroundColor: radioGroup_.fill || '',
        borderColor: radioGroup_.fill || '',
        boxShadow: radioGroup_.fill ? `-1px 0 0 0 ${radioGroup_.fill}` : '',
        color: radioGroup_.textColor || '',
      }
    })

    return {
      isGroup,
      size,
      isDisabled,
      tabIndex,
      value,
      focus,
      activeStyle,
    }
  },
}
</script>
