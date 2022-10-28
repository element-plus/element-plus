import type { ExtractPropTypes } from 'vue'
import type Backtop from './backtop.vue'

export const backtopProps = {
  visibilityHeight: {
    type: Number,
    default: 200,
  },
  target: {
    type: String,
    default: '',
  },
  right: {
    type: Number,
    default: 40,
  },
  bottom: {
    type: Number,
    default: 40,
  },
} as const
export type BacktopProps = ExtractPropTypes<typeof backtopProps>

export const backtopEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type BacktopEmits = typeof backtopEmits

export type BacktopInstance = InstanceType<typeof Backtop>
