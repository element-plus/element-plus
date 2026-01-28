import {
  NOOP,
  buildProps,
  definePropType,
  isNumber,
  isObject,
  isString,
} from '@element-plus/utils'
import { useTooltipContentProps } from '@element-plus/components/tooltip'
import {
  CHANGE_EVENT,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'
import { inputProps } from '@element-plus/components/input'

import type { ExtractPublicPropTypes, Ref } from 'vue'
import type Autocomplete from './autocomplete.vue'
import type { Placement } from '@element-plus/components/popper'
import type { Awaitable } from '@element-plus/utils'
import type { InputInstance, InputProps } from '@element-plus/components/input'
import type {
  ElTooltipContentProps,
  TooltipInstance,
} from '@element-plus/components/tooltip'

export type AutocompleteData = Record<string, any>[]
export type AutocompleteFetchSuggestionsCallback = (
  data: AutocompleteData
) => void
export type AutocompleteFetchSuggestions =
  | ((
      queryString: string,
      cb: AutocompleteFetchSuggestionsCallback
    ) => Awaitable<AutocompleteData> | void)
  | AutocompleteData

export type AutocompletePlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'

export interface AutocompleteProps extends InputProps {
  /**
   * @description key name of the input suggestion object for display
   */
  valueKey?: string
  /**
   * @description binding value
   */
  modelValue?: string | number
  /**
   * @description debounce delay when typing, in milliseconds
   */
  debounce?: number
  /**
   * @description placement of the popup menu
   */
  placement?: AutocompletePlacement
  /**
   * @description a method to fetch input suggestions. When suggestions are ready, invoke `callback(data:[])` to return them to Autocomplete
   */
  fetchSuggestions?: AutocompleteFetchSuggestions
  /**
   * @description custom class name for autocomplete's dropdown
   */
  popperClass?: ElTooltipContentProps['popperClass']
  /**
   * @description custom style for autocomplete's dropdown
   */
  popperStyle?: ElTooltipContentProps['popperStyle']
  /**
   * @description whether show suggestions when input focus
   */
  triggerOnFocus?: boolean
  /**
   * @description whether to emit a `select` event on enter when there is no autocomplete match
   */
  selectWhenUnmatched?: boolean
  /**
   * @description whether to hide the loading icon in remote search
   */
  hideLoading?: boolean
  /**
   * @description whether select dropdown is teleported to the body
   */
  teleported?: ElTooltipContentProps['teleported']
  /**
   * @description which select dropdown appends to
   */
  appendTo?: ElTooltipContentProps['appendTo']
  /**
   * @description whether to highlight first item in remote search suggestions by default
   */
  highlightFirstItem?: boolean
  /**
   * @description whether the width of the dropdown is the same as the input
   */
  fitInputWidth?: boolean
  /**
   * @description whether keyboard navigation loops from end to start
   */
  loopNavigation?: boolean
}

/**
 * @deprecated Removed after 3.0.0, Use `AutocompleteProps` instead.
 */
export const autocompleteProps = buildProps({
  ...inputProps,
  /**
   * @description key name of the input suggestion object for display
   */
  valueKey: {
    type: String,
    default: 'value',
  },
  /**
   * @description binding value
   */
  modelValue: {
    type: [String, Number],
    default: '',
  },
  /**
   * @description debounce delay when typing, in milliseconds
   */
  debounce: {
    type: Number,
    default: 300,
  },
  /**
   * @description placement of the popup menu
   */
  placement: {
    type: definePropType<Placement>(String),
    values: [
      'top',
      'top-start',
      'top-end',
      'bottom',
      'bottom-start',
      'bottom-end',
    ],
    default: 'bottom-start',
  },
  /**
   * @description a method to fetch input suggestions. When suggestions are ready, invoke `callback(data:[])` to return them to Autocomplete
   */
  fetchSuggestions: {
    type: definePropType<AutocompleteFetchSuggestions>([Function, Array]),
    default: NOOP,
  },
  /**
   * @description custom class name for autocomplete's dropdown
   */
  popperClass: useTooltipContentProps.popperClass,
  /**
   * @description custom style for autocomplete's dropdown
   */
  popperStyle: useTooltipContentProps.popperStyle,
  /**
   * @description whether show suggestions when input focus
   */
  triggerOnFocus: {
    type: Boolean,
    default: true,
  },
  /**
   * @description whether to emit a `select` event on enter when there is no autocomplete match
   */
  selectWhenUnmatched: Boolean,
  /**
   * @description whether to hide the loading icon in remote search
   */
  hideLoading: Boolean,
  /**
   * @description whether select dropdown is teleported to the body
   */
  teleported: useTooltipContentProps.teleported,
  /**
   * @description which select dropdown appends to
   */
  appendTo: useTooltipContentProps.appendTo,
  /**
   * @description whether to highlight first item in remote search suggestions by default
   */
  highlightFirstItem: Boolean,
  /**
   * @description whether the width of the dropdown is the same as the input
   */
  fitInputWidth: Boolean,
  /**
   * @description whether keyboard navigation loops from end to start
   */
  loopNavigation: {
    type: Boolean,
    default: true,
  },
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `AutocompleteProps` instead.
 */
export type AutocompletePropsPublic = ExtractPublicPropTypes<
  typeof autocompleteProps
>

export const autocompleteEmits = {
  [UPDATE_MODEL_EVENT]: (value: string | number) =>
    isString(value) || isNumber(value),
  [INPUT_EVENT]: (value: string | number) => isString(value) || isNumber(value),
  [CHANGE_EVENT]: (value: string | number) =>
    isString(value) || isNumber(value),
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  clear: () => true,
  select: (item: Record<string, any>) => isObject(item),
}
export type AutocompleteEmits = typeof autocompleteEmits

export type AutocompleteExpose = {
  activated: Ref<boolean>
  blur: () => void
  close: () => void
  focus: () => void
  handleSelect: (item: any) => Promise<void>
  handleKeyEnter: () => Promise<void>
  highlightedIndex: Ref<number>
  highlight: (itemIndex: number) => void
  inputRef: Ref<InputInstance>
  loading: Ref<boolean>
  popperRef: Ref<TooltipInstance>
  suggestions: Ref<Record<string, any>[]>
  getData: (queryString: string) => Promise<void>
}

export type AutocompleteInstance = InstanceType<typeof Autocomplete> &
  AutocompleteExpose
