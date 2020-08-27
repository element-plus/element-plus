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
import { useCheckbox } from './useCheckbox'

export default defineComponent({
  name: 'ElCheckbox',
  props: {
    modelValue: {
      type: [Object, Boolean] as PropType<Record<string, unknown> | boolean>,
      default: () => undefined,
    },
    label: {
      type: [Object, Boolean, String] as PropType<Record<string, unknown> | boolean | string>,
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
    const { elForm, isGroup, _checkboxGroup, _elFormItemSize, elFormItem, ELEMENT } = useCheckbox()
    const instance = getCurrentInstance()
    const selfModel = ref(false)
    const focus = ref(false)
    const isLimitExceeded = ref(false)
    const store = computed(() => _checkboxGroup ? _checkboxGroup.modelValue.value : props.modelValue)
    const model = computed({
      get() {
        return isGroup.value ? store.value : props.modelValue !== undefined ? props.modelValue : selfModel
      },

      set(val: any) {
        if (isGroup.value) {
          isLimitExceeded.value = false

          if (_checkboxGroup.min !== undefined && val.length < _checkboxGroup.min) {
            isLimitExceeded.value = true
          }
          if (_checkboxGroup.max !== undefined && val.length > _checkboxGroup.max) {
            isLimitExceeded.value = true
          }

          isLimitExceeded.value === false && _checkboxGroup.changeEvent?.(val)
        } else {
          emit('update:modelValue', val)
          selfModel.value = val
        }
      },
    })
    const isChecked = computed(() => {
      if (Object.prototype.toString.call(model.value) === '[object Boolean]') {
        return model.value
      } else if (Array.isArray(model.value)) {
        return model.value.includes(props.label)
      } else if (model.value !== null && model.value !== undefined) {
        return model.value === props.trueLabel
      }
    })
    const isLimitDisabled = computed(() => {
      const max = _checkboxGroup.max
      const min = _checkboxGroup.min
      return !!(max || min) && (model.value.length >= max && !isChecked.value) ||
          (model.value.length <= min && isChecked.value)
    })
    const isDisabled = computed(() => {
      return isGroup.value
        ? _checkboxGroup.disabled || props.disabled ||  (elForm as any || {} as any).disabled || isLimitDisabled.value
        : props.disabled || (elForm as any || {} as any).disabled
    })
    const checkboxSize = computed(() => {
      const temCheckboxSize = props.size || _elFormItemSize.value || (ELEMENT || {} as any).size
      return isGroup.value
        ? _checkboxGroup.checkboxGroupSize || temCheckboxSize
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

    function handleChange(e: UIEvent) {
      if (isLimitExceeded.value) return
      let value = ref(undefined)
      if ((e.target as HTMLInputElement).checked) {
        value.value = props.trueLabel === undefined ? true : props.trueLabel
      } else {
        value.value = props.falseLabel === undefined ? false : props.falseLabel
      }

      emit('change', value.value, e)
      /**
       * to discuss does it is useful
       */
      // nextTick(() => {
      //   if (isGroup.value) {
      //     _checkboxGroup.changeEvent?.(_checkboxGroup.modelValue.value)
      //   }
      // })
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
