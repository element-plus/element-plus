import { placements } from '@popperjs/core'
import { CommonProps } from '@element-plus/components/cascader-panel'
import {
  buildProps,
  definePropType,
  iconPropType,
  isBoolean,
} from '@element-plus/utils'
import { useEmptyValuesProps, useSizeProp } from '@element-plus/hooks'
import { useTooltipContentProps } from '@element-plus/components/tooltip'
import { tagProps } from '@element-plus/components/tag'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { CircleClose } from '@element-plus/icons-vue'

import type { StyleValue } from 'vue'
import type { UseEmptyValuesProps } from '@element-plus/hooks'
import type { ComponentSize } from '@element-plus/constants'
import type { Placement, PopperEffect } from '@element-plus/components/popper'
import type {
  CascaderCommonProps,
  CascaderNode,
  CascaderValue,
} from '@element-plus/components/cascader-panel'
import type { TagProps } from '@element-plus/components/tag'
import type { IconPropType } from '@element-plus/utils'

type CascaderClassType = string | Record<string, boolean> | CascaderClassType[]

export interface CascaderComponentProps
  extends CascaderCommonProps, UseEmptyValuesProps {
  /**
   * @description size of input
   */
  size?: ComponentSize
  /**
   * @description placeholder of input
   */
  placeholder?: string
  /**
   * @description whether Cascader is disabled
   */
  disabled?: boolean
  /**
   * @description whether selected value can be cleared
   */
  clearable?: boolean
  /**
   * @description custom clear icon component
   */
  clearIcon?: IconPropType
  /**
   * @description whether the options can be searched
   */
  filterable?: boolean
  /**
   * @description customize search logic, the first parameter is `node`, the second is `keyword`, and need return a boolean value indicating whether it hits.
   */
  filterMethod?: (node: CascaderNode, keyword: string) => boolean
  /**
   * @description option label separator
   */
  separator?: string
  /**
   * @description whether to display all levels of the selected value in the input
   */
  showAllLevels?: boolean
  /**
   * @description whether to collapse tags in multiple selection mode
   */
  collapseTags?: boolean
  /**
   * @description The max tags number to be shown. To use this, collapse-tags must be true
   */
  maxCollapseTags?: number
  /**
   * @description whether show all selected tags when mouse hover text of collapse-tags. To use this, collapse-tags must be true
   */
  collapseTagsTooltip?: boolean
  /**
   * @description The max height of collapse tags tooltip, in pixels. To use this, collapse-tags-tooltip must be true
   */
  maxCollapseTagsTooltipHeight?: string | number
  /**
   * @description debounce delay when typing filter keyword, in milliseconds
   */
  debounce?: number
  /**
   * @description hook function before filtering with the value to be filtered as its parameter. If `false` is returned or a `Promise` is returned and then is rejected, filtering will be aborted
   */
  beforeFilter?: (value: string) => boolean | Promise<any>
  /**
   * @description position of dropdown
   */
  placement?: Placement
  /**
   * @description list of possible positions for dropdown
   */
  fallbackPlacements?: Placement[]
  /**
   * @description custom class name for Cascader's dropdown
   */
  popperClass?: CascaderClassType
  /**
   * @description custom style for Cascader's dropdown
   */
  popperStyle?: StyleValue
  /**
   * @description whether cascader popup is teleported
   */
  teleported?: boolean
  /**
   * @description tooltip theme, built-in theme: `dark` / `light`
   */
  effect?: PopperEffect
  /**
   * @description tag type
   */
  tagType?: TagProps['type']
  /**
   * @description tag effect
   */
  tagEffect?: TagProps['effect']
  /**
   * @description whether to trigger form validation
   */
  validateEvent?: boolean
  /**
   * @description when dropdown is inactive and `persistent` is `false`, dropdown will be destroyed
   */
  persistent?: boolean
  /**
   * @description Use `parent` when you want things tidy (like "Entire Collection" instead of listing 100 items)
   * Use `child` when every single item matters (like important settings)
   */
  showCheckedStrategy?: 'parent' | 'child'
  /**
   * @description whether to check or uncheck node when clicking on the node
   */
  checkOnClickNode?: boolean
  /**
   * @description whether to show the radio or checkbox prefix
   */
  showPrefix?: boolean
  /**
   * @description whether to enable virtual scrolling
   */
  virtualScroll?: boolean
  /**
   * @description node height for virtual scrolling
   */
  itemSize?: number
  /**
   * @description menu height for virtual scrolling
   */
  height?: number
  /**
   * @description whether the width of the suggestion panel is the same as the input, if the value is `number`, then the width is fixed
   */
  fitInputWidth?: boolean | number
}

/**
 * @deprecated Removed after 3.0.0, Use `CascaderComponentProps` instead.
 */
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
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @description whether selected value can be cleared
   */
  clearable: Boolean,
  /**
   * @description custom clear icon component
   */
  clearIcon: {
    type: iconPropType,
    default: CircleClose,
  },
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
   * @description whether show all selected tags when mouse hover text of collapse-tags. To use this, collapse-tags must be true
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
  popperClass: useTooltipContentProps.popperClass,
  /**
   * @description custom style for Cascader's dropdown
   */
  popperStyle: useTooltipContentProps.popperStyle,
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
  /**
   * @description whether to enable virtual scrolling
   */
  virtualScroll: {
    type: Boolean,
    default: false,
  },
  /**
   * @description node height for virtual scrolling
   */
  itemSize: {
    type: Number,
    default: 34,
  },
  /**
   * @description menu height for virtual scrolling
   */
  height: {
    type: Number,
    default: 204,
  },
  /**
   * @description whether the width of the suggestion panel is the same as the input, if the value is `number`, then the width is fixed
   */
  fitInputWidth: {
    type: [Boolean, Number],
    default: false,
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

export type CascaderEmits = typeof cascaderEmits
