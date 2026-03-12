import { placements } from '@popperjs/core'
import { buildProps, definePropType } from '@element-plus/utils'
import { useAriaProps } from '@element-plus/hooks'
import { popperArrowProps, popperArrowPropsDefaults } from './arrow'

import type { PopperEffect } from './popper'
import type { ExtractPublicPropTypes, StyleValue } from 'vue'
import type { Options, Placement } from '@popperjs/core'
import type { Measurable } from './constants'
import type Content from './content.vue'
import type { PopperArrowProps } from './arrow'

type ClassObjectType = Record<string, boolean>
type ClassType = string | ClassObjectType | ClassType[]

const POSITIONING_STRATEGIES = ['fixed', 'absolute'] as const

export interface CreatePopperInstanceParams {
  referenceEl: Measurable
  popperContentEl: HTMLElement
  arrowEl: HTMLElement | undefined
}

export interface PopperCoreConfigProps {
  boundariesPadding?: number
  fallbackPlacements?: Placement[]
  gpuAcceleration?: boolean
  /**
   * @description offset of the Tooltip
   */
  offset?: number
  /**
   * @description position of Tooltip
   */
  placement?: Placement
  /**
   * @description [popper.js](https://popper.js.org/docs/v2/) parameters
   */
  popperOptions?: Partial<Options>
  strategy?: (typeof POSITIONING_STRATEGIES)[number]
}

/**
 * @deprecated Removed after 3.0.0, Use `PopperCoreConfigProps` instead.
 */
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

/**
 * @deprecated Removed after 3.0.0, Use `PopperCoreConfigProps` instead.
 */
export type PopperCoreConfigPropsPublic = ExtractPublicPropTypes<
  typeof popperCoreConfigProps
>

export interface PopperContentProps
  extends PopperCoreConfigProps, PopperArrowProps {
  id?: string
  style?: StyleValue
  className?: ClassType
  effect?: PopperEffect
  visible?: boolean
  enterable?: boolean
  pure?: boolean
  focusOnShow?: boolean
  trapping?: boolean
  popperClass?: ClassType
  popperStyle?: StyleValue
  referenceEl?: HTMLElement
  triggerTargetEl?: HTMLElement
  stopPopperMouseEvent?: boolean
  virtualTriggering?: boolean
  zIndex?: number
  ariaLabel?: string
  loop?: boolean
}

/**
 * @deprecated Removed after 3.0.0, Use `PopperContentProps` instead.
 */
export const popperContentProps = buildProps({
  ...popperCoreConfigProps,
  ...popperArrowProps,
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
  focusOnShow: Boolean,
  trapping: Boolean,
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
  loop: Boolean,
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `PopperContentProps` instead.
 */
export type PopperContentPropsPublic = ExtractPublicPropTypes<
  typeof popperContentProps
>

export const popperCoreConfigPropsDefaults = {
  boundariesPadding: 0,
  gpuAcceleration: true,
  offset: 12,
  placement: 'bottom',
  popperOptions: () => ({}),
  strategy: 'absolute',
} as const

export const popperContentPropsDefaults = {
  ...popperCoreConfigPropsDefaults,
  ...popperArrowPropsDefaults,
  effect: 'dark',
  enterable: true,
  stopPopperMouseEvent: true,
  visible: false,
  pure: false,
  focusOnShow: false,
  trapping: false,
  virtualTriggering: false,
  loop: false,
  style: undefined,
  popperStyle: undefined,
} as const

export const popperContentEmits = {
  mouseenter: (evt: MouseEvent) => evt instanceof MouseEvent,
  mouseleave: (evt: MouseEvent) => evt instanceof MouseEvent,
  focus: () => true,
  blur: () => true,
  close: () => true,
}
export type PopperContentEmits = typeof popperContentEmits

export type PopperContentInstance = InstanceType<typeof Content> & unknown

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
export type GPopperArrowContent = PopperContentInstance
