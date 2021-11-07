import { buildProps, definePropType } from '@element-plus/utils/props'
import { UPDATE_VISIBLE_EVENT } from '@element-plus/utils/constants'
import type { ComponentPublicInstance, ExtractPropTypes } from 'vue'
import type {
  Placement,
  PositioningStrategy,
  Instance as PopperInstance,
  Options,
} from '@popperjs/core'
import type { Nullable } from '@element-plus/utils/types'

export enum Effect {
  DARK = 'dark',
  LIGHT = 'light',
}

export type RefElement = Nullable<HTMLElement>

export type ElementType = ComponentPublicInstance | HTMLElement

export type RefElementType = Nullable<ElementType>

export type Offset = [number, number] | number

export type { Placement, PositioningStrategy, PopperInstance, Options }

export type TriggerType = 'click' | 'hover' | 'focus' | 'manual'

export type Trigger = TriggerType | TriggerType[]

// the arrow size is an equailateral triangle with 10px side length, the 3rd side length ~ 14.1px
// adding a offset to the ceil of 4.1 should be 5 this resolves the problem of arrow overflowing out of popper.
export const popperProps = buildProps({
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
  effect: {
    type: definePropType<Effect>(String),
    default: Effect.DARK,
  },
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
  placement: {
    type: definePropType<Placement>(String),
    default: 'bottom',
  },
  popperClass: {
    type: String,
    default: '',
  },
  pure: {
    type: Boolean,
    default: false,
  },
  popperOptions: {
    type: definePropType<Partial<Options>>(Object),
  },
  showArrow: {
    type: Boolean,
    default: true,
  },
  strategy: {
    type: definePropType<PositioningStrategy>(String),
    default: 'fixed',
  },
  transition: {
    type: String,
    default: 'el-fade-in-linear',
  },
  trigger: {
    type: definePropType<Trigger>([String, Array]),
    default: 'hover',
  },
  visible: {
    type: Boolean,
    default: undefined,
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true,
  },
  gpuAcceleration: {
    type: Boolean,
    default: true,
  },
  fallbackPlacements: {
    type: definePropType<Placement[]>(Array),
    default: () => [],
  },
} as const)
export type PopperProps = ExtractPropTypes<typeof popperProps>

export const popperEmits = {
  [UPDATE_VISIBLE_EVENT]: (val: boolean) => typeof val === 'boolean',
  'after-enter': () => true,
  'after-leave': () => true,
  'before-enter': () => true,
  'before-leave': () => true,
}

export type PopperEmits = typeof popperEmits
