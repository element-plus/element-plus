import { buildProps } from '@element-plus/utils'

import type { ExtractPublicPropTypes } from 'vue'
import type Arrow from './arrow.vue'

export interface PopperArrowProps {
  /**
   * @description arrow offset
   */
  arrowOffset?: number
}

/**
 * @deprecated Removed after 3.0.0, Use `PopperArrowProps` instead.
 */
export const popperArrowProps = buildProps({
  arrowOffset: {
    type: Number,
    default: 5,
  },
} as const)
/**
 * @deprecated Removed after 3.0.0, Use `PopperArrowProps` instead.
 */
export type PopperArrowPropsPublic = ExtractPublicPropTypes<
  typeof popperArrowProps
>

export const popperArrowPropsDefaults = {
  arrowOffset: 5,
} as const

export type PopperArrowInstance = InstanceType<typeof Arrow> & unknown

/** @deprecated use `popperArrowProps` instead, and it will be deprecated in the next major version */
export const usePopperArrowProps = popperArrowProps

/** @deprecated use `PopperArrowProps` instead, and it will be deprecated in the next major version */
export type UsePopperArrowProps = PopperArrowProps

/** @deprecated use `PopperArrowInstance` instead, and it will be deprecated in the next major version */
export type ElPopperArrowInstance = PopperArrowInstance
