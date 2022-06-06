import { isValidComponentSize } from '@element-plus/utils'
import { CircleClose } from '@element-plus/icons-vue'

import type { Component, PropType } from 'vue'
import type { Options } from '@popperjs/core'
import type { ComponentSize } from '@element-plus/constants'

export const timePickerDefaultProps = {
  id: {
    type: [Array, String],
  },
  name: {
    type: [Array, String],
    default: '',
  },
  popperClass: {
    type: String,
    default: '',
  },
  format: {
    type: String,
  },
  valueFormat: {
    type: String as PropType<string>,
  },
  type: {
    type: String,
    default: '',
  },
  clearable: {
    type: Boolean,
    default: true,
  },
  clearIcon: {
    type: [String, Object] as PropType<string | Component>,
    default: CircleClose,
  },
  editable: {
    type: Boolean,
    default: true,
  },
  prefixIcon: {
    type: [String, Object] as PropType<string | Component>,
    default: '',
  },
  size: {
    type: String as PropType<ComponentSize>,
    validator: isValidComponentSize,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    default: '',
  },
  popperOptions: {
    type: Object as PropType<Partial<Options>>,
    default: () => ({}),
  },
  modelValue: {
    type: [Date, Array, String, Number] as PropType<
      number | string | Date | (number | string | Date)[]
    >,
    default: '',
  },
  rangeSeparator: {
    type: String,
    default: '-',
  },
  startPlaceholder: String,
  endPlaceholder: String,
  defaultValue: {
    type: [Date, Array] as PropType<Date | Date[]>,
  },
  defaultTime: {
    type: [Date, Array] as PropType<Date | Date[]>,
  },
  isRange: {
    type: Boolean,
    default: false,
  },
  disabledHours: {
    type: Function,
  },
  disabledMinutes: {
    type: Function,
  },
  disabledSeconds: {
    type: Function,
  },
  disabledDate: {
    type: Function,
  },
  cellClassName: {
    type: Function,
  },
  shortcuts: {
    type: Array,
    default: () => [],
  },
  arrowControl: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: undefined,
  },
  tabindex: {
    type: [String, Number],
    default: 0,
  },
  validateEvent: {
    type: Boolean,
    default: true,
  },
  unlinkPanels: Boolean,
}
