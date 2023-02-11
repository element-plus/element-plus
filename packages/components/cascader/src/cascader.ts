import { CommonProps } from '@element-plus/components/cascader-panel'
import { buildProps, definePropType, isBoolean } from '@element-plus/utils'
import { useSizeProp } from '@element-plus/hooks'
import { useTooltipContentProps } from '@element-plus/components/tooltip'
import { tagProps } from '@element-plus/components/tag'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import type {
  CascaderNode,
  CascaderValue,
} from '@element-plus/components/cascader-panel'

export const cascaderProps = buildProps({
  ...CommonProps,
  size: useSizeProp,
  placeholder: String,
  disabled: Boolean,
  clearable: Boolean,
  filterable: Boolean,
  filterMethod: {
    type: definePropType<(node: CascaderNode, keyword: string) => boolean>(
      Function
    ),
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
    type: definePropType<(value: string) => boolean | Promise<any>>(Function),
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
})

export const cascaderEmits = {
  [UPDATE_MODEL_EVENT]: (val: CascaderValue) => !!val || val === null,
  [CHANGE_EVENT]: (val: CascaderValue) => !!val || val === null,
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  visibleChange: (val: boolean) => isBoolean(val),
  expandChange: (val: CascaderValue) => !!val,
  removeTag: (val: CascaderNode['valueByOption']) => !!val,
}

// Type name is taken(cascader-panel/src/node), needs discussion
// export type CascaderProps = ExtractPropTypes<typeof cascaderProps>

export type CascaderEmits = typeof cascaderEmits
