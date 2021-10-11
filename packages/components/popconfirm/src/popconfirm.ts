import { buttonType } from '@element-plus/components/button'
import { buildProps } from '@element-plus/utils/props'

import type { ExtractPropTypes } from 'vue'

export const popconfirmProps = buildProps({
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
    type: String,
    values: buttonType,
    default: 'primary',
  },
  cancelButtonType: {
    type: String,
    values: buttonType,
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
} as const)
export type PopconfirmProps = ExtractPropTypes<typeof popconfirmProps>

export const popconfirmEmits = {
  confirm: () => true,
  cancel: () => true,
}
export type PopconfirmEmits = typeof popconfirmEmits
