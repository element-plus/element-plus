import { buttonProps } from '@element-plus/components/button'
import { QuestionFilled } from '@element-plus/icons'
import type { Component, ExtractPropTypes, PropType } from 'vue'

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
    type: [String, Object] as PropType<string | Component>,
    default: QuestionFilled,
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
