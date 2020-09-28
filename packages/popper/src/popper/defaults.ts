import { isArray } from '@element-plus/utils/util'
import {
  DEFAULT_TRIGGER,
} from '../usePopper'

import type { PropType } from 'vue'
import type { Placement, PositioningStrategy, Instance as PopperInstance, Options } from '@popperjs/core'

export enum Effect {
  DARK = 'dark',
  LIGHT = 'light'
}

export type RefElement = Nullable<HTMLElement>
export type Offset = [number, number] | number
export { Placement, PositioningStrategy, PopperInstance, Options }

export type TriggerType = 'click' | 'hover' | 'focus' | 'manual'
export type IPopperOptions = {
  arrowOffset: number
  boundariesPadding: number
  class: string
  closeDelay: number
  cutoff: boolean
  disabled: boolean
  enterable: boolean
  flip: boolean
  hideAfter: number
  manualMode: boolean
  offset: number
  placement: Placement
  popperOptions: Options
  showAfter: number
  showArrow: boolean
  strategy: PositioningStrategy
  tabIndex: string
  trigger: TriggerType[] | TriggerType
  visible: boolean
}

export default {
  // the arrow size is an equailateral triangle with 10px side length, the 3rd side length ~ 14.1px
  // adding a offset to the ceil of 4.1 should be 5 this resolves the problem of arrow overflowing out of popper.
  arrowOffset: {
    type: Number,
    default: 5,
  },
  appendToBody: {
    type: Boolean,
    default: true,
  },
  boundariesPadding: {
    type: Number,
    default: 0,
  },
  content: {
    type: String,
    default: '',
  },
  class: {
    type: String,
    default: '',
  },
  closeDelay: {
    type: Number,
    default: 200,
  },
  cutoff: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  effect: {
    type: String as PropType<Effect>,
    default: Effect.DARK,
  },
  enterable: {
    type: Boolean,
    default: true,
  },
  flip: {
    type: Boolean,
    default: true,
  },
  hideAfter: {
    type: Number,
    default: 0,
  },
  manualMode: {
    type: Boolean,
    default: false,
  },
  showAfter: {
    type: Number,
    default: 0,
  },
  offset: {
    type: [Number, Array] as PropType<Offset>,
    default: [0, 12] as Offset,
    validator: (val: Offset): boolean => {
      return (isArray(val) && val.length === 2) || typeof val === 'number'
    },
  },
  placement: {
    type: String as PropType<Placement>,
    default: 'bottom' as Placement,
  },
  popperClass: {
    type: String,
    default: '',
  },
  pure: {
    type: Boolean,
    default: false,
  },
  // Once this option were given, the entire popper is under the users' control, top priority
  popperOptions: {
    type: Object as PropType<Options>,
    default: () => null,
  },
  referrer: {
    type: HTMLElement as PropType<Nullable<HTMLElement>>,
    default: null,
  },
  showArrow: {
    type: Boolean,
    default: true,
  },
  strategy: {
    type: String as PropType<PositioningStrategy>,
    default: 'fixed' as PositioningStrategy,
  },
  transition: {
    type: String,
    default: 'el-fade-in-linear',
  },
  trigger: {
    type: [String, Array] as PropType<TriggerType | Array<TriggerType>>,
    default: DEFAULT_TRIGGER,
  },
  tabIndex: {
    type: String,
    default: '0',
  },
  visible: {
    type: Boolean,
    default: undefined,
  },
}
