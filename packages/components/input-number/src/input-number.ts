import {
  buildProps,
  componentSize,
  definePropType,
} from '@element-plus/utils/props'

import type { ComponentSize } from '@element-plus/utils/types'

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
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: definePropType<ComponentSize>(String),
    values: componentSize,
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
    validator: (val: number) => val >= 0 && val === parseInt(`${val}`, 10),
  },
} as const)

export const inputNumberEmits = {
  change: (prev: number | undefined, cur: number | undefined) => prev !== cur,
  blur: (e: Event) => e instanceof Event,
  focus: (e: Event) => e instanceof Event,
  input: (val: number) => typeof val === 'number',
  'update:modelValue': (val: number | undefined) => typeof val !== undefined,
}
