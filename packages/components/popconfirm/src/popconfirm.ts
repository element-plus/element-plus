import { buttonType } from '@element-plus/components/button'
import { QuestionFilled } from '@element-plus/icons-vue'
import {
  buildProps,
  definePropType,
  iconPropType,
} from '@element-plus/utils-v2'
import { useTooltipContentProps } from '@element-plus/components/tooltip'
import type { Component, ExtractPropTypes } from 'vue'

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
    type: iconPropType,
    default: QuestionFilled as Component,
  },
  iconColor: {
    type: String,
    default: '#f90',
  },
  hideIcon: {
    type: Boolean,
    default: false,
  },
  hideAfter: {
    type: Number,
    default: 200,
  },
  onConfirm: {
    type: definePropType<(e: Event) => Promise<boolean> | boolean>(Function),
  },
  onCancel: {
    type: definePropType<(e: Event) => Promise<boolean> | boolean>(Function),
  },
  teleported: useTooltipContentProps.teleported,
} as const)
export type PopconfirmProps = ExtractPropTypes<typeof popconfirmProps>
