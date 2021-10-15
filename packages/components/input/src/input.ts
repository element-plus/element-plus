import { isString } from '@vue/shared'
import { useFormItemProps } from '@element-plus/hooks'
import { buildProps, definePropType, mutable } from '@element-plus/utils/props'
import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import type { StyleValue } from '@element-plus/utils/types'
import type { ExtractPropTypes } from 'vue'

type AutoSize = { minRows?: number; maxRows?: number } | boolean

export const inputProps = buildProps({
  ...useFormItemProps,
  modelValue: {
    type: definePropType<string | number | null | undefined>(undefined),
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  resize: {
    type: String,
    values: ['none', 'both', 'horizontal', 'vertical'],
  },
  autosize: {
    type: definePropType<AutoSize>([Boolean, Object]),
    default: false,
  },
  autocomplete: {
    type: String,
    default: 'off',
  },
  placeholder: {
    type: String,
  },
  form: {
    type: String,
    default: '',
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  showPassword: {
    type: Boolean,
    default: false,
  },
  showWordLimit: {
    type: Boolean,
    default: false,
  },
  suffixIcon: {
    type: String,
    default: '',
  },
  prefixIcon: {
    type: String,
    default: '',
  },
  label: {
    type: String,
  },
  tabindex: {
    type: [Number, String],
  },
  validateEvent: {
    type: Boolean,
    default: true,
  },
  inputStyle: {
    type: definePropType<StyleValue>([Object, Array, String]),
    default: () => mutable({} as const),
  },
  maxlength: {
    type: [Number, String],
  },
} as const)
export type InputProps = ExtractPropTypes<typeof inputProps>

export const inputEmits = {
  [UPDATE_MODEL_EVENT]: (value: string) => isString(value),
  input: (value: string) => isString(value),
  change: (value: string) => isString(value),
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  clear: () => true,
  mouseleave: (evt: MouseEvent) => evt instanceof MouseEvent,
  mouseenter: (evt: MouseEvent) => evt instanceof MouseEvent,
  keydown: (evt: KeyboardEvent) => evt instanceof KeyboardEvent,
  compositionstart: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionupdate: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionend: (evt: CompositionEvent) => evt instanceof CompositionEvent,
}
export type InputEmits = typeof inputEmits
