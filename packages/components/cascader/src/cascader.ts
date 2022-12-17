import { CommonProps } from '@element-plus/components/cascader-panel'
import { isBoolean, isValidComponentSize } from '@element-plus/utils'
import { useTooltipContentProps } from '@element-plus/components/tooltip'
import { tagProps } from '@element-plus/components/tag'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import type { ComponentSize } from '@element-plus/constants'
import type { ExtractPropTypes, PropType } from 'vue'
import type {
  CascaderNode,
  CascaderValue,
} from '@element-plus/components/cascader-panel'
import type Cascader from './cascader.vue'

export const cascaderProps = {
  ...CommonProps,
  size: {
    type: String as PropType<ComponentSize>,
    validator: isValidComponentSize,
  },
  placeholder: {
    type: String,
  },
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  filterMethod: {
    type: Function as PropType<
      (node: CascaderNode, keyword: string) => boolean
    >,
    default: (node: CascaderNode, keyword: string) =>
      node.text.includes(keyword),
  },
  separator: {
    type: String,
    default: ' / ',
  },
  showAllLevels: {
    type: Boolean,
    default: true,
  },
  collapseTags: Boolean,
  collapseTagsTooltip: {
    type: Boolean,
    default: false,
  },
  debounce: {
    type: Number,
    default: 300,
  },
  beforeFilter: {
    type: Function as PropType<(value: string) => boolean | Promise<any>>,
    default: () => true,
  },
  popperClass: {
    type: String,
    default: '',
  },
  teleported: useTooltipContentProps.teleported,
  // eslint-disable-next-line vue/require-prop-types
  tagType: { ...tagProps.type, default: 'info' },
  validateEvent: {
    type: Boolean,
    default: true,
  },
}

export const cascaderEmits = {
  [UPDATE_MODEL_EVENT]: (val: CascaderValue) => !!val,
  [CHANGE_EVENT]: (val: CascaderValue) => !!val,
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  'visible-change': (val: boolean) => isBoolean(val),
  'expand-change': (val: CascaderValue) => !!val,
  'remove-tag': (val: CascaderNode['valueByOption']) => !!val,
}

// Type name is taken, needs discussion
// export type CascaderProps = ExtractPropTypes<typeof cascaderProps>

export type CascaderEmits = typeof cascaderEmits

export type CascaderInstance = InstanceType<typeof Cascader>
