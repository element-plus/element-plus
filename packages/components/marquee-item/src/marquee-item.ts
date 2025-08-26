import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'

export const marqueeItemProps = buildProps({
  /**
   * @description 项目标签
   */
  label: {
    type: String,
    default: '',
  },
} as const)

export type MarqueeItemProps = ExtractPropTypes<typeof marqueeItemProps>
export type MarqueeItemPropsPublic = ExtractPropTypes<typeof marqueeItemProps>

export const marqueeItemEmits = {
  click: () => true,
}

export type MarqueeItemEmits = typeof marqueeItemEmits

export type MarqueeItemInstance = {
  /** 项目标签 */
  label: string
}
