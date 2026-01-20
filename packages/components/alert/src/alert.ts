import { TypeComponentsMap, buildProps, keysOf } from '@element-plus/utils'

import type { ExtractPublicPropTypes } from 'vue'

export const alertEffects = ['light', 'dark'] as const

export interface AlertProps {
  /**
   * @description alert title.
   */
  title?: string
  /**
   * @description descriptive text.
   */
  description?: string
  /**
   * @description alert type.
   */
  type?: keyof typeof TypeComponentsMap
  /**
   * @description whether alert can be dismissed.
   */
  closable?: boolean
  /**
   * @description text for replacing x button
   */
  closeText?: string
  /**
   * @description whether show icon
   */
  showIcon?: boolean
  /**
   * @description should content be placed in center.
   */
  center?: boolean
  /**
   * @description theme style
   */
  effect?: 'light' | 'dark'
}

/**
 * @deprecated Removed after 3.0.0, Use `AlertProps` instead.
 */
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
} as const)
/**
 * @deprecated Removed after 3.0.0, Use `AlertProps` instead.
 */
export type AlertPropsPublic = ExtractPublicPropTypes<typeof alertProps>

export const alertEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type AlertEmits = typeof alertEmits
