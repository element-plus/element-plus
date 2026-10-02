import { definePropType } from '@element-plus/utils'
import { buttonProps } from './button'

import type { ExtractPublicPropTypes } from 'vue'
import type { ButtonProps } from './button'

export interface ButtonGroupProps {
  /**
   * @description control the size of buttons in this button-group
   */
  size?: ButtonProps['size']
  /**
   * @description control the type of buttons in this button-group
   */
  type?: ButtonProps['type']
  /**
   * @description display direction
   */
  direction?: 'horizontal' | 'vertical'
}

/**
 * @deprecated Removed after 3.0.0, Use `ButtonGroupProps` instead.
 */
export const buttonGroupProps = {
  /**
   * @description control the size of buttons in this button-group
   */
  size: buttonProps.size,
  /**
   * @description control the type of buttons in this button-group
   */
  type: buttonProps.type,
  /**
   * @description display direction
   */
  direction: {
    type: definePropType<'horizontal' | 'vertical'>(String),
    values: ['horizontal', 'vertical'],
    default: 'horizontal',
  },
} as const

/**
 * @deprecated Removed after 3.0.0, Use `ButtonGroupProps` instead.
 */
export type ButtonGroupPropsPublic = ExtractPublicPropTypes<
  typeof buttonGroupProps
>
