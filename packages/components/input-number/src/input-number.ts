import { isNil } from 'lodash-unified'
import { useSizeProp } from '@element-plus/hooks'
import { buildProps, isNumber } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'
import type InputNumber from './input-number.vue'

export const inputNumberProps = buildProps({
  id: String,
  step: {
    type: Number,
    default: 1,
  },
  stepStrictly: Boolean,
  max: {
    type: Number,
    default: Number.POSITIVE_INFINITY,
  },
  min: {
    type: Number,
    default: Number.NEGATIVE_INFINITY,
  },
  modelValue: Number,
  disabled: Boolean,
  size: useSizeProp,
  controls: {
    type: Boolean,
    default: true,
  },
  controlsPosition: {
    type: String,
    default: '',
    values: ['', 'right'],
  },
  valueOnClear: {
    type: [String, Number, null],
    validator: (val: 'min' | 'max' | number | null) =>
      val === null || isNumber(val) || ['min', 'max'].includes(val),
    default: null,
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
export type InputNumberProps = ExtractPropTypes<typeof inputNumberProps>

export const inputNumberEmits = {
  change: (prev: number | undefined, cur: number | undefined) => prev !== cur,
  blur: (e: FocusEvent) => e instanceof FocusEvent,
  focus: (e: FocusEvent) => e instanceof FocusEvent,
  input: (val: number | null | undefined) => isNumber(val) || isNil(val),
  'update:modelValue': (val: number | undefined) => isNumber(val) || isNil(val),
}
export type InputNumberEmits = typeof inputNumberEmits

export type InputNumberInstance = InstanceType<typeof InputNumber>
