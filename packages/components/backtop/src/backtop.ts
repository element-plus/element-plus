import { buildProps } from '@element-plus/utils'

import type { ExtractPublicPropTypes } from 'vue'

export interface BacktopProps {
  /**
   * @description the button will not show until the scroll height reaches this value.
   */
  visibilityHeight?: number
  /**
   * @description the target to trigger scroll.
   */
  target?: string
  /**
   * @description right distance.
   */
  right?: number
  /**
   * @description bottom distance.
   */
  bottom?: number
}

/**
 * @deprecated Removed after 3.0.0, Use `BacktopProps` instead.
 */
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
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `BacktopProps` instead.
 */
export type BacktopPropsPublic = ExtractPublicPropTypes<typeof backtopProps>

export const backtopEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type BacktopEmits = typeof backtopEmits
