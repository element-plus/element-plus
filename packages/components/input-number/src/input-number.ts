import { buildProps, componentSize } from '@element-plus/utils/props'
import { isNumber } from '@element-plus/utils/util'

export const inputNumberProps = buildProps({
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
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    values: componentSize,
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
    validator: (val: number) => val >= 0 && val === parseInt(`${val}`, 10),
  },
} as const)

export const inputNumberEmits = {
  change: (prev: number, cur: number) => prev !== cur,
  blur: (e: FocusEvent) => e instanceof FocusEvent,
  focus: (e: FocusEvent) => e instanceof FocusEvent,
  input: (val: number) => isNumber(val),
  'update:modelValue': (val: number) => isNumber(val),
}
