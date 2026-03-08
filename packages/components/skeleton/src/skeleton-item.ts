import { buildProps } from '@element-plus/utils'

import type SkeletonItem from './skeleton-item.vue'
import type { ExtractPublicPropTypes } from 'vue'

export interface SkeletonItemProps {
  /**
   * @description the current rendering skeleton type
   */
  variant?:
    | 'circle'
    | 'rect'
    | 'h1'
    | 'h3'
    | 'text'
    | 'caption'
    | 'p'
    | 'image'
    | 'button'
}

/**
 * @deprecated Removed after 3.0.0, Use `SkeletonItemProps` instead.
 */
export const skeletonItemProps = buildProps({
  /**
   * @description the current rendering skeleton type
   */
  variant: {
    type: String,
    values: [
      'circle',
      'rect',
      'h1',
      'h3',
      'text',
      'caption',
      'p',
      'image',
      'button',
    ],
    default: 'text',
  },
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `SkeletonItemProps` instead.
 */
export type SkeletonItemPropsPublic = ExtractPublicPropTypes<
  typeof skeletonItemProps
>

export type SkeletonItemInstance = InstanceType<typeof SkeletonItem> & unknown
