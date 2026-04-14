import { buildProps } from '@element-plus/utils'
import { componentSizes } from '@element-plus/constants'

import type { ExtractPublicPropTypes } from 'vue'
import type { ComponentSize } from '@element-plus/constants'

export interface TextProps {
  /**
   * @description text type
   */
  type?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | ''
  /**
   * @description text size
   */
  size?: ComponentSize
  /**
   * @description render ellipsis
   */
  truncated?: boolean
  /**
   * @description maximum lines
   */
  lineClamp?: number | string
  /**
   * @description custom element tag
   */
  tag?: string
}

/**
 * @deprecated Removed after 3.0.0, Use `TextProps` instead.
 */
export const textProps = buildProps({
  /**
   * @description text type
   */
  type: {
    type: String,
    values: ['primary', 'success', 'info', 'warning', 'danger', ''],
    default: '',
  },
  /**
   * @description text size
   */
  size: {
    type: String,
    values: componentSizes,
    default: '',
  },
  /**
   * @description render ellipsis
   */
  truncated: Boolean,
  /**
   * @description maximum lines
   */
  lineClamp: {
    type: [String, Number],
  },
  /**
   * @description custom element tag
   */
  tag: {
    type: String,
    default: 'span',
  },
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `TextProps` instead.
 */
export type TextPropsPublic = ExtractPublicPropTypes<typeof textProps>
