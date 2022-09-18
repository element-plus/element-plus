import { placements } from '@popperjs/core'
import { useSizeProp } from '@element-plus/hooks'
import { buildProps, definePropType, iconPropType } from '@element-plus/utils'
import { useTooltipContentProps } from '@element-plus/components/tooltip'
import { CircleClose } from '@element-plus/icons-vue'
import { defaultProps } from './useProps'

import type { Option, OptionType } from './select.types'
import type { Props } from './useProps'
import type { Options, Placement } from '@element-plus/components/popper'

export const SelectProps = buildProps({
  allowCreate: Boolean,
  autocomplete: {
    type: definePropType<'none' | 'both' | 'list' | 'inline'>(String),
    default: 'none',
  },
  automaticDropdown: Boolean,
  clearable: Boolean,
  clearIcon: {
    type: iconPropType,
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
  modelValue: {
    type: definePropType<
      any[] | string | number | boolean | Record<string, any> | any
    >([Array, String, Number, Boolean, Object]),
  },
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
  props: {
    type: definePropType<Props>(Object),
    default: () => defaultProps,
  },
  valueKey: {
    type: String,
    default: 'value',
  },
  scrollbarAlwaysOn: {
    type: Boolean,
    default: false,
  },
  validateEvent: {
    type: Boolean,
    default: true,
  },
  placement: {
    type: definePropType<Placement>(String),
    values: placements,
    default: 'bottom-start',
  },
} as const)

export const OptionProps = buildProps({
  data: Array,
  disabled: Boolean,
  hovering: Boolean,
  item: {
    type: definePropType<Option>(Object),
    required: true,
  },
  index: Number,
  style: Object,
  selected: Boolean,
  created: Boolean,
} as const)
