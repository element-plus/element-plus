<template>
  <div
    :class="[
      'el-input-number',
      inputNumberSize ? 'el-input-number--' + inputNumberSize : '',
      { 'is-disabled': inputNumberDisabled },
      { 'is-without-controls': !controls },
      { 'is-controls-right': controlsAtRight }
    ]"
    @dragstart.prevent
  >
    <span
      v-if="controls"
      v-repeat-click="decrease"
      class="el-input-number__decrease"
      role="button"
      :class="{'is-disabled': minDisabled}"
      @keydown.enter="decrease"
    >
      <i :class="`el-icon-${controlsAtRight ? 'arrow-down' : 'minus'}`"></i>
    </span>
    <span
      v-if="controls"
      v-repeat-click="increase"
      role="button"
      class="el-input-number__increase"
      :class="{'is-disabled': maxDisabled}"
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
      @blur="handleBlur"
      @focus="handleFocus"
      @update:modelValue="handleInput"
      @change="handleInputChange"
    />
  </div>
</template>

<script lang='ts'>
import { Input as ElInput } from '@element-plus/input'
import RepeatClick from '@element-plus/directives/repeat-click'
import {
  defineComponent,
  computed,
  inject,
  onMounted,
  onUpdated,
  watch,
  ref,
} from 'vue'

const ELEMENT: {
    size?: number
  } = {}

export default defineComponent({
  name: 'ElInputNumber',
  components: {
    ElInput,
  },
  directives: {
    repeatClick: RepeatClick,
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
      default: 0,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'large',
      validator: (val: string) => ['large', 'medium', 'small', 'mini'].includes(val),
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
      validator: (val: number) => val >= 0 && val === parseInt(val, 10),
    },
  },

  emits: ['update:modelValue', 'blur', 'focus', 'change'],

  setup(props, ctx) {
    const input = ref(null)
    const currentValue = ref(0)
    const userInput = ref(null)
    let elForm = inject('elForm', {})
    let elFormItem = inject('elFormItem', {})

    //computed

    const minDisabled = computed(() => _decrease(props.modelValue, props.step) < props.min)
    const maxDisabled = computed(() => _increase(props.modelValue, props.step) > props.max)
    const numPrecision = computed(() => {
      const stepPrecision = getPrecision(props.step)
      if (props.precision !== undefined) {
        if (stepPrecision > props.precision) {
          console.warn('[Element Warn][InputNumber]precision should not be less than the decimal places of step')
        }
        return props.precision
      } else {
        return Math.max(getPrecision(props.modelValue), stepPrecision)
      }
    })
    const controlsAtRight = computed(() => props.controls && props.controlsPosition === 'right')
    const _elFormItemSize = computed(() => (elFormItem || {}).elFormItemSize)
    const inputNumberSize = computed(() => props.size || _elFormItemSize.value || (ELEMENT || {}).size)
    const inputNumberDisabled = computed(() => props.disabled || !!(elForm || {}).disabled)
    const displayValue = computed(() => {
      if (userInput.value !== null) {
        return userInput.value
      }
      let current = currentValue.value
      if (typeof current === 'number') {
        if (props.stepStrictly) {
          const stepPrecision = getPrecision(props.step)
          const precisionFactor = Math.pow(10, stepPrecision)
          current = Math.round(current / props.step) * precisionFactor * props.step / precisionFactor
        }
        if (props.precision !== undefined) {
          current = current.toFixed(props.precision)
        }
      }
      return current
    })

    //methods
    const toPrecision = (num, precision) => {
      if (precision === undefined) precision = numPrecision.value
      return parseFloat(Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision))
    }
    const getPrecision = value => {
      if (value === undefined) return 0
      const valueString = value.toString()
      const dotPosition = valueString.indexOf('.')
      let precision = 0
      if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1
      }
      return precision
    }
    const _increase = (val, step) => {
      if (typeof val !== 'number' && val !== undefined) return currentValue.value
      const precisionFactor = Math.pow(10, numPrecision.value)
      // Solve the accuracy problem of JS decimal calculation by converting the value to integer.
      return toPrecision((precisionFactor * val + precisionFactor * step) / precisionFactor)
    }
    const _decrease = (val, step) => {
      if (typeof val !== 'number' && val !== undefined) return currentValue.value
      const precisionFactor = Math.pow(10, numPrecision.value)
      return toPrecision((precisionFactor * val - precisionFactor * step) / precisionFactor)
    }
    const increase = () => {
      if (inputNumberDisabled.value || maxDisabled.value) return
      const value = props.modelValue || 0
      const newVal = _increase(value, props.step)
      setCurrentValue(newVal)
    }
    const decrease = () => {
      if (inputNumberDisabled.value || minDisabled.value) return
      const value = props.modelValue || 0
      const newVal = _decrease(value, props.step)
      setCurrentValue(newVal)
    }
    const handleBlur = event => {
      ctx.emit('blur', event)
    }
    const handleFocus = event => {
      ctx.emit('focus', event)
    }
    const setCurrentValue = newVal => {
      const oldVal = currentValue.value
      if (typeof newVal === 'number' && props.precision !== undefined) {
        newVal = toPrecision(newVal, props.precision)
      }
      if (newVal >= props.max) newVal = props.max
      if (newVal <= props.min) newVal = props.min
      if (oldVal === newVal) return
      userInput.value = null
      ctx.emit('update:modelValue', newVal)
      ctx.emit('change', newVal, oldVal)
      currentValue.value = newVal
    }
    const handleInput = value => {
      userInput.value = value
    }
    const handleInputChange = value => {
      const newVal = value === '' ? undefined : Number(value)
      if (!isNaN(newVal) || value === '') {
        setCurrentValue(newVal)
      }
      userInput.value = null
    }
    const select = () => {
      input.value.select()
    }
    const focus = () => {
      nextTick(() => {
        input.value.focus()
      })
    }

    watch(() => props.modelValue, () => {
      let newVal = (props.modelValue === undefined ? props.modelValue : Number(props.modelValue))
      if (newVal !== undefined) {
        if (isNaN(newVal)) {
          return
        }
        if (props.stepStrictly) {
          const stepPrecision = getPrecision(props.step)
          const precisionFactor = Math.pow(10, stepPrecision)
          newVal = Math.round(newVal / props.step) * precisionFactor * props.step / precisionFactor
        }
        if (props.precision !== undefined) {
          newVal = toPrecision(newVal, props.precision)
        }
      }
      if (newVal >= props.max) newVal = props.max
      if (newVal <= props.min) newVal = props.min
      currentValue.value = newVal
      userInput.value = null
      ctx.emit('update:modelValue', newVal)
    },
    { immediate: true },
    )

    onMounted(() => {
      const innerInput = input.value.input
      innerInput.setAttribute('role', 'spinbutton')
      innerInput.setAttribute('aria-valuemax', props.max)
      innerInput.setAttribute('aria-valuemin', props.min)
      innerInput.setAttribute('aria-valuenow', currentValue.value)
      innerInput.setAttribute('aria-disabled', inputNumberDisabled.value)
    })

    onUpdated(() => {
      if (!input.value) return
      const innerInput = input.value.input
      innerInput.setAttribute('aria-valuenow', currentValue.value)
    })

    return {
      input,
      currentValue,
      userInput,
      inputNumberSize,
      inputNumberDisabled,
      controlsAtRight,
      decrease,
      minDisabled,
      maxDisabled,
      increase,
      displayValue,
      handleBlur,
      handleFocus,
      handleInput,
      handleInputChange,
    }
  },
})
</script>
