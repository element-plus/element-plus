<template>
  <div
    :class="[
      'el-input-number',
      inputNumberSize ? 'el-input-number--' + inputNumberSize : '',
      { 'is-disabled': inputNumberDisabled },
      { 'is-without-controls': !controls },
      { 'is-controls-right': controlsAtRight },
    ]"
    @dragstart.prevent
  >
    <span
      v-if="controls"
      v-repeat-click="decrease"
      class="el-input-number__decrease"
      role="button"
      :class="{ 'is-disabled': minDisabled }"
      @keydown.enter="decrease"
    >
      <i :class="`el-icon-${controlsAtRight ? 'arrow-down' : 'minus'}`"></i>
    </span>
    <span
      v-if="controls"
      v-repeat-click="increase"
      class="el-input-number__increase"
      role="button"
      :class="{ 'is-disabled': maxDisabled }"
      @keydown.enter="increase"
    >
      <i :class="`el-icon-${controlsAtRight ? 'arrow-up' : 'plus'}`"></i>
    </span>
    <el-input
      ref="input"
      :model-value="displayValue"
      :placeholder="placeholder"
      :disabled="inputNumberDisabled"
      :size="inputNumberSize"
      :max="max"
      :min="min"
      :name="name"
      :label="label"
      @keydown.up.prevent="increase"
      @keydown.down.prevent="decrease"
      @blur="(event) => $emit('blur', event)"
      @focus="(event) => $emit('focus', event)"
      @input="handleInput"
      @change="handleInputChange"
    />
  </div>
</template>
<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  ref,
  watch,
  inject,
  onMounted,
  onUpdated,
} from 'vue'
import { toRawType } from '@vue/shared'
import { RepeatClick } from '@element-plus/directives'
import { elFormKey, elFormItemKey } from '@element-plus/tokens'
import ElInput from '@element-plus/components/input'
import { useGlobalConfig } from '@element-plus/utils/util'
import { isValidComponentSize } from '@element-plus/utils/validators'
import { debugWarn } from '@element-plus/utils/error'

import type { PropType } from 'vue'
import type { ElFormContext, ElFormItemContext } from '@element-plus/tokens'
import type { ComponentSize } from '@element-plus/utils/types'

interface IData {
  currentValue: number | string
  userInput: null | number | string
}

export default defineComponent({
  name: 'ElInputNumber',
  components: {
    ElInput,
  },
  directives: {
    RepeatClick,
  },
  props: {
    step: {
      type: Number,
      default: 1,
    },
    stepStrictly: {
      type: Boolean,
      default: false,
    },
    max: {
      type: Number,
      default: Infinity,
    },
    min: {
      type: Number,
      default: -Infinity,
    },
    modelValue: {
      type: Number,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize,
    },
    controls: {
      type: Boolean,
      default: true,
    },
    controlsPosition: {
      type: String,
      default: '',
    },
    name: String,
    label: String,
    placeholder: String,
    precision: {
      type: Number,
      validator: (val: number) => val >= 0 && val === parseInt(`${val}`, 10),
    },
  },
  emits: ['update:modelValue', 'change', 'input', 'blur', 'focus'],
  setup(props, { emit }) {
    const ELEMENT = useGlobalConfig()
    const elForm = inject(elFormKey, {} as ElFormContext)
    const elFormItem = inject(elFormItemKey, {} as ElFormItemContext)

    const input = ref(null)
    const data = reactive<IData>({
      currentValue: props.modelValue,
      userInput: null,
    })

    const minDisabled = computed(() => {
      return _decrease(props.modelValue) < props.min
    })
    const maxDisabled = computed(() => {
      return _increase(props.modelValue) > props.max
    })
    const numPrecision = computed(() => {
      const stepPrecision = getPrecision(props.step)
      if (props.precision !== undefined) {
        if (stepPrecision > props.precision) {
          debugWarn(
            'InputNumber',
            'precision should not be less than the decimal places of step'
          )
        }
        return props.precision
      } else {
        return Math.max(getPrecision(props.modelValue), stepPrecision)
      }
    })
    const controlsAtRight = computed(() => {
      return props.controls && props.controlsPosition === 'right'
    })
    const inputNumberSize = computed(() => {
      return props.size || elFormItem.size || ELEMENT.size
    })
    const inputNumberDisabled = computed(() => {
      return props.disabled || elForm.disabled
    })
    const displayValue = computed(() => {
      if (data.userInput !== null) {
        return data.userInput
      }
      let currentValue = data.currentValue
      if (typeof currentValue === 'number') {
        if (props.precision !== undefined) {
          currentValue = currentValue.toFixed(props.precision)
        }
      }
      return currentValue
    })
    const toPrecision = (num, pre?) => {
      if (pre === undefined) pre = numPrecision.value
      return parseFloat(
        `${Math.round(num * Math.pow(10, pre)) / Math.pow(10, pre)}`
      )
    }
    const getPrecision = (value) => {
      if (value === undefined) return 0
      const valueString = value.toString()
      const dotPosition = valueString.indexOf('.')
      let precision = 0
      if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1
      }
      return precision
    }
    const _increase = (val) => {
      if (typeof val !== 'number' && val !== undefined) return data.currentValue
      const precisionFactor = Math.pow(10, numPrecision.value)
      // Solve the accuracy problem of JS decimal calculation by converting the value to integer.
      return toPrecision(
        (precisionFactor * val + precisionFactor * props.step) / precisionFactor
      )
    }
    const _decrease = (val) => {
      if (typeof val !== 'number' && val !== undefined) return data.currentValue
      const precisionFactor = Math.pow(10, numPrecision.value)
      // Solve the accuracy problem of JS decimal calculation by converting the value to integer.
      return toPrecision(
        (precisionFactor * val - precisionFactor * props.step) / precisionFactor
      )
    }
    const increase = () => {
      if (inputNumberDisabled.value || maxDisabled.value) return
      const value = props.modelValue || 0
      const newVal = _increase(value)
      setCurrentValue(newVal)
    }
    const decrease = () => {
      if (inputNumberDisabled.value || minDisabled.value) return
      const value = props.modelValue || 0
      const newVal = _decrease(value)
      setCurrentValue(newVal)
    }
    const setCurrentValue = (newVal) => {
      const oldVal = data.currentValue
      if (typeof newVal === 'number' && props.precision !== undefined) {
        newVal = toPrecision(newVal, props.precision)
      }
      if (newVal !== undefined && newVal >= props.max) newVal = props.max
      if (newVal !== undefined && newVal <= props.min) newVal = props.min
      if (oldVal === newVal) return
      data.userInput = null
      emit('update:modelValue', newVal)
      emit('input', newVal)
      emit('change', newVal, oldVal)
      data.currentValue = newVal
    }
    const handleInput = (value) => {
      return (data.userInput = value)
    }
    const handleInputChange = (value) => {
      const newVal = value === '' ? undefined : Number(value)
      if (!isNaN(newVal) || value === '') {
        setCurrentValue(newVal)
      }
      data.userInput = null
    }

    const focus = () => {
      input.value.focus?.()
    }

    const blur = () => {
      input.value.blur?.()
    }

    watch(
      () => props.modelValue,
      (value) => {
        let newVal = value === undefined ? value : Number(value)
        if (newVal !== undefined) {
          if (isNaN(newVal)) return
          if (props.stepStrictly) {
            const stepPrecision = getPrecision(props.step)
            const precisionFactor = Math.pow(10, stepPrecision)
            newVal =
              (Math.round(newVal / props.step) * precisionFactor * props.step) /
              precisionFactor
          }
          if (props.precision !== undefined) {
            newVal = toPrecision(newVal, props.precision)
          }
        }
        if (newVal !== undefined && newVal >= props.max) {
          newVal = props.max
          emit('update:modelValue', newVal)
        }
        if (newVal !== undefined && newVal <= props.min) {
          newVal = props.min
          emit('update:modelValue', newVal)
        }
        data.currentValue = newVal
        data.userInput = null
      },
      { immediate: true }
    )
    onMounted(() => {
      const innerInput = input.value.input
      innerInput.setAttribute('role', 'spinbutton')
      innerInput.setAttribute('aria-valuemax', props.max)
      innerInput.setAttribute('aria-valuemin', props.min)
      innerInput.setAttribute('aria-valuenow', data.currentValue)
      innerInput.setAttribute('aria-disabled', inputNumberDisabled.value)
      if (
        toRawType(props.modelValue) !== 'Number' &&
        props.modelValue !== undefined
      ) {
        emit('update:modelValue', undefined)
      }
    })
    onUpdated(() => {
      const innerInput = input.value.input
      innerInput.setAttribute('aria-valuenow', data.currentValue)
    })
    return {
      input,
      displayValue,
      handleInput,
      handleInputChange,
      controlsAtRight,
      decrease,
      increase,
      inputNumberSize,
      inputNumberDisabled,
      maxDisabled,
      minDisabled,
      focus,
      blur,
    }
  },
})
</script>
