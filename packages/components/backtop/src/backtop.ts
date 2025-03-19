import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'

export const backtopProps = buildProps({
  /**
   * @description the button will not show until the scroll height reaches this value.
   */
  visibilityHeight: {
    type: Number,
    default: 200,
  },
  /**
   * @description the target to trigger scroll.
   */
  target: {
    type: String,
    default: '',
  },
  /**
   * @description right distance.
   */
  right: {
    type: Number,
    default: 40,
  },
  /**
   * @description bottom distance.
   */
  bottom: {
    type: Number,
    default: 40,
  },
})
export type BacktopProps = ExtractPropTypes<typeof backtopProps>

export const backtopEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type BacktopEmits = typeof backtopEmits
