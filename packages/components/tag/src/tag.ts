import { buildProps } from '@element-plus/utils'
import { componentSizes } from '@element-plus/constants'
import type Tag from './tag.vue'

import type { ExtractPropTypes } from 'vue'

export const tagProps = buildProps({
  /**
   * @description type of Tag
   */
  type: {
    type: String,
    values: ['primary', 'success', 'info', 'warning', 'danger'],
    default: 'primary',
  },
  /**
   * @description whether Tag can be removed
   */
  closable: Boolean,
  /**
   * @description whether to disable animations
   */
  disableTransitions: Boolean,
  /**
   * @description whether Tag has a highlighted border
   */
  hit: Boolean,
  /**
   * @description background color of the Tag
   */
  color: String,
  /**
   * @description size of Tag
   */
  size: {
    type: String,
    values: componentSizes,
  },
  /**
   * @description theme of Tag
   */
  effect: {
    type: String,
    values: ['dark', 'light', 'plain'],
    default: 'light',
  },
  /**
   * @description whether Tag is rounded
   */
  round: Boolean,
} as const)
export type TagProps = ExtractPropTypes<typeof tagProps>

export const tagEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type TagEmits = typeof tagEmits

export type TagInstance = InstanceType<typeof Tag>
