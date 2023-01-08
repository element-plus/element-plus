import { buildProps, iconPropType } from '@element-plus/utils'
import { CircleClose, Clock } from '@element-plus/icons-vue'
import { useSizeProp } from '@element-plus/hooks'
import type TimeSelect from './time-select.vue'
import type { ExtractPropTypes, PropType } from 'vue'

export const timeSelectProps = buildProps({
  format: {
    type: String,
    default: 'HH:mm',
  },
  modelValue: String,
  disabled: Boolean,
  editable: {
    type: Boolean,
    default: true,
  },
  effect: {
    type: String as PropType<'light' | 'dark' | string>,
    default: 'light',
  },
  clearable: {
    type: Boolean,
    default: true,
  },
  size: useSizeProp,
  placeholder: String,
  start: {
    type: String,
    default: '09:00',
  },
  end: {
    type: String,
    default: '18:00',
  },
  step: {
    type: String,
    default: '00:30',
  },
  minTime: String,
  maxTime: String,
  name: String,
  prefixIcon: {
    type: iconPropType,
    default: () => Clock,
  },
  clearIcon: {
    type: iconPropType,
    default: () => CircleClose,
  },
} as const)

export type TimeSelectProps = ExtractPropTypes<typeof timeSelectProps>

export type TimeSelectInstance = InstanceType<typeof TimeSelect>
