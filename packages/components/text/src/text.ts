import { buildProps } from '@element-plus/utils'
import { componentSizes } from '@element-plus/constants'

import type { ExtractPropTypes } from 'vue'

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

export type TextProps = ExtractPropTypes<typeof textProps>
