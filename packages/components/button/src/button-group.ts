import { definePropType } from '@element-plus/utils'
import { buttonProps } from './button'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'

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
export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>
export type ButtonGroupPropsPublic = __ExtractPublicPropTypes<
  typeof buttonGroupProps
>
