<template>
  <label
    class="el-radio-button"
    :class="[
      size ? 'el-radio-button--' + size : '',
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
      @change="handleChange"
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
import { computed, nextTick, ref } from 'vue'

export default {
  name: 'ElRadioButton',

  props: {
    label: {},
    disabled: Boolean,
    name: String,
  },
  setup(props, ctx) {
    //todo: elFormItem elForm ELEMENT
    const elForm = null
    const elFormItem = null
    const ELEMENT = null
    const _radioGroup = {}
    const focus = ref(false)
    const isGroup = computed(() => {
      if (_radioGroup && _radioGroup.name === 'ElRadioGroup') {
        return true
      }
      return false
    })
    const _elFormItemSize = computed(() => {
      return (elFormItem || {}).elFormItemSize
    })
    const size = computed(() => {
      return _radioGroup.radioGroupSize || _elFormItemSize || (ELEMENT || {}).size
    })
    const isDisabled = computed(() => {
      return props.disabled || _radioGroup.disabled || (elForm || {}).disabled
    })
    const tabIndex = computed(() => {
      return (isDisabled.value || (_radioGroup && value.value !== props.label)) ? -1 : 0
    })
    const value = computed({
      get() {
        return _radioGroup.modelValue.value
      },
      set(value) {
        _radioGroup.emit(value)
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

    // methods
    const handleChange = () => {
      nextTick(() => {
        // this.dispatch('ElRadioGroup', 'handleChange', this.value);
      })
    }

    return {
      isGroup,
      size,
      isDisabled,
      tabIndex,
      value,
      focus,
      activeStyle,
      handleChange,
    }
  },
}
</script>
