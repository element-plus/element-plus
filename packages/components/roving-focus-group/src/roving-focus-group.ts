import type {
  ExtractPropTypes,
  HTMLAttributes,
  StyleValue,
  PropType,
} from 'vue'

export const rovingFocusGroupProps = {
  style: [String, Array, Object] as PropType<StyleValue>,
  currentTabId: String as PropType<string | null>,
  defaultCurrentTabId: String,
  loop: Boolean,
  dir: {
    type: String, // left for direction support
    default: 'ltr',
  },
  orientation: String as PropType<HTMLAttributes['aria-orientation']>, // left for orientation support
}

export type ElRovingFocusGroupProps = ExtractPropTypes<
  typeof rovingFocusGroupProps
>
