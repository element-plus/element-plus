import { buildProp } from '@element-plus/utils/props'

import type { ExtractPropTypes } from 'vue'
import type {
  Placement,
  PositioningStrategy,
  Instance as PopperInstance,
  Options,
} from '@popperjs/core'

export enum Effect {
  DARK = 'dark',
  LIGHT = 'light',
}

export type RefElement = HTMLElement | undefined
export type Offset = [number, number] | number

export type { Placement, PositioningStrategy, PopperInstance, Options }

export type TriggerType = 'click' | 'hover' | 'focus' | 'manual'

export type Trigger = TriggerType | TriggerType[]

// duplicate export at index.ts
// export const DEFAULT_TRIGGER = 'hover'
const DEFAULT_FALLBACK_PLACEMENTS = []

export const popperProps = {
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
  autoClose: {
    type: Number,
    default: 0,
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
  style: Object,
  hideAfter: {
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
  effect: buildProp({
    type: String,
    values: Object.values(Effect),
    default: Effect.DARK,
  }),
  enterable: {
    type: Boolean,
    default: true,
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
    type: Number,
    default: 12,
  },
  placement: buildProp<Placement>({
    type: String,
    default: 'bottom',
  }),
  popperClass: {
    type: String,
    default: '',
  },
  pure: {
    type: Boolean,
    default: false,
  },
  // Once this option were given, the entire popper is under the users' control, top priority
  popperOptions: buildProp<Partial<Options>>({
    type: Object,
    default: () => ({}),
  }),
  showArrow: {
    type: Boolean,
    default: true,
  },
  strategy: buildProp<PositioningStrategy>({
    type: String,
    default: 'fixed',
  }),
  transition: {
    type: String,
    default: 'el-fade-in-linear',
  },
  trigger: buildProp<Trigger>({
    type: [String, Array],
    default: 'hover',
  }),
  visible: buildProp<boolean | undefined>({
    type: Boolean,
    default: undefined,
  }),
  stopPopperMouseEvent: {
    type: Boolean,
    default: true,
  },
  gpuAcceleration: {
    type: Boolean,
    default: true,
  },
  fallbackPlacements: buildProp<Placement[]>({
    type: Array,
    default: () => DEFAULT_FALLBACK_PLACEMENTS,
  }),
} as const
export type PopperProps = ExtractPropTypes<typeof popperProps>
