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
  valueKey: {
    type: String,
    default: 'value',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  debounce: {
    type: Number,
    default: 300,
  },
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
  fetchSuggestions: {
    type: definePropType<AutocompleteFetchSuggestions>([Function, Array]),
    default: NOOP,
  },
  popperClass: {
    type: String,
    default: '',
  },
  triggerOnFocus: {
    type: Boolean,
    default: true,
  },
  selectWhenUnmatched: {
    type: Boolean,
    default: false,
  },
  hideLoading: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
  },
  teleported: useTooltipContentProps.teleported,
  highlightFirstItem: {
    type: Boolean,
    default: false,
  },
  fitInputWidth: {
    type: Boolean,
    default: false,
  },
} as const)
export type AutocompleteProps = ExtractPropTypes<typeof autocompleteProps>

export const autocompleteEmits = {
  [UPDATE_MODEL_EVENT]: (value: string) => isString(value),
  [INPUT_EVENT]: (value: string) => isString(value),
  [CHANGE_EVENT]: (value: string) => isString(value),
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  clear: () => true,
  select: (item: { value: any }) => isObject(item),
}
export type AutocompleteEmits = typeof autocompleteEmits

export type AutocompleteInstance = InstanceType<typeof Autocomplete>
