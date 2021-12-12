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
      <el-icon>
        <arrow-down v-if="controlsAtRight" />
        <minus v-else />
      </el-icon>
    </span>
    <span
      v-if="controls"
      v-repeat-click="increase"
      class="el-input-number__increase"
      role="button"
      :class="{ 'is-disabled': maxDisabled }"
      @keydown.enter="increase"
    >
      <el-icon>
        <arrow-up v-if="controlsAtRight" />
        <plus v-else />
      </el-icon>
    </span>
    <el-input
      ref="input"
      type="number"
      :step="step"
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
  onMounted,
  onUpdated,
} from 'vue'

import { ElIcon } from '@element-plus/components/icon'
import { RepeatClick } from '@element-plus/directives'
import { useDisabled, useSize } from '@element-plus/hooks'
import ElInput from '@element-plus/components/input'
import { isNumber } from '@element-plus/utils/util'
import { debugWarn } from '@element-plus/utils/error'
import { ArrowUp, ArrowDown, Plus, Minus } from '@element-plus/icons-vue'
import { inputNumberProps, inputNumberEmits } from './input-number'

import type { ComponentPublicInstance } from 'vue'

interface IData {
  currentValue: number
  userInput: null | number | string
}

export default defineComponent({
  name: 'ElInputNumber',
  components: {
    ElInput,
    ElIcon,
    ArrowUp,
    ArrowDown,
    Plus,
    Minus,
  },
  directives: {
    RepeatClick,
  },
  props: inputNumberProps,
  emits: inputNumberEmits,
  setup(props, { emit }) {
    const input = ref<ComponentPublicInstance<typeof ElInput>>()
    const data = reactive<IData>({
      currentValue: props.modelValue,
      userInput: null,
    })

    const minDisabled = computed(() => _decrease(props.modelValue) < props.min)
    const maxDisabled = computed(() => _increase(props.modelValue) > props.max)

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

    const inputNumberSize = useSize()
    const inputNumberDisabled = useDisabled()

    const displayValue = computed(() => {
      if (data.userInput !== null) {
        return data.userInput
      }
      let currentValue: number | string = data.currentValue
      if (isNumber(currentValue)) {
        if (Number.isNaN(currentValue)) return ''
        if (props.precision !== undefined) {
          currentValue = currentValue.toFixed(props.precision)
        }
      }
      return currentValue
    })
    const toPrecision = (num: number, pre?: number) => {
      if (pre === undefined) pre = numPrecision.value
      return parseFloat(
        `${Math.round(num * Math.pow(10, pre)) / Math.pow(10, pre)}`
      )
    }
    const getPrecision = (value: number | undefined) => {
      if (value === undefined) return 0
      const valueString = value.toString()
      const dotPosition = valueString.indexOf('.')
      let precision = 0
      if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1
      }
      return precision
    }
    const _increase = (val: number) => {
      if (!isNumber(val)) return data.currentValue
      const precisionFactor = Math.pow(10, numPrecision.value)
      // Solve the accuracy problem of JS decimal calculation by converting the value to integer.
      val = isNumber(val) ? val : NaN
      return toPrecision(
        (precisionFactor * val + precisionFactor * props.step) / precisionFactor
      )
    }
    const _decrease = (val: number) => {
      if (!isNumber(val)) return data.currentValue
      const precisionFactor = Math.pow(10, numPrecision.value)
      // Solve the accuracy problem of JS decimal calculation by converting the value to integer.
      val = isNumber(val) ? val : NaN
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
    const setCurrentValue = (newVal: number) => {
      const oldVal = data.currentValue
      if (typeof newVal === 'number' && props.precision !== undefined) {
        newVal = toPrecision(newVal, props.precision)
      }
      if (newVal !== undefined && newVal >= props.max) newVal = props.max
      if (newVal !== undefined && newVal <= props.min) newVal = props.min
      if (oldVal === newVal) return
      if (!isNumber(newVal)) {
        newVal = NaN
      }
      data.userInput = null
      emit('update:modelValue', newVal)
      emit('input', newVal)
      emit('change', newVal, oldVal)
      data.currentValue = newVal
    }
    const handleInput = (value: string) => {
      return (data.userInput = value)
    }
    const handleInputChange = (value: string) => {
      const newVal = Number(value)
      if ((isNumber(newVal) && !Number.isNaN(newVal)) || value === '') {
        setCurrentValue(newVal)
      }
      data.userInput = null
    }

    const focus = () => {
      input.value?.focus?.()
    }

    const blur = () => {
      input.value?.blur?.()
    }

    watch(
      () => props.modelValue,
      (value) => {
        let newVal = Number(value)
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
        if (newVal !== undefined && newVal > props.max) {
          newVal = props.max
          emit('update:modelValue', newVal)
        }
        if (newVal !== undefined && newVal < props.min) {
          newVal = props.min
          emit('update:modelValue', newVal)
        }
        data.currentValue = newVal
        data.userInput = null
      },
      { immediate: true }
    )
    onMounted(() => {
      const innerInput = input.value?.input as HTMLInputElement
      innerInput.setAttribute('role', 'spinbutton')
      innerInput.setAttribute('aria-valuemax', String(props.max))
      innerInput.setAttribute('aria-valuemin', String(props.min))
      innerInput.setAttribute('aria-valuenow', String(data.currentValue))
      innerInput.setAttribute(
        'aria-disabled',
        String(inputNumberDisabled.value)
      )
      if (!isNumber(props.modelValue)) {
        emit('update:modelValue', Number(props.modelValue))
      }
    })
    onUpdated(() => {
      const innerInput = input.value?.input
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
