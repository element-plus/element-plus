import { markRaw } from 'vue'
import {
  buildProps,
  definePropType,
  iconPropType,
  isString,
  mutable,
} from '@element-plus/utils'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { useAriaProps, useSizeProp } from '@element-plus/hooks'
import { CircleClose } from '@element-plus/icons-vue'

import type {
  Component,
  ExtractPublicPropTypes,
  HTMLAttributes,
  StyleValue,
} from 'vue'
import type { ComponentSize } from '@element-plus/constants'

export type InputModelModifiers = {
  lazy?: true
  number?: true
  trim?: true
}
export type InputAutoSize = { minRows?: number; maxRows?: number } | boolean
// Some commonly used values for input type
export type InputType =
  | 'text'
  | 'textarea'
  | 'number'
  | 'password'
  | 'email'
  | 'search'
  | 'tel'
  | 'url'
  | (string & NonNullable<unknown>)

export interface InputProps {
  /**
   * @description native input id
   */
  id?: string
  /**
   * @description input box size
   */
  size?: ComponentSize
  /**
   * @description whether to disable
   */
  disabled?: boolean
  /**
   * @description binding value
   */
  modelValue?: string | number | null | undefined
  /**
   * @description v-model modifiers, reference [Vue modifiers](https://vuejs.org/guide/essentials/forms.html#modifiers)
   */
  modelModifiers?: InputModelModifiers
  /**
   * @description same as `maxlength` in native input
   */
  maxlength?: string | number
  /**
   * @description same as `minlength` in native input
   */
  minlength?: string | number
  /**
   * @description type of input, see more in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)
   */
  type?: InputType
  /**
   * @description control the resizability
   */
  resize?: 'none' | 'both' | 'horizontal' | 'vertical'
  /**
   * @description whether textarea has an adaptive height
   */
  autosize?: InputAutoSize
  /**
   * @description native input autocomplete
   * - When the number of literal types in a union exceeds 315, the TS2590 error occurs. see: https://github.com/vuejs/core/issues/10514
   */
  autocomplete?: string // HTMLInputElement['autocomplete']
  /**
   * @description format content
   */
  formatter?: (value: string) => string
  /**
   * @description parse content
   */
  parser?: (value: string) => string
  /**
   * @description placeholder
   */
  placeholder?: string
  /**
   * @description native input form
   */
  form?: string
  /**
   * @description native input readonly
   */
  readonly?: boolean
  /**
   * @description whether to show clear button
   */
  clearable?: boolean
  /**
   * @description custom clear icon component
   */
  clearIcon?: string | Component
  /**
   * @description toggleable password input
   */
  showPassword?: boolean
  /**
   * @description word count
   */
  showWordLimit?: boolean
  /**
   * @description word count position, valid when `show-word-limit` is true
   */
  wordLimitPosition?: 'inside' | 'outside'
  /**
   * @description suffix icon
   */
  suffixIcon?: string | Component
  /**
   * @description prefix icon
   */
  prefixIcon?: string | Component
  /**
   * @description container role, internal properties provided for use by the picker component
   */
  containerRole?: string
  /**
   * @description input tabindex
   */
  tabindex?: string | number
  /**
   * @description whether to trigger form validation
   */
  validateEvent?: boolean
  /**
   * @description input or textarea element style
   */
  inputStyle?: StyleValue
  /**
   * @description native input autofocus
   */
  autofocus?: boolean
  /**
   * @description number of rows of textarea, only works when `type` is 'textarea'
   */
  rows?: number
  /**
   * @description native `aria-label` attribute
   */
  ariaLabel?: string
  /**
   * @description native input mode for virtual keyboards
   */
  inputmode?: HTMLAttributes['inputmode']
  /**
   * @description same as `name` in native input
   */
  name?: string
}

/**
 * @deprecated Removed after 3.0.0, Use `InputProps` instead.
 */
export const inputProps = buildProps({
  /**
   * @description native input id
   */
  id: {
    type: String,
    default: undefined,
  },
  /**
   * @description input box size
   */
  size: useSizeProp,
  /**
   * @description whether to disable
   */
  disabled: {
    type: Boolean,
    default: undefined,
  },
  /**
   * @description binding value
   */
  modelValue: {
    type: definePropType<string | number | null | undefined>([
      String,
      Number,
      Object,
    ]),
    default: '',
  },
  /**
   * @description v-model modifiers, reference [Vue modifiers](https://vuejs.org/guide/essentials/forms.html#modifiers)
   */
  modelModifiers: {
    type: definePropType<InputModelModifiers>(Object),
    default: () => ({}),
  },
  /**
   * @description same as `maxlength` in native input
   */
  maxlength: {
    type: [String, Number],
  },
  /**
   * @description same as `minlength` in native input
   */
  minlength: {
    type: [String, Number],
  },
  /**
   * @description type of input, see more in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)
   */
  type: {
    type: definePropType<InputType>(String),
    default: 'text',
  },
  /**
   * @description control the resizability
   */
  resize: {
    type: String,
    values: ['none', 'both', 'horizontal', 'vertical'],
  },
  /**
   * @description whether textarea has an adaptive height
   */
  autosize: {
    type: definePropType<InputAutoSize>([Boolean, Object]),
    default: false,
  },
  /**
   * @description native input autocomplete
   */
  autocomplete: {
    type: definePropType<HTMLInputElement['autocomplete']>(String),
    default: 'off',
  },
  /**
   * @description format content
   */
  formatter: {
    type: Function,
  },
  /**
   * @description parse content
   */
  parser: {
    type: Function,
  },
  /**
   * @description placeholder
   */
  placeholder: {
    type: String,
  },
  /**
   * @description native input form
   */
  form: {
    type: String,
  },
  /**
   * @description native input readonly
   */
  readonly: Boolean,
  /**
   * @description whether to show clear button
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
   * @description toggleable password input
   */
  showPassword: Boolean,
  /**
   * @description word count
   */
  showWordLimit: Boolean,
  /**
   * @description word count position, valid when `show-word-limit` is true
   */
  wordLimitPosition: {
    type: String,
    values: ['inside', 'outside'],
    default: 'inside',
  },
  /**
   * @description suffix icon
   */
  suffixIcon: {
    type: iconPropType,
  },
  /**
   * @description prefix icon
   */
  prefixIcon: {
    type: iconPropType,
  },
  /**
   * @description container role, internal properties provided for use by the picker component
   */
  containerRole: {
    type: String,
    default: undefined,
  },
  /**
   * @description input tabindex
   */
  tabindex: {
    type: [String, Number],
    default: 0,
  },
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true,
  },
  /**
   * @description input or textarea element style
   */
  inputStyle: {
    type: definePropType<StyleValue>([Object, Array, String]),
    default: () => mutable({} as const),
  },
  /**
   * @description native input autofocus
   */
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2,
  },
  ...useAriaProps(['ariaLabel']),
  /**
   * @description native input mode for virtual keyboards
   */
  inputmode: {
    type: definePropType<HTMLAttributes['inputmode']>(String),
    default: undefined,
  },
  /**
   * @description same as `name` in native input
   */
  name: String,
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `InputProps` instead.
 */
export type InputPropsPublic = ExtractPublicPropTypes<typeof inputProps>

export const inputEmits = {
  [UPDATE_MODEL_EVENT]: (value: string) => isString(value),
  input: (value: string) => isString(value),
  change: (value: string, evt?: Event) =>
    isString(value) && (evt instanceof Event || evt === undefined),
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
  clear: () => true,
  mouseleave: (evt: MouseEvent) => evt instanceof MouseEvent,
  mouseenter: (evt: MouseEvent) => evt instanceof MouseEvent,
  // NOTE: when autofill by browser, the keydown event is instanceof Event, not KeyboardEvent
  // relative bug report https://github.com/element-plus/element-plus/issues/6665
  keydown: (evt: KeyboardEvent | Event) => evt instanceof Event,
  compositionstart: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionupdate: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionend: (evt: CompositionEvent) => evt instanceof CompositionEvent,
}
export type InputEmits = typeof inputEmits

/**
 * @description default values for InputProps, used in components that extend InputProps like Autocomplete
 */
export const inputPropsDefaults = {
  disabled: undefined,
  modelValue: '',
  modelModifiers: () => ({}),
  type: 'text' as InputType,
  autocomplete: 'off',
  clearIcon: markRaw(CircleClose),
  wordLimitPosition: 'inside' as const,
  tabindex: 0,
  validateEvent: true,
  inputStyle: () => ({}),
  rows: 2,
} as const
