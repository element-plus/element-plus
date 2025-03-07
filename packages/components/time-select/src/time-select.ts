import { buildProps, definePropType } from '@element-plus/utils'
import { CircleClose, Clock } from '@element-plus/icons-vue'
import { useEmptyValuesProps, useSizeProp } from '@element-plus/hooks'
import type { PopperEffect } from '@element-plus/components/popper'
import type TimeSelect from './time-select.vue'
import type { Component, ExtractPropTypes } from 'vue'

export const timeSelectProps = buildProps({
  /**
   * @description set format of time
   */
  format: {
    type: String,
    default: 'HH:mm',
  },
  /**
   * @description binding value
   */
  modelValue: String,
  /**
   * @description whether TimeSelect is disabled
   */
  disabled: Boolean,
  /**
   * @description whether the input is editable
   */
  editable: {
    type: Boolean,
    default: true,
  },
  /**
   * @description Tooltip theme, built-in theme: `dark` / `light`
   */
  effect: {
    type: definePropType<PopperEffect>(String),
    default: 'light',
  },
  /**
   * @description whether to show clear button
   */
  clearable: {
    type: Boolean,
    default: true,
  },
  /**
   * @description size of Input
   */
  size: useSizeProp,
  /**
   * @description placeholder in non-range mode
   */
  placeholder: String,
  /**
   * @description start time
   */
  start: {
    type: String,
    default: '09:00',
  },
  /**
   * @description end time
   */
  end: {
    type: String,
    default: '18:00',
  },
  /**
   * @description time step
   */
  step: {
    type: String,
    default: '00:30',
  },
  /**
   * @description minimum time, any time before this time will be disabled
   */
  minTime: String,
  /**
   * @description maximum time, any time after this time will be disabled
   */
  maxTime: String,
  /**
   * @description whether `end` is included in options
   */
  includeEndTime: {
    type: Boolean,
    default: false,
  },
  /**
   * @description same as `name` in native input
   */
  name: String,
  /**
   * @description custom prefix icon component
   */
  prefixIcon: {
    type: definePropType<string | Component>([String, Object]),
    default: () => Clock,
  },
  /**
   * @description custom clear icon component
   */
  clearIcon: {
    type: definePropType<string | Component>([String, Object]),
    default: () => CircleClose,
  },
  ...useEmptyValuesProps,
} as const)

export type TimeSelectProps = ExtractPropTypes<typeof timeSelectProps>

export type TimeSelectInstance = InstanceType<typeof TimeSelect>
