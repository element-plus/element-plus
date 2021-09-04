import { isValidComponentSize } from '@element-plus/utils/validators'

import type { PropType } from 'vue'
import type { Options } from '@popperjs/core'
import type { ComponentSize } from '@element-plus/utils/types'

export const timePickerDefaultProps = {
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
    type: String,
    default: 'el-icon-circle-close',
  },
  editable: {
    type: Boolean,
    default: true,
  },
  prefixIcon: {
    type: String,
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
    type: [Date, Array, String] as PropType<string | Date | Date[]>,
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
  validateEvent: {
    type: Boolean,
    default: true,
  },
  unlinkPanels: Boolean,
}
