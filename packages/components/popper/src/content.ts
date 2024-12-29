import { placements } from '@popperjs/core'
import { buildProps, definePropType } from '@element-plus/utils'
import { useAriaProps } from '@element-plus/hooks'

import type { PopperEffect } from './popper'
import type { ExtractPropTypes, StyleValue } from 'vue'
import type { Options, Placement } from '@popperjs/core'
import type { Measurable } from './constants'
import type Content from './content.vue'

type ClassObjectType = Record<string, boolean>
type ClassType = string | ClassObjectType | ClassType[]

const POSITIONING_STRATEGIES = ['fixed', 'absolute'] as const

export interface CreatePopperInstanceParams {
  referenceEl: Measurable
  popperContentEl: HTMLElement
  arrowEl: HTMLElement | undefined
}

export const popperCoreConfigProps = buildProps({
  boundariesPadding: {
    type: Number,
    default: 0,
  },
  fallbackPlacements: {
    type: definePropType<Placement[]>(Array),
    default: undefined,
  },
  gpuAcceleration: {
    type: Boolean,
    default: true,
  },
  /**
   * @description offset of the Tooltip
   */
  offset: {
    type: Number,
    default: 12,
  },
  /**
   * @description position of Tooltip
   */
  placement: {
    type: String,
    values: placements,
    default: 'bottom',
  },
  /**
   * @description [popper.js](https://popper.js.org/docs/v2/) parameters
   */
  popperOptions: {
    type: definePropType<Partial<Options>>(Object),
    default: () => ({}),
  },
  strategy: {
    type: String,
    values: POSITIONING_STRATEGIES,
    default: 'absolute',
  },
} as const)
export type PopperCoreConfigProps = ExtractPropTypes<
  typeof popperCoreConfigProps
>

export const popperContentProps = buildProps({
  ...popperCoreConfigProps,
  id: String,
  style: {
    type: definePropType<StyleValue>([String, Array, Object]),
  },
  className: {
    type: definePropType<ClassType>([String, Array, Object]),
  },
  effect: {
    type: definePropType<PopperEffect>(String),
    default: 'dark',
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: true,
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: false,
  },
  trapping: {
    type: Boolean,
    default: false,
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
  triggerTargetEl: {
    type: definePropType<HTMLElement>(Object),
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: true,
  },
  virtualTriggering: Boolean,
  zIndex: Number,
  ...useAriaProps(['ariaLabel']),
} as const)
export type PopperContentProps = ExtractPropTypes<typeof popperContentProps>

export const popperContentEmits = {
  mouseenter: (evt: MouseEvent) => evt instanceof MouseEvent,
  mouseleave: (evt: MouseEvent) => evt instanceof MouseEvent,
  focus: () => true,
  blur: () => true,
  close: () => true,
}
export type PopperContentEmits = typeof popperContentEmits

export type PopperContentInstance = InstanceType<typeof Content>

/** @deprecated use `popperCoreConfigProps` instead, and it will be deprecated in the next major version */
export const usePopperCoreConfigProps = popperCoreConfigProps

/** @deprecated use `popperContentProps` instead, and it will be deprecated in the next major version */
export const usePopperContentProps = popperContentProps

/** @deprecated use `popperContentEmits` instead, and it will be deprecated in the next major version */
export const usePopperContentEmits = popperContentEmits

/** @deprecated use `PopperCoreConfigProps` instead, and it will be deprecated in the next major version */
export type UsePopperCoreConfigProps = PopperCoreConfigProps

/** @deprecated use `PopperContentProps` instead, and it will be deprecated in the next major version */
export type UsePopperContentProps = PopperContentProps

/** @deprecated use `PopperContentInstance` instead, and it will be deprecated in the next major version */
export type ElPopperArrowContent = PopperContentInstance
