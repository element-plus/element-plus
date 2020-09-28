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
      @blur="(event) => $emits('blur', event)"
      @focus="(event) => $emits('focus', event)"
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
  toRefs,
  unref,
  onMounted,
  onUpdated,
} from 'vue'
import { RepeatClick } from '@element-plus/directives'
import ElInput from '@element-plus/input/index'
import type { PropType } from 'vue'

const ELEMENT: {
  size?: number
} = {}
interface ElForm {
  disabled: boolean
  statusIcon: string
}
interface ElFormItem {
  elFormItemSize: number
  validateState: string
}
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
    modelValue: Number,
    disabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<'large' | 'small'>,
      validator: (val: string) => ['large', 'small'].includes(val),
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
      validator(val: number) {
        return val >= 0 && val === parseInt(`${val}`, 10)
      },
    },
  },
  emits: ['update:modelValue', 'change', 'input', 'blur', 'focus'],
  setup(props) {
    const {
      controls,
      controlsPosition,
      disabled,
      modelValue,
      max,
      min,
      step,
      stepStrictly,
      precision,
      size,
    } = toRefs(props)
    const input = ref(null)
    const data = reactive<IData>({
      currentValue: 0,
      userInput: null,
    })

    const elForm = inject<ElForm>('elForm', {} as any)
    const elFormItem = inject<ElFormItem>('elFormItem', {} as any)

    const minDisabled = computed(() => {
      return _decrease(modelValue.value, step.value) < min.value
    })
    const maxDisabled = computed(() => {
      return _increase(modelValue.value, step.value) > max.value
    })
    const numPrecision = computed(() => {
      const stepPrecision = getPrecision(step.value)
      if (precision.value !== undefined) {
        if (stepPrecision > precision.value) {
          console.warn(
            '[Element Warn][InputNumber]precision should not be less than the decimal places of step',
          )
        }
        return precision.value
      } else {
        return Math.max(getPrecision(modelValue.value), stepPrecision)
      }
    })
    const controlsAtRight = computed(() => {
      return controls.value && controlsPosition.value === 'right'
    })
    const inputNumberSize = computed(() => {
      return (size && size.value) || elFormItem.elFormItemSize || ELEMENT?.size
    })
    const inputNumberDisabled = computed(() => {
      return disabled.value || !!(elForm || {}).disabled
    })
    const displayValue = computed(() => {
      if (data.userInput !== null) {
        return data.userInput
      }

      let currentValue = data.currentValue
      if (typeof currentValue === 'number') {
        if (precision && precision.value !== undefined) {
          currentValue = currentValue.toFixed(precision.value)
        }
      }
      return currentValue
    })

    const toPrecision = (num, pre) => {
      if (pre === undefined) pre = numPrecision.value
      return parseFloat(
        `${Math.round(num * Math.pow(10, pre)) / Math.pow(10, pre)}`,
      )
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
      if (typeof val !== 'number' && val !== undefined) return data.currentValue
      return val + step
    }
    const _decrease = (val, step) => {
      if (typeof val !== 'number' && val !== undefined) return data.currentValue
      return val - step
    }
    const increase = () => {
      if (inputNumberDisabled.value || maxDisabled.value) return
      const value = modelValue.value || 0
      const newVal = _increase(value, step.value)
      setCurrentValue(newVal)
    }
    const decrease = () => {
      if (inputNumberDisabled.value || minDisabled.value) return
      const value = modelValue.value || 0
      const newVal = _decrease(value, step.value)
      setCurrentValue(newVal)
    }
    const setCurrentValue = newVal => {
      const oldVal = data.currentValue
      if (typeof newVal === 'number' && precision && precision.value !== undefined) {
        newVal = toPrecision(newVal, precision.value)
      }

      if (newVal >= max.value) newVal = max.value
      if (newVal <= min.value) newVal = min.value
      if (oldVal === newVal) return

      data.userInput = null
      emit('update:modelValue', newVal)
      emit('input', newVal)
      emit('change', newVal)
      data.currentValue = newVal
    }
    const handleInput = value => {
      return (data.userInput = value)
    }
    const handleInputChange = value => {
      const newVal = value === '' ? undefined : Number(value)
      if (!isNaN(newVal) || value === '') {
        setCurrentValue(newVal)
      }
      data.userInput = null
    }
    const select = () => {
      unref(input).select()
    }

    watch(
      () => modelValue.value,
      value => {
        let newVal = value === undefined ? value : Number(value)
        if (newVal !== undefined) {
          if (isNaN(newVal)) return

          if (stepStrictly.value) {
            const stepPrecision = getPrecision(step.value)
            const precisionFactor = Math.pow(10, stepPrecision)
            newVal =
              (Math.round(newVal / step.value) * precisionFactor * step.value) /
              precisionFactor
          }
          if (precision && precision.value !== undefined) {
            newVal = toPrecision(newVal, precision.value)
          }
        }

        if (newVal >= max.value) newVal = max.value
        if (newVal <= min.value) newVal = min.value
        data.currentValue = newVal
        data.userInput = null
        emit('update:modelValue', newVal)
        emit('input', newVal)
      },
      { immediate: true },
    )

    onMounted(() => {
      let innerInput = input.value.input
      innerInput.setAttribute('role', 'spinbutton')
      innerInput.setAttribute('aria-valuemax', max.value)
      innerInput.setAttribute('aria-valuemin', min.value)
      innerInput.setAttribute('aria-valuenow', data.currentValue)
      innerInput.setAttribute('aria-disabled', inputNumberDisabled.value)
    })
    onUpdated(() => {
      let innerInput = input.value.input
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
    }
  },
})
</script>
