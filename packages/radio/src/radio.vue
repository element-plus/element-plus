<template>
  <label
    class="el-radio"
    :class="{
      [`el-radio--${radioSize || ''}`]: border && radioSize,
      'is-disabled': isDisabled,
      'is-focus': focus,
      'is-bordered': border,
      'is-checked': model === label
    }"
    role="radio"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="model = isDisabled ? model : label"
  >
    <span
      class="el-radio__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': model === label
      }"
    >
      <span class="el-radio__inner"></span>
      <input
        ref="radio"
        v-model="model"
        class="el-radio__original"
        :value="label"
        type="radio"
        aria-hidden="true"
        :name="name"
        :disabled="isDisabled"
        tabindex="-1"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
      >
    </span>
    <span class="el-radio__label" @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script lang='ts'>
import { ref, defineComponent, computed, getCurrentInstance, nextTick, inject } from 'vue'

export default defineComponent({
  name: 'ElRadio',
  componentName: 'ElRadio',

  props: {
    modelValue: {},
    label: {},
    disabled: Boolean,
    name: String,
    border: Boolean,
    size: String,
  },

  emits: ['update:modelValue', 'change'],

  setup(props, ctx) {
    const instance = getCurrentInstance()
    //todo: ELEMENT
    const ELEMENT = null
    const elForm = inject('elForm', {})
    const elFormItem = inject('elFormItem', {})
    const _radioGroup = inject('RadioGroup', {}) as any
    const focus = ref(false)
    const isGroup = computed(() => _radioGroup && _radioGroup.name === 'ElRadioGroup')
    const _elFormItemSize = computed(() => {
      return (elFormItem || {} as any).elFormItemSize
    })
    const radioSize = computed(() => {
      const temRadioSize = props.size || _elFormItemSize || (ELEMENT || {}).size
      return isGroup.value
        ? _radioGroup.radioGroupSize || temRadioSize
        : temRadioSize
    })
    const isDisabled = computed(() => {
      return isGroup.value
        ? _radioGroup.disabled || props.disabled || (elForm || {}).disabled
        : props.disabled || (elForm || {}).disabled
    })
    const tabIndex = computed(() => {
      return (isDisabled.value || (isGroup.value && model.value !== props.label)) ? -1 : 0
    })

    const model = computed({
      get() {
        return isGroup.value ? _radioGroup.modelValue.value : props.modelValue
      },
      set(val) {
        if (isGroup.value) {
          _radioGroup.changeEvent(val)
        } else {
          ctx.emit('update:modelValue', val)
        }
        instance.refs.radio && (instance.refs.radio.checked = props.modelValue === props.label)
      },
    })

    function handleChange() {
      nextTick(() => {
        ctx.emit('change', model.value)
      })
    }

    return {
      focus,
      isGroup,
      isDisabled,
      model,
      tabIndex,
      radioSize,
      handleChange,
    }
  },
})
</script>


