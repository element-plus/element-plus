import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type Arrow from './arrow.vue'

export const popperArrowProps = buildProps({
  arrowOffset: {
    type: Number,
    default: 5,
  },
} as const)
export type PopperArrowProps = ExtractPropTypes<typeof popperArrowProps>

export type PopperArrowInstance = InstanceType<typeof Arrow>

/** @deprecated use `popperArrowProps` instead, and it will be deprecated in the next major version */
export const usePopperArrowProps = popperArrowProps

/** @deprecated use `PopperArrowProps` instead, and it will be deprecated in the next major version */
export type UsePopperArrowProps = PopperArrowProps

/** @deprecated use `PopperArrowInstance` instead, and it will be deprecated in the next major version */
export type ElPopperArrowInstance = PopperArrowInstance
