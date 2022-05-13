import { buildProps, definePropType } from '@element-plus/utils'
import type Ellipsis from './ellipsis.vue'
import type { ExtractPropTypes } from 'vue'

export const ellipsisProps = buildProps({
  /**
   * 缩略位置
   */
  placement: {
    type: String,
    values: ['left', 'center', 'right'],
    default: 'right',
  },
  /**
   * 缩略字符数
   */
  ellipsis: {
    type: Number,
    default: 5,
  },
  /**
   * 多行省略 显示行数
   */
  lineClamp: {
    type: [Number, String],
  },
  /**
   * 点击展开
   */
  expandTrigger: {
    type: Boolean,
    default: false,
  },
  /**
   * 提示显示内容
   */
  content: {
    type: String,
    default: '',
  },
  /**
   * 显示内容
   */
  text: {
    type: String,
    default: '',
  },
  toolTipOption: {
    type: definePropType<EllipisisTooltipOption>(Object),
    default: () => {
      return {
        placement: 'top',
      }
    },
  },
} as const)
export type ToolTipOptionObject = {
  placement?: string
  disabled?: boolean
  transition?: string
  showAfter?: number
  showArrow?: boolean
  hideAfter?: number
  popperClass?: string
  enterable?: boolean
  trigger?: string
  effect?: string
  offset?: number
}
export type EllipisisTooltipOption = ToolTipOptionObject
export type EllipsisProps = ExtractPropTypes<typeof ellipsisProps>
export type EllipsisInstance = InstanceType<typeof Ellipsis>
