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
      <slot name="decrease-icon">
        <el-icon>
          <arrow-down v-if="controlsAtRight" />
          <minus v-else />
        </el-icon>
      </slot>
    </span>
    <span
      v-if="controls"
      v-repeat-click="increase"
      role="button"
      :aria-label="t('el.inputNumber.increase')"
      :class="[ns.e('increase'), ns.is('disabled', maxDisabled)]"
      @keydown.enter="increase"
    >
      <slot name="increase-icon">
        <el-icon>
          <arrow-up v-if="controlsAtRight" />
          <plus v-else />
        </el-icon>
      </slot>
    </span>
    <el-input
      :id="id"
      ref="input"
      type="number"
      :step="step"
      :model-value="displayValue"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="inputNumberDisabled"
      :size="inputNumberSize"
      :max="max"
      :min="min"
      :name="name"
      :aria-label="ariaLabel"
      :validate-event="false"
      @keydown.up.prevent="increase"
      @keydown.down.prevent="decrease"
      @blur="handleBlur"
      @focus="handleFocus"
      @input="handleInput"
      @change="handleInputChange"
    >
      <template v-if="$slots.prefix" #prefix>
        <slot name="prefix" />
      </template>
      <template v-if="$slots.suffix" #suffix>
        <slot name="suffix" />
      </template>
    </el-input>
  </div>
</template>
<script lang="ts" setup>
import { computed, onMounted, onUpdated, reactive, ref, watch } from 'vue'
import { isNil } from 'lodash-unified'
import { ElInput } from '@element-plus/components/input'
import { ElIcon } from '@element-plus/components/icon'
import {
  useFormDisabled,
  useFormItem,
  useFormSize,
} from '@element-plus/components/form'
import { vRepeatClick } from '@element-plus/directives'
import { useLocale, useNamespace } from '@element-plus/hooks'
import {
  debugWarn,
  isFirefox,
  isNumber,
  isString,
  isUndefined,
  throwError,
} from '@element-plus/utils'
import { ArrowDown, ArrowUp, Minus, Plus } from '@element-plus/icons-vue'
import {
  CHANGE_EVENT,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'
import { inputNumberEmits, inputNumberProps } from './input-number'

import type { InputInstance } from '@element-plus/components/input'

defineOptions({
  name: 'ElInputNumber',
})

const props = defineProps(inputNumberProps)
const emit = defineEmits(inputNumberEmits)

const { t } = useLocale()
const ns = useNamespace('input-number')
const input = ref<InputInstance>()

interface Data {
  currentValue: number | null | undefined
  userInput: null | number | string
}
const data = reactive<Data>({
  currentValue: props.modelValue,
  userInput: null,
})

const { formItem } = useFormItem()

const minDisabled = computed(
  () => isNumber(props.modelValue) && props.modelValue <= props.min
)
const maxDisabled = computed(
  () => isNumber(props.modelValue) && props.modelValue >= props.max
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

const inputNumberSize = useFormSize()
const inputNumberDisabled = useFormDisabled()

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
  if (pre === 0) return Math.round(num)
  let snum = String(num)
  const pointPos = snum.indexOf('.')
  if (pointPos === -1) return num
  const nums = snum.replace('.', '').split('')
  const datum = nums[pointPos + pre]
  if (!datum) return num
  const length = snum.length
  if (snum.charAt(length - 1) === '5') {
    snum = `${snum.slice(0, Math.max(0, length - 1))}6`
  }
  return Number.parseFloat(Number(snum).toFixed(pre))
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
  if (props.readonly || inputNumberDisabled.value || maxDisabled.value) return
  const value = Number(displayValue.value) || 0
  const newVal = ensurePrecision(value)
  setCurrentValue(newVal)
  emit(INPUT_EVENT, data.currentValue)
  setCurrentValueToModelValue()
}
const decrease = () => {
  if (props.readonly || inputNumberDisabled.value || minDisabled.value) return
  const value = Number(displayValue.value) || 0
  const newVal = ensurePrecision(value, -1)
  setCurrentValue(newVal)
  emit(INPUT_EVENT, data.currentValue)
  setCurrentValueToModelValue()
}
const verifyValue = (
  value: number | string | null | undefined,
  update?: boolean
): number | null | undefined => {
  const { max, min, step, precision, stepStrictly, valueOnClear } = props
  if (max < min) {
    throwError('InputNumber', 'min should not be greater than max.')
  }
  let newVal = Number(value)
  if (isNil(value) || Number.isNaN(newVal)) {
    return null
  }
  if (value === '') {
    if (valueOnClear === null) {
      return null
    }
    newVal = isString(valueOnClear) ? { min, max }[valueOnClear] : valueOnClear
  }
  if (stepStrictly) {
    newVal = toPrecision(Math.round(newVal / step) * step, precision)
    if (newVal !== value) {
      update && emit(UPDATE_MODEL_EVENT, newVal)
    }
  }
  if (!isUndefined(precision)) {
    newVal = toPrecision(newVal, precision)
  }
  if (newVal > max || newVal < min) {
    newVal = newVal > max ? max : min
    update && emit(UPDATE_MODEL_EVENT, newVal)
  }
  return newVal
}
const setCurrentValue = (
  value: number | string | null | undefined,
  emitChange = true
) => {
  const oldVal = data.currentValue
  const newVal = verifyValue(value)
  if (!emitChange) {
    emit(UPDATE_MODEL_EVENT, newVal!)
    return
  }
  if (oldVal === newVal && value) return
  data.userInput = null
  emit(UPDATE_MODEL_EVENT, newVal!)
  if (oldVal !== newVal) {
    emit(CHANGE_EVENT, newVal!, oldVal!)
  }
  if (props.validateEvent) {
    formItem?.validate?.('change').catch((err) => debugWarn(err))
  }
  data.currentValue = newVal
}
const handleInput = (value: string) => {
  data.userInput = value
  const newVal = value === '' ? null : Number(value)
  emit(INPUT_EVENT, newVal)
  setCurrentValue(newVal, false)
}
const handleInputChange = (value: string) => {
  const newVal = value !== '' ? Number(value) : ''
  if ((isNumber(newVal) && !Number.isNaN(newVal)) || value === '') {
    setCurrentValue(newVal)
  }
  setCurrentValueToModelValue()
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
  data.userInput = null
  // This is a Firefox-specific problem. When non-numeric content is entered into a numeric input box,
  // the content displayed on the page is not cleared after the value is cleared. #18533
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1398528
  if (isFirefox() && data.currentValue === null && input.value?.input) {
    input.value.input.value = ''
  }
  emit('blur', event)
  if (props.validateEvent) {
    formItem?.validate?.('blur').catch((err) => debugWarn(err))
  }
}

const setCurrentValueToModelValue = () => {
  if (data.currentValue !== props.modelValue) {
    data.currentValue = props.modelValue
  }
}
const handleWheel = (e: WheelEvent) => {
  if (document.activeElement === e.target) e.preventDefault()
}

watch(
  () => props.modelValue,
  (value, oldValue) => {
    const newValue = verifyValue(value, true)
    if (data.userInput === null && newValue !== oldValue) {
      data.currentValue = newValue
    }
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
  innerInput.setAttribute(
    'aria-valuenow',
    data.currentValue || data.currentValue === 0
      ? String(data.currentValue)
      : ''
  )
  innerInput.setAttribute('aria-disabled', String(inputNumberDisabled.value))
  if (!isNumber(modelValue) && modelValue != null) {
    let val: number | null = Number(modelValue)
    if (Number.isNaN(val)) {
      val = null
    }
    emit(UPDATE_MODEL_EVENT, val!)
  }
  innerInput.addEventListener('wheel', handleWheel, { passive: false })
})
onUpdated(() => {
  const innerInput = input.value?.input
  innerInput?.setAttribute('aria-valuenow', `${data.currentValue ?? ''}`)
})
defineExpose({
  /** @description get focus the input component */
  focus,
  /** @description remove focus the input component */
  blur,
})
</script>
