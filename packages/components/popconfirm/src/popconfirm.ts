import { buttonProps } from '@element-plus/components/button'

import type { ExtractPropTypes } from 'vue'

export const popconfirmProps = {
  title: {
    type: String,
  },
  confirmButtonText: {
    type: String,
  },
  cancelButtonText: {
    type: String,
  },
  confirmButtonType: {
    ...buttonProps.type,
    default: 'primary',
  },
  cancelButtonType: {
    ...buttonProps.type,
    default: 'text',
  },
  icon: {
    type: String,
    default: 'el-icon-question',
  },
  iconColor: {
    type: String,
    default: '#f90',
  },
  hideIcon: {
    type: Boolean,
    default: false,
  },
} as const
export type PopconfirmProps = ExtractPropTypes<typeof popconfirmProps>

export const popconfirmEmits = {
  confirm: () => true,
  cancel: () => true,
}
export type PopconfirmEmits = typeof popconfirmEmits
