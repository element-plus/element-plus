import {
  buildProps,
  componentSize,
  definePropType,
} from '@element-plus/utils/props'
import { CircleClose } from '@element-plus/icons'
import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '@element-plus/utils/constants'
import type { Component, ExtractPropTypes } from 'vue'

export const selectProps = buildProps({
  name: String,
  id: String,
  modelValue: {
    type: [Array, String, Number, Boolean, Object],
    default: undefined,
  },
  autocomplete: {
    type: String,
    default: 'off',
  },
  automaticDropdown: Boolean,
  size: {
    type: String,
    values: componentSize,
  },
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  allowCreate: Boolean,
  loading: Boolean,
  popperClass: {
    type: String,
    default: '',
  },
  remote: Boolean,
  loadingText: String,
  noMatchText: String,
  noDataText: String,
  remoteMethod: Function,
  filterMethod: Function,
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: 0,
  },
  placeholder: {
    type: String,
  },
  defaultFirstOption: Boolean,
  reserveKeyword: Boolean,
  valueKey: {
    type: String,
    default: 'value',
  },
  collapseTags: Boolean,
  popperAppendToBody: {
    type: Boolean,
    default: true,
  },
  clearIcon: {
    type: definePropType<string | Component>([String, Object]),
    default: CircleClose as any,
  },
  fitInputWidth: {
    type: Boolean,
    default: false,
  },
} as const)
export type SelectProps = ExtractPropTypes<typeof selectProps>

export const selectEmits = {
  [UPDATE_MODEL_EVENT]: (val: any) => val,
  [CHANGE_EVENT]: (val: any) => val,
  'remove-tag': (val: any) => val,
  'visible-change': (val: any) => val,
  clear: () => true,
  focus: (evt: Event) => evt instanceof Event,
  blur: (evt: Event) => evt instanceof Event,
}
export type SelectEmits = typeof selectEmits
