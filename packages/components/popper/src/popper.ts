import { placements } from '@popperjs/core'
import { buildProps, definePropType } from '@element-plus/utils/props'

import type { ExtractPropTypes, StyleValue } from 'vue'
import type { Placement, Options } from '@popperjs/core'

const effects = ['light', 'dark'] as const
const triggers = ['click', 'contextmenu', 'hover', 'focus', 'manual'] as const

export type PopperEffect = typeof effects[number]
export type PopperTrigger = typeof triggers[number]

type ClassObjectType = Record<string, any>
type ClassType = string | ClassObjectType | ClassType[]

export const usePopperCoreConfigProps = buildProps({
  arrowOffset: {
    type: Number,
    default: 5,
  },
  boundariesPadding: {
    type: Number,
    default: 0,
  },
  fallbackPlacements: {
    type: definePropType<Placement[]>(Array),
    default: () => [],
  },
  gpuAcceleration: {
    type: Boolean,
    default: true,
  },
  offset: {
    type: Number,
    default: 12,
  },
  placement: {
    type: String,
    values: placements,
    default: 'bottom',
  },
  popperOptions: {
    type: definePropType<Partial<Options>>(Object),
    default: () => ({}),
  },
  showArrow: {
    type: Boolean,
    default: true,
  },
  strategy: {
    type: String,
    values: ['fixed', 'absolute'] as const,
    default: 'absolute',
  },
} as const)

export const usePopperProps = buildProps({
  appendToBody: {
    type: Boolean,
    default: true,
  },
  autoClose: {
    type: Number,
    default: 0,
  },
  content: {
    type: String,
    default: '',
  },
  // attached to the root component
  class: {
    type: definePropType<ClassType>([String, Array, Object]),
    default: '',
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
    type: String,
    values: effects,
    default: 'dark',
  },
  enterable: {
    type: Boolean,
    default: true,
  },
  hideAfter: {
    type: Number,
    default: 200,
  },
  showAfter: {
    type: Number,
    default: 0,
  },
  manualMode: {
    type: Boolean,
    default: false,
  },
  pure: {
    type: Boolean,
    default: false,
  },
  persistent: {
    type: Boolean,
    default: false,
  },
  // attached to the popped up component wrapper
  popperClass: {
    type: definePropType<ClassType>([String, Array, Object]),
  },
  popperStyle: {
    type: definePropType<StyleValue>([String, Array, Object]),
  },
  // attached to the root component
  style: {
    type: definePropType<StyleValue>([String, Array, Object]),
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true,
  },
  teleported: {
    type: Boolean,
  },
  transition: {
    type: String,
    default: 'el-fade-in-linear',
  },
  trigger: {
    type: definePropType<string | PopperTrigger[]>([String, Array]),
    values: triggers,
    default: 'hover',
  },
  visible: {
    type: Boolean,
    default: null as any,
  },
  ...usePopperCoreConfigProps,
} as const)

export type UsePopperProps = ExtractPropTypes<typeof usePopperProps>
