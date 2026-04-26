import { buildProps, isBoolean } from '@element-plus/utils'
import { CHANGE_EVENT } from '@element-plus/constants'

import type CheckTag from './check-tag.vue'
import type { ExtractPublicPropTypes } from 'vue'

export interface CheckTagProps {
  /**
   * @description is checked
   */
  checked?: boolean
  /**
   * @description whether the check-tag is disabled
   */
  disabled?: boolean
  /**
   * @description type of Tag
   */
  type?: 'primary' | 'success' | 'info' | 'warning' | 'danger'
}

/**
 * @deprecated Removed after 3.0.0, Use `CheckTagProps` instead.
 */
export const checkTagProps = buildProps({
  /**
   * @description is checked
   */
  checked: Boolean,
  /**
   * @description whether the check-tag is disabled
   */
  disabled: Boolean,
  /**
   * @description type of Tag
   */
  type: {
    type: String,
    values: ['primary', 'success', 'info', 'warning', 'danger'],
    default: 'primary',
  },
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `CheckTagProps` instead.
 */
export type CheckTagPropsPublic = ExtractPublicPropTypes<typeof checkTagProps>

export const checkTagEmits = {
  'update:checked': (value: boolean) => isBoolean(value),
  [CHANGE_EVENT]: (value: boolean) => isBoolean(value),
}
export type CheckTagEmits = typeof checkTagEmits

export type CheckTagInstance = InstanceType<typeof CheckTag> & unknown
