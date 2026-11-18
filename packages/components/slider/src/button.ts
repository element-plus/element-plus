import { placements } from '@popperjs/core'
import { buildProps, definePropType, isNumber } from '@element-plus/utils'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'

import type {
  ComponentPublicInstance,
  ExtractPropTypes,
  ExtractPublicPropTypes,
  Ref,
} from 'vue'
import type { ClassValue } from '@element-plus/utils'
import type Button from './button.vue'

export const sliderButtonProps = buildProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  vertical: Boolean,
  tooltipClass: {
    type: definePropType<ClassValue>([String, Array, Object, Boolean]),
    default: undefined,
  },
  placement: {
    type: String,
    values: placements,
    default: 'top',
  },
} as const)
export type SliderButtonProps = ExtractPropTypes<typeof sliderButtonProps>
export type SliderButtonPropsPublic = ExtractPublicPropTypes<
  typeof sliderButtonProps
>

export const sliderButtonEmits = {
  [UPDATE_MODEL_EVENT]: (value: number) => isNumber(value),
}
export type SliderButtonEmits = typeof sliderButtonEmits

export type SliderButtonInstance = ComponentPublicInstance<typeof Button>

export type ButtonRefs = Record<
  'firstButton' | 'secondButton',
  Ref<SliderButtonInstance | undefined>
>

export interface SliderButtonInitData {
  hovering: boolean
  dragging: boolean
  isClick: boolean
  startX: number
  currentX: number
  startY: number
  currentY: number
  startPosition: number
  newPosition: number
}
