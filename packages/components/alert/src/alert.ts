import { useDelayedToggleProps } from '@element-plus/hooks'
import {
  TypeComponentsMap,
  buildProps,
  isUndefined,
  keysOf,
} from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'

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
  ...useDelayedToggleProps,
} as const)
export type AlertProps = ExtractPropTypes<typeof alertProps>

export const alertEmits = {
  open: () => true,
  close: (evt?: Event) => isUndefined(evt) || evt instanceof Event,
}
export type AlertEmits = typeof alertEmits
