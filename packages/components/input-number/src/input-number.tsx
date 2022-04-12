import {
  type StyleValue,
  computed,
  defineComponent,
  onMounted,
  onUpdated,
  reactive,
  ref,
  watch,
  withModifiers,
} from 'vue'
import {
  buildProps,
  debugWarn,
  isNumber,
  isUndefined,
} from '@element-plus/utils'
import { EVENT_CODE, componentSizes } from '@element-plus/constants'

import { ElIcon } from '@element-plus/components/icon'
import { RepeatClick } from '@element-plus/directives'
import {
  useDisabled,
  useFormItem,
  useNamespace,
  useSize,
} from '@element-plus/hooks'
import ElInput from '@element-plus/components/input'
import { ArrowDown, ArrowUp, Minus, Plus } from '@element-plus/icons-vue'

import type { ComponentPublicInstance, Slot } from 'vue'

export const inputNumberProps = buildProps({
  type: {
    type: String,
    default: 'text',
  },
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
    default: Number.POSITIVE_INFINITY,
  },
  min: {
    type: Number,
    default: Number.NEGATIVE_INFINITY,
  },
  modelValue: {
    type: Number,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    values: componentSizes,
  },
  controls: {
    type: Boolean,
    default: true,
  },
  controlsPosition: {
    type: String,
    default: '',
    values: ['', 'right'],
  },
  name: String,
  label: String,
  placeholder: String,
  precision: {
    type: Number,
    validator: (val: number) =>
      val >= 0 && val === Number.parseInt(`${val}`, 10),
  },
} as const)

export const inputNumberEmits = {
  change: (prev: number | undefined, cur: number | undefined) => prev !== cur,
  blur: (e: FocusEvent) => e instanceof FocusEvent,
  focus: (e: FocusEvent) => e instanceof FocusEvent,
  input: (val: number | undefined) => isNumber(val),
  'update:modelValue': (val: number | undefined) =>
    isNumber(val) || val === undefined,
}

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
  setup(props, { emit, expose, slots }) {
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
      const { max, min, step, precision, stepStrictly } = props
      let newVal = Number(value)
      if (value === null) {
        newVal = Number.NaN
      }
      if (!Number.isNaN(newVal)) {
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
      let newVal = verifyValue(value)
      if (oldVal === newVal) return
      if (Number.isNaN(newVal)) {
        newVal = undefined
      }
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

    const handleKeyDown = (event: KeyboardEvent) => {
      const code = event.code
      if (code === EVENT_CODE.up) {
        event.preventDefault()
        increase()
      } else if (code === EVENT_CODE.down) {
        event.preventDefault()
        decrease()
      }
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

    expose({
      focus,
      blur,
    })

    return () => {
      const decreaseButton = (
        <span
          v-repeat-click={decrease}
          role="button"
          class={[ns.e('decrease'), ns.is('disabled', minDisabled.value)]}
          onKeydown={withModifiers(decrease, ['enter'])}
        >
          <el-icon>
            {controlsAtRight.value ? <arrow-down /> : <minus />}
          </el-icon>
        </span>
      )

      const increaseButton = (
        <span
          v-repeat-click={increase}
          role="button"
          class={[ns.e('increase'), ns.is('disabled', maxDisabled.value)]}
          onKeydown={withModifiers(increase, ['enter'])}
        >
          <el-icon>{controlsAtRight.value ? <arrow-up /> : <plus />}</el-icon>
        </span>
      )

      const inputSlots: Record<string, Slot | undefined> = {
        ...slots,
      }

      if (props.controls) {
        if (controlsAtRight.value) {
          inputSlots.suffix = () => [increaseButton, decreaseButton]
        } else {
          inputSlots.prefix = () => [decreaseButton]
          inputSlots.suffix = () => [increaseButton]
        }
      }

      return (
        <div
          class={[
            ns.b(),
            ns.m(inputNumberSize.value),
            ns.is('disabled', inputNumberDisabled.value),
            ns.is('without-controls', !props.controls),
            ns.is('controls-right', controlsAtRight.value),
          ]}
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          onDragstart={withModifiers(() => {}, ['prevent'])}
        >
          <ElInput
            ref={input}
            type={props.type}
            step={props.step}
            modelValue={displayValue.value}
            placeholder={props.placeholder}
            disabled={inputNumberDisabled.value}
            size={inputNumberSize.value}
            max={props.max}
            min={props.min}
            name={props.name}
            label={props.label}
            validateEvent={false}
            onKeydown={handleKeyDown}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onInput={handleInput}
            onChange={handleInputChange}
            v-slots={inputSlots}
          />
        </div>
      )
    }
  },
})
