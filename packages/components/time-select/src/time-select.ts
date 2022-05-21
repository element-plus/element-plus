import { buildProps } from '@element-plus/utils'
import { componentSizes } from '@element-plus/constants'
import { CircleClose, Clock } from '@element-plus/icons-vue'
import type TimeSelect from './time-select.vue'
import type { ComponentSize } from '@element-plus/constants'
import type { Component, ExtractPropTypes, PropType } from 'vue'

export const timeSelectProps = buildProps({
  format: {
    type: String,
    default: 'HH:mm',
  },
  modelValue: String,
  disabled: {
    type: Boolean,
    default: false,
  },
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
  size: {
    type: String as PropType<ComponentSize>,
    values: componentSizes,
  },
  placeholder: {
    type: String,
  },
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
  minTime: {
    type: String,
  },
  maxTime: {
    type: String,
  },
  name: {
    type: String,
  },
  prefixIcon: {
    type: [String, Object] as PropType<string | Component>,
    default: () => Clock,
  },
  clearIcon: {
    type: [String, Object] as PropType<string | Component>,
    default: () => CircleClose,
  },
})

export type TimeSelectProps = ExtractPropTypes<typeof timeSelectProps>

export type TimeSelectInstance = InstanceType<typeof TimeSelect>
