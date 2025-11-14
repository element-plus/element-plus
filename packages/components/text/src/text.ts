import { buildProps, definePropType } from '@element-plus/utils'
import { componentSizes } from '@element-plus/constants'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
import type { ElTooltipProps } from '@element-plus/components/tooltip'

export interface EllipsisConfig {
  rows?: number
  tooltip?: Partial<ElTooltipProps> | string
}

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
  ellipsis: {
    type: definePropType<EllipsisConfig | boolean>([Object, Boolean]),
  },
} as const)

export type TextProps = ExtractPropTypes<typeof textProps>
export type TextPropsPublic = __ExtractPublicPropTypes<typeof textProps>
