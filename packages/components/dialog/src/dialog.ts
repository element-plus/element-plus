import { buildProps, definePropType } from '@element-plus/utils'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { dialogContentProps } from './dialog-content'

import type { ExtractPropTypes } from 'vue'

export const dialogProps = buildProps({
  ...dialogContentProps,
  appendToBody: {
    type: Boolean,
    default: false,
  },
  beforeClose: {
    type: definePropType<(...args: any[]) => void>(Function),
  },
  destroyOnClose: {
    type: Boolean,
    default: false,
  },
  closeOnClickModal: {
    type: Boolean,
    default: true,
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true,
  },
  lockScroll: {
    type: Boolean,
    default: true,
  },
  modal: {
    type: Boolean,
    default: true,
  },
  openDelay: {
    type: Number,
    default: 0,
  },
  closeDelay: {
    type: Number,
    default: 0,
  },
  top: {
    type: String,
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
  modalClass: String,
  width: {
    type: [String, Number],
  },
  zIndex: {
    type: Number,
  },
} as const)

export type DialogProps = ExtractPropTypes<typeof dialogProps>

export const dialogEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  [UPDATE_MODEL_EVENT]: (value: boolean) => typeof value === 'boolean',
  openAutoFocus: () => true,
  closeAutoFocus: () => true,
}
export type DialogEmits = typeof dialogEmits
