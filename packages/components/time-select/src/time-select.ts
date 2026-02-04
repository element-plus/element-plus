import { buildProps, definePropType } from '@element-plus/utils'
import { CircleClose, Clock } from '@element-plus/icons-vue'
import { useEmptyValuesProps, useSizeProp } from '@element-plus/hooks'

import type { UseEmptyValuesProps } from '@element-plus/hooks'
import type { PopperEffect } from '@element-plus/components/popper'
import type TimeSelect from './time-select.vue'
import type { CSSProperties, Component, ExtractPublicPropTypes } from 'vue'
import type { ComponentSize } from '@element-plus/constants'
import type { IconPropType } from '@element-plus/utils'

export interface TimeSelectProps extends UseEmptyValuesProps {
  /**
   * @description set format of time
   */
  format?: string
  /**
   * @description binding value
   */
  modelValue?: string | null
  /**
   * @description whether TimeSelect is disabled
   */
  disabled?: boolean
  /**
   * @description whether the input is editable
   */
  editable?: boolean
  /**
   * @description Tooltip theme, built-in theme: `dark` / `light`
   */
  effect?: PopperEffect
  /**
   * @description whether to show clear button
   */
  clearable?: boolean
  /**
   * @description size of Input
   */
  size?: ComponentSize
  /**
   * @description placeholder in non-range mode
   */
  placeholder?: string
  /**
   * @description start time
   */
  start?: string
  /**
   * @description end time
   */
  end?: string
  /**
   * @description time step
   */
  step?: string
  /**
   * @description minimum time, any time before this time will be disabled
   */
  minTime?: string | null
  /**
   * @description maximum time, any time after this time will be disabled
   */
  maxTime?: string | null
  /**
   * @description whether `end` is included in options
   */
  includeEndTime?: boolean
  /**
   * @description same as `name` in native input
   */
  name?: string
  /**
   * @description custom prefix icon component
   */
  prefixIcon?: IconPropType
  /**
   * @description custom clear icon component
   */
  clearIcon?: IconPropType
  /**
   * @description custom class name for TimeSelect's dropdown
   */
  popperClass?: string
  /**
   * @description custom style for TimeSelect's dropdown
   */
  popperStyle?: string | CSSProperties
}

/**
 * @deprecated Removed after 3.0.0, Use `TimeSelectProps` instead.
 */
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
  modelValue: {
    type: definePropType<string | null>(String),
  },
  /**
   * @description whether TimeSelect is disabled
   */
  disabled: {
    type: Boolean,
    default: undefined,
  },
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
  minTime: {
    type: definePropType<string | null>(String),
  },
  /**
   * @description maximum time, any time after this time will be disabled
   */
  maxTime: {
    type: definePropType<string | null>(String),
  },
  /**
   * @description whether `end` is included in options
   */
  includeEndTime: Boolean,
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
  /**
   * @description custom class name for TimeSelect's dropdown
   */
  popperClass: {
    type: String,
    default: '',
  },
  /**
   * @description custom style for TimeSelect's dropdown
   */
  popperStyle: {
    type: definePropType<string | CSSProperties>([String, Object]),
  },
  ...useEmptyValuesProps,
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `TimeSelectProps` instead.
 */
export type TimeSelectPropsPublic = ExtractPublicPropTypes<
  typeof timeSelectProps
>

export type TimeSelectInstance = InstanceType<typeof TimeSelect> & unknown
