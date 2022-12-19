import { NOOP } from '@vue/shared'
import {
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

import type { ExtractPropTypes } from 'vue'
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
  /**
   * @description 1
   */
  valueKey: {
    type: String,
    default: 'value',
  },
  /**
   * @description 1
   */
  modelValue: {
    type: [String, Number],
    default: '',
  },
  /**
   * @description 1
   */
  debounce: {
    type: Number,
    default: 300,
  },
  /**
   * @description the placeholder of Autocomplete
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
   * @description 1
   */
  fetchSuggestions: {
    type: definePropType<AutocompleteFetchSuggestions>([Function, Array]),
    default: NOOP,
  },
  /**
   * @description 1
   */
  popperClass: {
    type: String,
    default: '',
  },
  /**
   * @description 1
   */
  triggerOnFocus: {
    type: Boolean,
    default: true,
  },
  /**
   * @description 1
   */
  selectWhenUnmatched: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 1
   */
  hideLoading: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 1
   */
  label: {
    type: String,
  },
  teleported: useTooltipContentProps.teleported,
  /**
   * @description 1
   */
  highlightFirstItem: {
    type: Boolean,
    default: false,
  },
  /**
   * @description 1
   */
  fitInputWidth: {
    type: Boolean,
    default: false,
  },
  /**
   * @description whether to show clear button
   */
  clearable: {
    type: Boolean,
    default: false,
  },
  /**
   * @description whether to disable
   */
  disabled: {
    type: Boolean,
    default: false,
  },
  /**
   * @description same as `name` in native input
   */
  name: String,
} as const)
export type AutocompleteProps = ExtractPropTypes<typeof autocompleteProps>

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

export type AutocompleteInstance = InstanceType<typeof Autocomplete>
