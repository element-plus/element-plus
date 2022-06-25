import { definePropType } from '@element-plus/utils'
import { useTooltipContentProps } from '@element-plus/components/tooltip'
import { CircleClose } from '@element-plus/icons-vue'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'

import { useSizeProp } from '@element-plus/hooks'
import type Select from './select.vue'
import type { Component } from 'vue'
import type { OptionType } from './select.types'
import type { Options } from '@element-plus/components/popper'

export const SelectProps = {
  allowCreate: Boolean,
  autocomplete: {
    type: definePropType<'none' | 'both' | 'list' | 'inline'>(String),
    default: 'none',
  },
  automaticDropdown: Boolean,
  clearable: Boolean,
  clearIcon: {
    type: definePropType<string | Component>([String, Object]),
    default: CircleClose,
  },
  effect: {
    type: definePropType<'light' | 'dark' | string>(String),
    default: 'light',
  },
  collapseTags: Boolean,
  collapseTagsTooltip: {
    type: Boolean,
    default: false,
  },
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
  modelValue: definePropType<
    any[] | string | number | boolean | Record<string, any> | any
  >([Array, String, Number, Boolean, Object]),
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: 0,
  },
  name: String,
  noDataText: String,
  noMatchText: String,
  remoteMethod: Function,
  reserveKeyword: {
    type: Boolean,
    default: true,
  },
  options: {
    type: definePropType<OptionType[]>(Array),
    required: true,
  },
  placeholder: {
    type: String,
  },
  teleported: useTooltipContentProps.teleported,
  persistent: {
    type: Boolean,
    default: true,
  },
  popperClass: {
    type: String,
    default: '',
  },
  popperOptions: {
    type: definePropType<Partial<Options>>(Object),
    default: () => ({} as Partial<Options>),
  },
  remote: Boolean,
  size: useSizeProp,
  valueKey: {
    type: String,
    default: 'value',
  },
  scrollbarAlwaysOn: {
    type: Boolean,
    default: false,
  },
}

export const SelectEmits = [
  UPDATE_MODEL_EVENT,
  CHANGE_EVENT,
  'remove-tag',
  'clear',
  'visible-change',
  'focus',
  'blur',
]

export type SelectInstance = InstanceType<typeof Select>
