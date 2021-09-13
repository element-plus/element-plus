import { useFormItemProps } from '@element-plus/hooks'
import { buildProp } from '@element-plus/utils/props'

import type { ExtractPropTypes } from 'vue'

export const buttonType = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  'text',
] as const
export const buttonSize = ['', 'large', 'medium', 'small', 'mini'] as const
export const buttonNativeType = ['button', 'submit', 'reset'] as const

export const buttonProps = {
  ...useFormItemProps,
  type: buildProp({
    type: String,
    values: buttonType,
    default: 'default',
  } as const),
  icon: {
    type: String,
    default: '',
  },
  nativeType: buildProp({
    type: String,
    values: buttonNativeType,
    default: 'button',
  } as const),
  loading: Boolean,
  plain: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
} as const

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits

export type ButtonType = ButtonProps['type']
export type ButtonNativeType = ButtonProps['nativeType']
