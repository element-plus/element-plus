<template>
  <label
    class="el-radio-button"
    :class="[
      size ? 'el-radio-button--' + size : '',
      { 'is-active': value === label,
        'is-disabled': isDisabled,
        'is-focus': focus,
      }
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
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRadio, useRadioAttrs } from './useRadio'

export default defineComponent({
  name: 'ElRadioButton',

  props: {
    label: {
      type: [String, Number, Boolean],
      default: '',
    },
    disabled: Boolean,
    name: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const {
      isGroup,
      radioGroup,
      elFormItemSize,
      ELEMENT,
      focus,
      elForm,
    } = useRadio()

    const size = computed(() => {
      return radioGroup.radioGroupSize || elFormItemSize.value || ELEMENT.size
    })

    const value = computed<boolean | string | number>({
      get() {
        return radioGroup.modelValue
      },
      set(value) {
        radioGroup.changeEvent(value)
      },
    })

    const {
      isDisabled,
      tabIndex,
    } = useRadioAttrs(props, {
      model: value,
      elForm,
      radioGroup: radioGroup,
      isGroup,
    })

    const activeStyle = computed(() => {
      return {
        backgroundColor: radioGroup.fill || '',
        borderColor: radioGroup.fill || '',
        boxShadow: radioGroup.fill ? `-1px 0 0 0 ${radioGroup.fill}` : '',
        color: radioGroup.textColor || '',
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
})
</script>
