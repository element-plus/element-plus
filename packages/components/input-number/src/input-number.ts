import { buildProps, isNumber } from '@element-plus/utils'
import { componentSizes } from '@element-plus/constants'

export const inputNumberProps = buildProps({
  id: {
    type: String,
    default: undefined,
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
  blank: () => undefined,
  input: (val: number | undefined) => isNumber(val),
  'update:modelValue': (val: number | undefined) =>
    isNumber(val) || val === undefined,
}
