import { NOOP } from '@vue/shared'
import {
  buildProps,
  definePropType,
  isObject,
  isString,
} from '@element-plus/utils'
import { useTooltipContentProps } from '@element-plus/components/tooltip'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import type { ExtractPropTypes } from 'vue'
import type Autocomplete from './autocomplete.vue'
import type { Placement } from '@element-plus/components/popper'
import type { Awaitable } from '@element-plus/utils'

export type AutoCompleteData = { value: string }[]
export type AutoCompleteFetchSuggestions =
  | ((
      queryString: string,
      cb: (data: AutoCompleteData) => void
    ) => Awaitable<AutoCompleteData> | void)
  | AutoCompleteData

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
    type: definePropType<AutoCompleteFetchSuggestions>([Function, Array]),
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
  popperAppendToBody: {
    type: Boolean,
    default: undefined,
  },
  teleported: useTooltipContentProps.teleported,
  highlightFirstItem: {
    type: Boolean,
    default: false,
  },
} as const)
export type AutocompleteProps = ExtractPropTypes<typeof autocompleteProps>

export const autocompleteEmits = {
  [UPDATE_MODEL_EVENT]: (value: string) => isString(value),
  input: (value: string) => isString(value),
  change: (value: string) => isString(value),
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  clear: () => true,
  select: (item: { value: any }) => isObject(item),
}
export type AutocompleteEmits = typeof autocompleteEmits

export type AutocompleteInstance = InstanceType<typeof Autocomplete>
