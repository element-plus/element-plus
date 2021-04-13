<template>
  <label
    class="el-checkbox-button"
    :class="[
      size ? 'el-checkbox-button--' + size : '',
      { 'is-disabled': isDisabled },
      { 'is-checked': isChecked },
      { 'is-focus': focus },
    ]"
    role="checkbox"
    :aria-checked="isChecked"
    :aria-disabled="isDisabled"
  >
    <input
      v-if="trueLabel || falseLabel"
      v-model="model"
      :checked="isChecked"
      class="el-checkbox-button__original"
      type="checkbox"
      :name="name"
      :disabled="isDisabled"
      :true-value="trueLabel"
      :false-value="falseLabel"
      @change="handleChange"
      @focus="focus = true"
      @blur="focus = false"
    >
    <input
      v-else
      v-model="model"
      class="el-checkbox-button__original"
      type="checkbox"
      :name="name"
      :disabled="isDisabled"
      :value="label"
      @change="handleChange"
      @focus="focus = true"
      @blur="focus = false"
    >

    <span
      v-if="$slots.default || label"
      class="el-checkbox-button__inner"
      :style="isChecked ? activeStyle : null"
    >
      <slot>{{ label }}</slot>
    </span>

  </label>
</template>
<script lang='ts'>
import {
  defineComponent,
  computed,
} from 'vue'
import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import { useCheckbox, useCheckboxGroup } from './useCheckbox'

export default defineComponent({
  name: 'ElCheckboxButton',
  props: {
    modelValue: {
      type: [Boolean, Number, String],
      default: () => undefined,
    },
    label: {
      type: [Boolean, Number, String],
    },
    indeterminate: Boolean,
    disabled: Boolean,
    checked: Boolean,
    name: {
      type: String,
      default: undefined,
    },
    trueLabel: {
      type: [String, Number],
      default: undefined,
    },
    falseLabel: {
      type: [String, Number],
      default: undefined,
    },
  },
  emits: [UPDATE_MODEL_EVENT, 'change'],
  setup(props) {
    const { focus, isChecked, isDisabled, size, model, handleChange } = useCheckbox(props)
    const { checkboxGroup } = useCheckboxGroup()

    const activeStyle = computed(() => {
      const fillValue = checkboxGroup?.fill?.value ?? ''
      return {
        backgroundColor: fillValue,
        borderColor: fillValue,
        color: checkboxGroup?.textColor?.value ?? '',
        boxShadow: fillValue ? `-1px 0 0 0 ${fillValue}` : null,
      }
    })


    return {
      focus,
      isChecked,
      isDisabled,
      model,
      handleChange,
      activeStyle,
      size,
    }
  },
})
</script>
