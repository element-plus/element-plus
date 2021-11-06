import { buildProps, definePropType } from '@element-plus/utils/props'
import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import { isString } from '@element-plus/utils/util'
import { CircleClose, Clock } from '@element-plus/icons'
import type { Component, ExtractPropTypes } from 'vue'

export const timeSelectProps = buildProps({
  modelValue: String,
  disabled: {
    type: Boolean,
    default: false,
  },
  editable: {
    type: Boolean,
    default: true,
  },
  clearable: {
    type: Boolean,
    default: true,
  },
  size: {
    type: String,
    values: ['medium', 'small', 'mini'],
    default: 'medium',
  },
  placeholder: {
    type: String,
    default: '',
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
    default: '',
  },
  maxTime: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  prefixIcon: {
    type: definePropType<string | Component>([String, Object]),
    default: () => Clock,
  },
  clearIcon: {
    type: definePropType<string | Component>([String, Object]),
    default: () => CircleClose,
  },
})

export type TimeSelectProps = ExtractPropTypes<typeof timeSelectProps>

export const timeSelectEmits = {
  change: (value: string) => isString(value),
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  [UPDATE_MODEL_EVENT]: (value: string) => isString(value),
}

export type TimeSelectEmits = typeof timeSelectEmits
