import {
  NOOP,
  buildProps,
  definePropType,
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

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
import type Autocomplete from './autocomplete.vue'
import type { Placement } from '@element-plus/components/popper'
import type { Awaitable } from '@element-plus/utils'

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
  popperClass: {
    type: String,
    default: '',
  },
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
} as const)
export type AutocompleteProps = ExtractPropTypes<typeof autocompleteProps>
export type AutocompletePropsPublic = __ExtractPublicPropTypes<
  typeof autocompleteProps
>

export const autocompleteEmits = {
  [UPDATE_MODEL_EVENT]: (value: string) => isString(value),
  [INPUT_EVENT]: (value: string) => isString(value),
  [CHANGE_EVENT]: (value: string) => isString(value),
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  clear: () => true,
  select: (item: Record<string, any>) => isObject(item),
}
export type AutocompleteEmits = typeof autocompleteEmits

export type AutocompleteInstance = InstanceType<typeof Autocomplete> & unknown
