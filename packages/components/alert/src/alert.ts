import { buildProp, keyOf } from '@element-plus/utils/props'
import type { ExtractPropTypes } from 'vue'

export type AlertEffect = 'light' | 'dark'

export const ALERT_TYPE_CLASSES_MAP = {
  success: 'el-icon-success',
  warning: 'el-icon-warning',
  error: 'el-icon-error',
  info: 'el-icon-info',
} as const

export const alertProps = {
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  type: buildProp({
    type: String,
    values: keyOf(ALERT_TYPE_CLASSES_MAP),
    default: 'info',
  } as const),
  closable: {
    type: Boolean,
    default: true,
  },
  closeText: {
    type: String,
    default: '',
  },
  showIcon: Boolean,
  center: Boolean,
  effect: buildProp({
    type: String,
    values: ['light', 'dark'],
    default: 'light',
  } as const),
} as const
export type AlertProps = ExtractPropTypes<typeof alertProps>

export const alertEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type AlertEmits = typeof alertEmits
