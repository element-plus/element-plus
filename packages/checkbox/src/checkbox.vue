<template>
  <label
    :id="id"
    class="el-checkbox"
    :class="[
      border && checkboxSize ? 'el-checkbox--' + checkboxSize : '',
      { 'is-disabled': isDisabled },
      { 'is-bordered': border },
      { 'is-checked': isChecked }
    ]"
  >
    <span
      class="el-checkbox__input"
      :class="{
        'is-disabled': isDisabled,
        'is-checked': isChecked,
        'is-indeterminate': indeterminate,
        'is-focus': focus
      }"
      :tabindex="indeterminate ? 0 : false"
      :role="indeterminate ? 'checkbox' : false"
      :aria-checked="indeterminate ? 'mixed' : false"
    >
      <span class="el-checkbox__inner"></span>
      <input
        v-if="trueLabel || falseLabel"
        v-model="model"
        :checked="isChecked"
        class="el-checkbox__original"
        type="checkbox"
        :aria-hidden="indeterminate ? 'true' : 'false'"
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
        class="el-checkbox__original"
        type="checkbox"
        :aria-hidden="indeterminate ? 'true' : 'false'"
        :disabled="isDisabled"
        :value="label"
        :name="name"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false"
      >
    </span>
    <span v-if="$slots.default || label" class="el-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
<script lang='ts'>
import {
  defineComponent,
  ref,
  computed,
  getCurrentInstance,
  watch,
  onMounted,
  PropType,
} from 'vue'
import { useCheckboxGroup } from './useCheckbox'

export default defineComponent({
  name: 'ElCheckbox',
  props: {
    modelValue: {
      type: [Boolean, Number, String] as PropType<boolean | number | string>,
      default: () => undefined,
    },
    label: {
      type: [Boolean, Number, String] as PropType<boolean | number | string>,
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
    id: {
      type: String,
      default: undefined,
    },
    controls: {
      type: String,
      default: undefined,
    },
    border: Boolean,
    size: {
      type: String,
      default: undefined,
    },
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    let selfModel = false
    const { elForm, isGroup, checkboxGroup, elFormItemSize, elFormItem, ELEMENT } = useCheckboxGroup()
    const instance = getCurrentInstance()
    const focus = ref(false)
    const isLimitExceeded = ref(false)
    const store = computed(() => checkboxGroup ? checkboxGroup.modelValue.value : props.modelValue)
    const model = computed({
      get() {
        return isGroup.value
          ? store.value : props.modelValue !== undefined ? props.modelValue : selfModel
      },
      set(val: unknown) {
        if (isGroup.value && Array.isArray(val)) {
          isLimitExceeded.value = false

          if (checkboxGroup.min !== undefined && val.length < checkboxGroup.min) {
            isLimitExceeded.value = true
          }
          if (checkboxGroup.max !== undefined && val.length > checkboxGroup.max) {
            isLimitExceeded.value = true
          }

          isLimitExceeded.value === false && checkboxGroup.changeEvent?.(val)
        } else {
          emit('update:modelValue', val)
          selfModel = val as boolean
        }
      },
    })
    const isChecked = computed(() => {
      const value = model.value
      if (Object.prototype.toString.call(value) === '[object Boolean]') {
        return Boolean(value)
      } else if (Array.isArray(value)) {
        return value.includes(props.label)
      } else if (value !== null && value !== undefined) {
        return value === props.trueLabel
      }
    })
    const isLimitDisabled = computed(() => {
      const max = checkboxGroup.max
      const min = checkboxGroup.min
      return !!(max || min) && (model.value.length >= max && !isChecked.value) ||
          (model.value.length <= min && isChecked.value)
    })
    const isDisabled = computed(() => {
      return isGroup.value
        ? checkboxGroup.disabled || props.disabled ||  (elForm as any || {} as any).disabled || isLimitDisabled.value
        : props.disabled || (elForm as any || {} as any).disabled
    })
    const checkboxSize = computed(() => {
      const temCheckboxSize = props.size || elFormItemSize.value || (ELEMENT || {} as any).size
      return isGroup.value
        ? checkboxGroup.checkboxGroupSize || temCheckboxSize
        : temCheckboxSize
    })

    function addToStore() {
      if (
        Array.isArray(model.value) &&
        !model.value.includes(props.label)
      ) {
        model.value.push(props.label)
      } else {
        model.value = props.trueLabel || true
      }
    }

    function handleChange(e: InputEvent) {
      if (isLimitExceeded.value) return
      let value
      if ((e.target as HTMLInputElement).checked) {
        value = props.trueLabel === undefined ? true : props.trueLabel
      } else {
        value = props.falseLabel === undefined ? false : props.falseLabel
      }

      emit('change', value, e)
    }

    watch(() => props.modelValue, val => {
      elFormItem.changeEvent?.(val)
    })

    props.checked && addToStore()

    onMounted(() => {
      instance.vnode.el.setAttribute('aria-controls', props.controls)
    })

    return {
      focus,
      isChecked,
      isDisabled,
      checkboxSize,
      model,
      handleChange,
    }
  },
})
</script>
<style scoped>
</style>
