import { isValidWidthUnit } from '@element-plus/utils/validators'
import { buildProp, definePropType } from '@element-plus/utils/props'
import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'

import type { ExtractPropTypes } from 'vue'

export const dialogProps = {
  appendToBody: {
    type: Boolean,
    default: false,
  },
  beforeClose: buildProp({
    type: definePropType<(...args: any[]) => void>(Function),
  }),
  destroyOnClose: {
    type: Boolean,
    default: false,
  },
  center: {
    type: Boolean,
    default: false,
  },
  customClass: {
    type: String,
    default: '',
  },
  closeOnClickModal: {
    type: Boolean,
    default: true,
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true,
  },
  fullscreen: {
    type: Boolean,
    default: false,
  },
  lockScroll: {
    type: Boolean,
    default: true,
  },
  modal: {
    type: Boolean,
    default: true,
  },
  showClose: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: '',
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
  width: buildProp({
    type: [String, Number],
    validator: isValidWidthUnit,
  }),
  zIndex: {
    type: Number,
  },
} as const
export type DialogProps = ExtractPropTypes<typeof dialogProps>

export const dialogEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  [UPDATE_MODEL_EVENT]: (value: boolean) => typeof value === 'boolean',
}
export type DialogEmits = typeof dialogEmits
