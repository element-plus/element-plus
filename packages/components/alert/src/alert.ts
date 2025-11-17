import { TypeComponentsMap, buildProps, keysOf } from '@element-plus/utils'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'

export const alertEffects = ['light', 'dark'] as const

export const alertProps = buildProps({
  /**
   * @description alert title.
   */
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  /**
   * @description alert type.
   */
  type: {
    type: String,
    values: keysOf(TypeComponentsMap),
    default: 'info',
  },
  /**
   * @description whether alert can be dismissed.
   */
  closable: {
    type: Boolean,
    default: true,
  },
  /**
   * @description text for replacing x button
   */
  closeText: {
    type: String,
    default: '',
  },
  /**
   * @description whether show icon
   */
  showIcon: Boolean,
  /**
   * @description should content be placed in center.
   */
  center: Boolean,
  effect: {
    type: String,
    values: alertEffects,
    default: 'light',
  },
  /**
   * @deprecated Removed after 2.11.8.
   * @description delay of appearance, in millisecond, not valid in controlled mode
   */
  showAfter: Number,
  /**
   * @deprecated Removed after 2.11.8.
   * @description delay of disappear, in millisecond, not valid in controlled mode
   */
  hideAfter: Number,
  /**
   * @deprecated Removed after 2.11.8.
   * @description disappear automatically, in millisecond, not valid in controlled mode
   */
  autoClose: Number,
} as const)
export type AlertProps = ExtractPropTypes<typeof alertProps>
export type AlertPropsPublic = __ExtractPublicPropTypes<typeof alertProps>

export const alertEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type AlertEmits = typeof alertEmits
