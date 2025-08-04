import { placements } from '@popperjs/core'
import { CommonProps } from '@element-plus/components/cascader-panel'
import { buildProps, definePropType, isBoolean } from '@element-plus/utils'
import { useEmptyValuesProps, useSizeProp } from '@element-plus/hooks'
import { useTooltipContentProps } from '@element-plus/components/tooltip'
import { tagProps } from '@element-plus/components/tag'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'

import type {
  CascaderNode,
  CascaderValue,
} from '@element-plus/components/cascader-panel'
import type { Placement, PopperEffect } from '@element-plus/components/popper'

export const cascaderProps = buildProps({
  ...CommonProps,
  /**
   * @description size of input
   */
  size: useSizeProp,
  /**
   * @description placeholder of input
   */
  placeholder: String,
  /**
   * @description whether Cascader is disabled
   */
  disabled: Boolean,
  /**
   * @description whether selected value can be cleared
   */
  clearable: Boolean,
  /**
   * @description whether the options can be searched
   */
  filterable: Boolean,
  /**
   * @description customize search logic, the first parameter is `node`, the second is `keyword`, and need return a boolean value indicating whether it hits.
   */
  filterMethod: {
    type: definePropType<(node: CascaderNode, keyword: string) => boolean>(
      Function
    ),
    default: (node: CascaderNode, keyword: string) =>
      node.text.includes(keyword),
  },
  /**
   * @description option label separator
   */
  separator: {
    type: String,
    default: ' / ',
  },
  /**
   * @description whether to display all levels of the selected value in the input
   */
  showAllLevels: {
    type: Boolean,
    default: true,
  },
  /**
   * @description whether to collapse tags in multiple selection mode
   */
  collapseTags: Boolean,
  /**
   * @description The max tags number to be shown. To use this, collapse-tags must be true
   */
  maxCollapseTags: {
    type: Number,
    default: 1,
  },
  /**
   * @description native input id
   */
  collapseTagsTooltip: Boolean,
  /**
   * @description The max height of collapse tags tooltip, in pixels. To use this, collapse-tags-tooltip must be true
   */
  maxCollapseTagsTooltipHeight: {
    type: [String, Number],
  },
  /**
   * @description debounce delay when typing filter keyword, in milliseconds
   */
  debounce: {
    type: Number,
    default: 300,
  },
  /**
   * @description hook function before filtering with the value to be filtered as its parameter. If `false` is returned or a `Promise` is returned and then is rejected, filtering will be aborted
   */
  beforeFilter: {
    type: definePropType<(value: string) => boolean | Promise<any>>(Function),
    default: () => true,
  },
  /**
   * @description position of dropdown
   */
  placement: {
    type: definePropType<Placement>(String),
    values: placements,
    default: 'bottom-start',
  },
  /**
   * @description list of possible positions for dropdown
   */
  fallbackPlacements: {
    type: definePropType<Placement[]>(Array),
    default: ['bottom-start', 'bottom', 'top-start', 'top', 'right', 'left'],
  },
  /**
   * @description custom class name for Cascader's dropdown
   */
  popperClass: {
    type: String,
    default: '',
  },
  /**
   * @description whether cascader popup is teleported
   */
  teleported: useTooltipContentProps.teleported,
  /**
   * @description tooltip theme, built-in theme: `dark` / `light`
   */
  effect: {
    type: definePropType<PopperEffect>(String),
    default: 'light',
  },
  /**
   * @description tag type
   */
  // eslint-disable-next-line vue/require-prop-types
  tagType: { ...tagProps.type, default: 'info' },
  /**
   * @description tag effect
   */
  tagEffect: { ...tagProps.effect, default: 'light' },
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true,
  },
  /**
   * @description when dropdown is inactive and `persistent` is `false`, dropdown will be destroyed
   */
  persistent: {
    type: Boolean,
    default: true,
  },
  /**
   * @description Use `parent` when you want things tidy (like "Entire Collection" instead of listing 100 items)
   * Use `child` when every single item matters (like important settings)
   */
  showCheckedStrategy: {
    type: String,
    values: ['parent', 'child'],
    default: 'child',
  },
  /**
   * @description whether to check or uncheck node when clicking on the node
   */
  checkOnClickNode: Boolean,
  /**
   * @description whether to show the radio or checkbox prefix
   */
  showPrefix: {
    type: Boolean,
    default: true,
  },
  ...useEmptyValuesProps,
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emitChangeFn = (value: CascaderValue | null | undefined) => true

export const cascaderEmits = {
  [UPDATE_MODEL_EVENT]: emitChangeFn,
  [CHANGE_EVENT]: emitChangeFn,
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  clear: () => true,
  visibleChange: (val: boolean) => isBoolean(val),
  expandChange: (val: CascaderValue) => !!val,
  removeTag: (val: CascaderNode['valueByOption']) => !!val,
}

// Type name is taken(cascader-panel/src/node), needs discussion
// export type CascaderProps = ExtractPropTypes<typeof cascaderProps>

export type CascaderEmits = typeof cascaderEmits
