<template>
  <div class="el-checkbox-group" role="group" aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, provide, nextTick } from 'vue'
import { useCheckboxGroup } from './useCheckbox'

export default defineComponent({
  name: 'ElCheckboxGroup',

  props: {
    modelValue: {
      type: [Object, Boolean, Array],
      default: () => undefined,
    },
    disabled: Boolean,
    min: {
      type: Number,
      default: undefined,
    },
    max: {
      type: Number,
      default: undefined,
    },
    size: {
      type: String,
      default: undefined,
    },
    fill: {
      type: String,
      default: undefined,
    },
    textColor: {
      type: String,
      default: undefined,
    },
  },

  emits: ['update:modelValue', 'change'],

  setup(props, ctx) {
    const { elFormItem, elFormItemSize, ELEMENT } = useCheckboxGroup()
    const checkboxGroupSize = computed(() => props.size || elFormItemSize.value || (ELEMENT || {}).size)

    const changeEvent = value => {
      ctx.emit('update:modelValue', value)
      nextTick(() => {
        ctx.emit('change', value)
      })
    }

    const modelValue = computed({
      get() {
        return props.modelValue
      },
      set(val) {
        changeEvent(val)
      },
    })

    provide('CheckboxGroup', {
      name: 'ElCheckboxGroup',
      modelValue,
      disabled: props.disabled,
      min: props.min,
      max: props.max,
      size: props.size,
      fill: props.fill,
      textColor: props.textColor,
      checkboxGroupSize: checkboxGroupSize.value,
      changeEvent,
    })

    watch(() => props.modelValue, val => {
      elFormItem.changeEvent?.(val)
    })
  },
})
</script>
