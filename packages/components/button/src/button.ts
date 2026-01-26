import { useSizeProp } from '@element-plus/hooks'
import { buildProps, definePropType, iconPropType } from '@element-plus/utils'
import { Loading } from '@element-plus/icons-vue'

import type { Component, ExtractPublicPropTypes } from 'vue'
import type { ComponentSize } from '@element-plus/constants'

export const buttonTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  /**
   * @deprecated
   * Text type will be deprecated in the next major version (3.0.0)
   */
  'text',
  '',
] as const
export const buttonNativeTypes = ['button', 'submit', 'reset'] as const

export type ButtonType = (typeof buttonTypes)[number]
export type ButtonNativeType = (typeof buttonNativeTypes)[number]

export interface ButtonProps {
  /**
   * @description button size
   */
  size?: ComponentSize
  /**
   * @description disable the button
   */
  disabled?: boolean
  /**
   * @description button type
   */
  type?: ButtonType
  /**
   * @description icon component
   */
  icon?: string | Component
  /**
   * @description native button type
   */
  nativeType?: ButtonNativeType
  /**
   * @description determine whether it's loading
   */
  loading?: boolean
  /**
   * @description customize loading icon component
   */
  loadingIcon?: string | Component
  /**
   * @description determine whether it's a plain button
   */
  plain?: boolean
  /**
   * @description determine whether it's a text button
   */
  text?: boolean
  /**
   * @description determine whether it's a link button
   */
  link?: boolean
  /**
   * @description determine whether the text button background color is always on
   */
  bg?: boolean
  /**
   * @description native button autofocus
   */
  autofocus?: boolean
  /**
   * @description determine whether it's a round button
   */
  round?: boolean
  /**
   * @description determine whether it's a circle button
   */
  circle?: boolean
  /**
   * @description custom button color, automatically calculate `hover` and `active` color
   */
  color?: string
  /**
   * @description dark mode, which automatically converts `color` to dark mode colors
   */
  dark?: boolean
  /**
   * @description automatically insert a space between two chinese characters
   */
  autoInsertSpace?: boolean
  /**
   * @description custom element tag
   */
  tag?: string | Component
}

/**
 * @deprecated Removed after 3.0.0, Use `ButtonProps` instead.
 */
export const buttonProps = buildProps({
  /**
   * @description button size
   */
  size: useSizeProp,
  /**
   * @description disable the button
   */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @description button type
   */
  type: {
    type: String,
    values: buttonTypes,
    default: '',
  },
  /**
   * @description icon component
   */
  icon: {
    type: iconPropType,
  },
  /**
   * @description native button type
   */
  nativeType: {
    type: String,
    values: buttonNativeTypes,
    default: 'button',
  },
  /**
   * @description determine whether it's loading
   */
  loading: Boolean,
  /**
   * @description customize loading icon component
   */
  loadingIcon: {
    type: iconPropType,
    default: () => Loading,
  },
  /**
   * @description determine whether it's a plain button
   */
  plain: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @description determine whether it's a text button
   */
  text: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @description determine whether it's a link button
   */
  link: Boolean,
  /**
   * @description determine whether the text button background color is always on
   */
  bg: Boolean,
  /**
   * @description native button autofocus
   */
  autofocus: Boolean,
  /**
   * @description determine whether it's a round button
   */
  round: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @description determine whether it's a circle button
   */
  circle: Boolean,
  /**
   * @description custom button color, automatically calculate `hover` and `active` color
   */
  color: String,
  /**
   * @description dark mode, which automatically converts `color` to dark mode colors
   */
  dark: Boolean,
  /**
   * @description automatically insert a space between two chinese characters
   */
  autoInsertSpace: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @description custom element tag
   */
  tag: {
    type: definePropType<string | Component>([String, Object]),
    default: 'button',
  },
} as const)
export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

/**
 * @deprecated Removed after 3.0.0, Use `ButtonProps` instead.
 */
export type ButtonPropsPublic = ExtractPublicPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits

export interface ButtonConfigContext {
  type?: ButtonProps['type']
  plain?: ButtonProps['plain']
  text?: ButtonProps['text']
  round?: ButtonProps['round']
  autoInsertSpace?: ButtonProps['autoInsertSpace']
}
