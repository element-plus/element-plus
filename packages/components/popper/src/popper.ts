import { placements } from '@popperjs/core'
import { buildProps, definePropType } from '@element-plus/utils/props'

import type { ExtractPropTypes, StyleValue } from 'vue'
import type { Placement, Options } from '@popperjs/core'

const effects = ['light', 'dark'] as const
const triggers = ['click', 'contextmenu', 'hover', 'focus'] as const

export const Effect = {
  LIGHT: 'light',
  DARK: 'dark',
}

export type PopperEffect = typeof effects[number]
export type PopperTrigger = typeof triggers[number]
export type Measurable = {
  getBoundingClientRect: () => DOMRect
}

type ClassObjectType = Record<string, any>
type ClassType = string | ClassObjectType | ClassType[]

export const usePopperArrowProps = buildProps({
  arrowOffset: {
    type: Number,
    default: 5,
  },
})

export const usePopperCoreConfigProps = buildProps({
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
  strategy: {
    type: String,
    values: ['fixed', 'absolute'] as const,
    default: 'absolute',
  },
} as const)

export const usePopperProps = buildProps({
  autoClose: {
    type: Number,
    default: 0,
  },
  cutoff: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
} as const)

export const usePopperContentProps = buildProps({
  ...usePopperCoreConfigProps,
  style: { type: definePropType<StyleValue>([String, Array, Object]) },
  className: { type: definePropType<ClassType>([String, Array, Object]) },
  effect: {
    type: String,
    default: 'dark',
  },
  enterable: {
    type: Boolean,
    default: true,
  },
  pure: {
    type: Boolean,
  },
  popperClass: {
    type: definePropType<ClassType>([String, Array, Object]),
  },
  popperStyle: {
    type: definePropType<StyleValue>([String, Array, Object]),
  },
  referenceEl: {
    type: definePropType<HTMLElement>(Object),
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true,
  },
  zIndex: Number,
})

export const usePopperTriggerProps = buildProps({
  virtualRef: { type: definePropType<Measurable>(Object) },
  virtualTriggering: { type: Boolean },
})

export type UsePopperProps = ExtractPropTypes<typeof usePopperProps>
export type UsePopperCoreConfigProps = ExtractPropTypes<
  typeof usePopperCoreConfigProps
>
