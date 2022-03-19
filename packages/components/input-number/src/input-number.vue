<template>
  <div
    :class="[
      ns.b(),
      ns.m(inputNumberSize),
      ns.is('disabled', inputNumberDisabled),
      ns.is('without-controls', !controls),
      ns.is('controls-right', controlsAtRight),
    ]"
    @dragstart.prevent
  >
    <span
      v-if="controls"
      v-repeat-click="decrease"
      role="button"
      :class="[ns.e('decrease'), ns.is('disabled', minDisabled)]"
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
      role="button"
      :class="[ns.e('increase'), ns.is('disabled', maxDisabled)]"
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
      :validate-event="false"
      @keydown.up.prevent="increase"
      @keydown.down.prevent="decrease"
      @blur="handleBlur"
      @focus="handleFocus"
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
import {
  useDisabled,
  useFormItem,
  useSize,
  useNamespace,
} from '@element-plus/hooks'
import ElInput from '@element-plus/components/input'
import { isNumber, isUndefined, debugWarn } from '@element-plus/utils'
import { ArrowUp, ArrowDown, Plus, Minus } from '@element-plus/icons-vue'
import { inputNumberProps, inputNumberEmits } from './input-number'

import type { ComponentPublicInstance } from 'vue'

interface IData {
  currentValue: number | undefined
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
    const { formItem } = useFormItem()
    const ns = useNamespace('input-number')

    const minDisabled = computed(
      () => ensurePrecision(props.modelValue, -1) < props.min
    )
    const maxDisabled = computed(
      () => ensurePrecision(props.modelValue) > props.max
    )

    const numPrecision = computed(() => {
      const stepPrecision = getPrecision(props.step)
      if (!isUndefined(props.precision)) {
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
      let currentValue: number | string | undefined = data.currentValue
      if (isNumber(currentValue)) {
        if (Number.isNaN(currentValue)) return ''
        if (!isUndefined(props.precision)) {
          currentValue = currentValue.toFixed(props.precision)
        }
      }
      return currentValue
    })
    const toPrecision = (num: number, pre?: number) => {
      if (isUndefined(pre)) pre = numPrecision.value
      return Number.parseFloat(`${Math.round(num * 10 ** pre) / 10 ** pre}`)
    }
    const getPrecision = (value: number | undefined) => {
      if (isUndefined(value)) return 0
      const valueString = value.toString()
      const dotPosition = valueString.indexOf('.')
      let precision = 0
      if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1
      }
      return precision
    }
    const ensurePrecision = (val: number, coefficient: 1 | -1 = 1) => {
      if (!isNumber(val)) return data.currentValue
      // Solve the accuracy problem of JS decimal calculation by converting the value to integer.
      val = isNumber(val) ? val : Number.NaN
      return toPrecision(val + props.step * coefficient)
    }
    const increase = () => {
      if (inputNumberDisabled.value || maxDisabled.value) return
      const value = props.modelValue || 0
      const newVal = ensurePrecision(value)
      setCurrentValue(newVal)
    }
    const decrease = () => {
      if (inputNumberDisabled.value || minDisabled.value) return
      const value = props.modelValue || 0
      const newVal = ensurePrecision(value, -1)
      setCurrentValue(newVal)
    }
    const verifyValue = (
      value: number | string | undefined,
      update?: boolean
    ): number | undefined => {
      let newVal = isUndefined(value) ? value : Number(value)
      if (!isUndefined(newVal) && !Number.isNaN(newVal)) {
        const { max, min, step, precision, stepStrictly } = props
        if (stepStrictly) {
          newVal = Math.round(newVal / step) * step
        }
        if (!isUndefined(precision)) {
          newVal = toPrecision(newVal, precision)
        }
        if (newVal > max || newVal < min) {
          newVal = newVal > max ? max : min
          update && emit('update:modelValue', newVal)
        }
      }
      return newVal
    }
    const setCurrentValue = (value: number | string | undefined) => {
      const oldVal = data.currentValue
      const newVal = verifyValue(value)
      if (oldVal === newVal) return
      data.userInput = null
      emit('update:modelValue', newVal)
      emit('input', newVal)
      emit('change', newVal, oldVal)
      formItem?.validate?.('change').catch((err) => debugWarn(err))
      data.currentValue = newVal
    }
    const handleInput = (value: string) => {
      return (data.userInput = value)
    }
    const handleInputChange = (value: string) => {
      const newVal = value !== '' ? Number(value) : ''
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

    const handleFocus = (event: MouseEvent | FocusEvent) => {
      emit('focus', event)
    }

    const handleBlur = (event: MouseEvent | FocusEvent) => {
      emit('blur', event)
      formItem?.validate?.('blur').catch((err) => debugWarn(err))
    }

    watch(
      () => props.modelValue,
      (value) => {
        const newVal = verifyValue(value, true)
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
        let val: number | undefined = Number(props.modelValue)
        if (Number.isNaN(val)) {
          val = undefined
        }
        emit('update:modelValue', val)
      }
    })
    onUpdated(() => {
      const innerInput = input.value?.input
      innerInput?.setAttribute('aria-valuenow', data.currentValue)
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
      handleFocus,
      handleBlur,
      ns,
    }
  },
})
</script>
