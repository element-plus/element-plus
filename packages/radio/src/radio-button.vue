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
import { computed, inject, ref } from 'vue'

export default {
  name: 'ElRadioButton',

  props: {
    label: {},
    disabled: Boolean,
    name: String,
  },
  setup(props, ctx) {
    //todo: ELEMENT
    const ELEMENT = {}
    const elForm = inject('elForm')
    const elFormItem = inject('elFormItem')
    const _radioGroup: any = inject('RadioGroup')
    const focus = ref(false)
    const isGroup = computed(() => _radioGroup && _radioGroup.name === 'ElRadioGroup')
    const _elFormItemSize = computed(() => {
      return (elFormItem || {} as any).elFormItemSize
    })
    const size = computed(() => {
      return _radioGroup.radioGroupSize || _elFormItemSize || (ELEMENT || {} as any).size
    })
    const isDisabled = computed(() => {
      return props.disabled || _radioGroup.disabled || (elForm || {} as any).disabled
    })
    const tabIndex = computed(() => {
      return (isDisabled.value || (_radioGroup && value.value !== props.label)) ? -1 : 0
    })
    const value = computed({
      get() {
        return _radioGroup.modelValue.value
      },
      set(value) {
        _radioGroup.changeEvent(value)
      },
    })
    const activeStyle = computed(() => {
      return {
        backgroundColor: _radioGroup.fill || '',
        borderColor: _radioGroup.fill || '',
        boxShadow: _radioGroup.fill ? `-1px 0 0 0 ${_radioGroup.fill}` : '',
        color: _radioGroup.textColor || '',
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
