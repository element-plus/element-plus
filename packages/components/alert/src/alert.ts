import { TypeComponentsMap, buildProps, keysOf } from '@element-plus/utils-v2'
import type { ExtractPropTypes } from 'vue'
import type Alert from './alert.vue'

export const alertEffects = ['light', 'dark'] as const

export const alertProps = buildProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    values: keysOf(TypeComponentsMap),
    default: 'info',
  },
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
  effect: {
    type: String,
    values: alertEffects,
    default: 'light',
  },
} as const)
export type AlertProps = ExtractPropTypes<typeof alertProps>

export const alertEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type AlertEmits = typeof alertEmits

export type AlertInstance = InstanceType<typeof Alert>
