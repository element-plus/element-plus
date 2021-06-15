import { isValidComponentSize } from '@element-plus/utils/validators'

import type { PropType } from 'vue'
import type { OptionType } from './select.types'

export const SelectProps = {
  allowCreate: Boolean,
  autocomplete: {
    type: String as PropType<'none' | 'both' | 'list' | 'inline'>,
    default: 'none',
  },
  automaticDropdown: Boolean,
  clearable: Boolean,
  clearIcon: {
    type: String,
    default: 'el-icon-circle-close',
  },
  collapseTags: Boolean,
  defaultFirstOption: Boolean,
  disabled: Boolean,
  estimatedOptionHeight: {
    type: Number,
    default: undefined,
  },
  filterable: Boolean,
  filterMethod: Function,
  height: {
    type: Number,
    default: 170, // 5 items by default
  },
  itemHeight: {
    type: Number,
    default: 34,
  },
  id: String,
  loading: Boolean,
  loadingText: String,
  label: String,
  modelValue: [Array, String, Number, Boolean, Object] as PropType<any[] | string | number | boolean | Record<string, any> | any>,
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: 0,
  },
  name: String,
  noDataText: String,
  noMatchText: String,
  remoteMethod: Function,
  reserveKeyword: Boolean,
  options: {
    type: Array as PropType<OptionType[]>,
    required: true,
  },
  placeholder: {
    type: String,
  },
  popperAppendToBody: {
    type: Boolean,
    default: true,
  },
  popperClass: {
    type: String,
    default: '',
  },
  popperOptions: {
    type: Object,
    default: () => ({}),
  },
  remote: Boolean,
  size: {
    type: String as PropType<ComponentSize>,
    validator: isValidComponentSize,
  },
  valueKey: {
    type: String,
    default: 'value',
  },
}
