import { Star, StarFilled } from '@element-plus/icons-vue'
import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import { buildProps, definePropType, mutable } from '@element-plus/utils/props'
import type { Component, ExtractPropTypes } from 'vue'

export const rateProps = buildProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  lowThreshold: {
    type: Number,
    default: 2,
  },
  highThreshold: {
    type: Number,
    default: 4,
  },
  max: {
    type: Number,
    default: 5,
  },
  colors: {
    type: definePropType<string[] | Record<number, string>>([Array, Object]),
    default: () => mutable(['#F7BA2A', '#F7BA2A', '#F7BA2A'] as const),
  },
  voidColor: {
    type: String,
    default: '#C6D1DE',
  },
  disabledVoidColor: {
    type: String,
    default: '#EFF2F7',
  },
  icons: {
    type: definePropType<
      Array<string | Component> | Record<number, string | Component>
    >([Array, Object]),
    default: () => [StarFilled, StarFilled, StarFilled],
  },
  voidIcon: {
    type: definePropType<string | Component>([String, Object]),
    default: () => Star,
  },
  disabledvoidIcon: {
    type: definePropType<string | Component>([String, Object]),
    default: () => StarFilled,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  allowHalf: {
    type: Boolean,
    default: false,
  },
  showText: {
    type: Boolean,
    default: false,
  },
  showScore: {
    type: Boolean,
    default: false,
  },
  textColor: {
    type: String,
    default: '#1f2d3d',
  },
  texts: {
    type: definePropType<string[]>([Array]),
    default: () =>
      mutable([
        'Extremely bad',
        'Disappointed',
        'Fair',
        'Satisfied',
        'Surprise',
      ] as const),
  },
  scoreTemplate: {
    type: String,
    default: '{value}',
  },
} as const)

export type RateProps = ExtractPropTypes<typeof rateProps>

export const rateEmits = {
  change: (value: number) => typeof value === 'number',
  [UPDATE_MODEL_EVENT]: (value: number) => typeof value === 'number',
}
export type RateEmits = typeof rateEmits
