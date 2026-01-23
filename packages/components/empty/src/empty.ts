import { buildProps } from '@element-plus/utils'

import type { ExtractPublicPropTypes } from 'vue'

export interface EmptyProps {
  /**
   * @description image URL of empty
   */
  image?: string
  /**
   * @description image size (width) of empty
   */
  imageSize?: number
  /**
   * @description description of empty
   */
  description?: string
}

/**
 * @deprecated Removed after 3.0.0, Use `EmptyProps` instead.
 */
export const emptyProps = buildProps({
  /**
   * @description image URL of empty
   */
  image: {
    type: String,
    default: '',
  },
  /**
   * @description image size (width) of empty
   */
  imageSize: Number,
  /**
   * @description description of empty
   */
  description: {
    type: String,
    default: '',
  },
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `EmptyProps` instead.
 */
export type EmptyPropsPublic = ExtractPublicPropTypes<typeof emptyProps>
