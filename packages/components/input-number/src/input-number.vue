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
      :aria-label="t('el.inputNumber.decrease')"
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
      :aria-label="t('el.inputNumber.increase')"
      :class="[ns.e('increase'), ns.is('disabled', maxDisabled)]"
      @keydown.enter="increase"
    >
      <el-icon>
        <arrow-up v-if="controlsAtRight" />
        <plus v-else />
      </el-icon>
    </span>
    <el-input
      :id="id"
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
  onMounted,
  onUpdated,
  reactive,
  ref,
  watch,
} from 'vue'
import { isNil } from 'lodash-unified'

import { ElIcon } from '@element-plus/components/icon'
import { RepeatClick } from '@element-plus/directives'
import {
  useDisabled,
  useFormItem,
  useLocale,
  useNamespace,
  useSize,
} from '@element-plus/hooks'
import ElInput from '@element-plus/components/input'
import { debugWarn, isNumber, isString, isUndefined } from '@element-plus/utils'
import { ArrowDown, ArrowUp, Minus, Plus } from '@element-plus/icons-vue'
import { inputNumberEmits, inputNumberProps } from './input-number'

import type { ComponentPublicInstance } from 'vue'

interface IData {
  currentValue: number | null | undefined
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
    const { t } = useLocale()
    const { formItem } = useFormItem()
    const ns = useNamespace('input-number')

    const minDisabled = computed(
      () =>
        isNumber(props.modelValue) &&
        ensurePrecision(props.modelValue, -1) < props.min
    )
    const maxDisabled = computed(
      () =>
        isNumber(props.modelValue) &&
        ensurePrecision(props.modelValue) > props.max
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
      let currentValue: number | string | undefined | null = data.currentValue
      if (isNil(currentValue)) return ''
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
      const digits = num.toString().split('.')
      if (digits.length > 1) {
        const integer = digits[0]
        const decimal = Math.round(+digits[1] / 10 ** (digits[1].length - pre))
        return Number.parseFloat(`${integer}.${decimal}`)
      }
      return Number.parseFloat(`${Math.round(num * 10 ** pre) / 10 ** pre}`)
    }
    const getPrecision = (value: number | null | undefined) => {
      if (isNil(value)) return 0
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
      value: number | string | null | undefined,
      update?: boolean
    ): number | null | undefined => {
      const { max, min, step, precision, stepStrictly, valueOnClear } = props
      let newVal = Number(value)
      if (isNil(value) || Number.isNaN(newVal)) {
        return null
      }
      if (value === '') {
        if (valueOnClear === null) {
          return null
        }
        newVal = isString(valueOnClear)
          ? { min, max }[valueOnClear]
          : valueOnClear
      }
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
      return newVal
    }
    const setCurrentValue = (value: number | string | null | undefined) => {
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
        data.currentValue = verifyValue(value, true)
        data.userInput = null
      },
      { immediate: true }
    )
    onMounted(() => {
      const { min, max, modelValue } = props
      const innerInput = input.value?.input as HTMLInputElement
      innerInput.setAttribute('role', 'spinbutton')
      if (Number.isFinite(max)) {
        innerInput.setAttribute('aria-valuemax', String(max))
      } else {
        innerInput.removeAttribute('aria-valuemax')
      }
      if (Number.isFinite(min)) {
        innerInput.setAttribute('aria-valuemin', String(min))
      } else {
        innerInput.removeAttribute('aria-valuemin')
      }
      innerInput.setAttribute('aria-valuenow', String(data.currentValue))
      innerInput.setAttribute(
        'aria-disabled',
        String(inputNumberDisabled.value)
      )
      if (!isNumber(modelValue) && modelValue != null) {
        let val: number | null = Number(modelValue)
        if (Number.isNaN(val)) {
          val = null
        }
        emit('update:modelValue', val)
      }
    })
    onUpdated(() => {
      const innerInput = input.value?.input
      innerInput?.setAttribute('aria-valuenow', data.currentValue)
    })
    return {
      t,
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
