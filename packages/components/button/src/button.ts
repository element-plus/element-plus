import { useSizeProp } from '@element-plus/hooks'
import { buildProps, definePropType } from '@element-plus/utils/props'
import type { ExtractPropTypes, Component } from 'vue'
import type button from './button.vue'

export const buttonType = [
  'default',
  'primary',
  'success',
  'warning',
  'info',
  'danger',
  'text',
  '',
] as const
export const buttonSize = ['', 'large', 'default', 'small'] as const
export const buttonNativeType = ['button', 'submit', 'reset'] as const

export const buttonProps = buildProps({
  size: useSizeProp,
  disabled: Boolean,
  type: {
    type: String,
    values: buttonType,
    default: '',
  },
  icon: {
    type: definePropType<string | Component>([String, Object]),
    default: '',
  },
  nativeType: {
    type: String,
    values: buttonNativeType,
    default: 'button',
  },
  loading: Boolean,
  plain: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean,
  color: String,
  autoInsertSpace: {
    type: Boolean,
    default: undefined,
  },
} as const)

export interface ButtonConfigContext {
  autoInsertSpace?: boolean
}

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonEmits = typeof buttonEmits

export type ButtonType = ButtonProps['type']
export type ButtonNativeType = ButtonProps['nativeType']

export type ButtonInstance = InstanceType<typeof button>
