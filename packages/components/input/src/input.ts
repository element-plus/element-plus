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

/**
 * @deprecated Removed after 3.0.0
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
 * @deprecated Removed after 3.0.0
 */
export type InputPropsPublic = ExtractPublicPropTypes<typeof inputProps>

/**
 * @deprecated Removed after 3.0.0
 */
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

export interface InputProps<
  M extends InputModelModifiers = InputModelModifiers,
> {
  id?: string
  size?: ComponentSize
  disabled?: boolean
  modelValue?: string | number | null | undefined
  modelModifiers?: M
  maxlength?: string | number
  minlength?: string | number
  type?: InputType
  resize?: 'none' | 'both' | 'horizontal' | 'vertical'
  autosize?: InputAutoSize
  /**
   * When the number of literal types in a union exceeds 315, the TS2590 error occurs.
   * https://github.com/vuejs/core/issues/10514
   */
  autocomplete?: string // HTMLInputElement['autocomplete']
  formatter?: (value: string) => string
  parser?: (value: string) => string
  placeholder?: string
  form?: string
  readonly?: boolean
  clearable?: boolean
  clearIcon?: string | Component
  showPassword?: boolean
  showWordLimit?: boolean
  wordLimitPosition?: 'inside' | 'outside'
  suffixIcon?: string | Component
  prefixIcon?: string | Component
  containerRole?: string
  tabindex?: string | number
  validateEvent?: boolean
  inputStyle?: StyleValue
  autofocus?: boolean
  rows?: number
  ariaLabel?: string
  inputmode?: HTMLAttributes['inputmode']
  name?: string
}

export type InputEmits<M extends InputModelModifiers = InputModelModifiers> = {
  'update:modelValue': [value: string | number]
  input: [
    value: M extends { number: true; lazy?: undefined }
      ? string | number
      : string,
  ]
  change: [
    value: M extends { number: true } ? string | number : string,
    evt?: Event,
  ]
  focus: [evt: FocusEvent]
  blur: [evt: FocusEvent]
  clear: []
  mouseleave: [evt: MouseEvent]
  mouseenter: [evt: MouseEvent]
  keydown: [evt: KeyboardEvent | Event]
  compositionstart: [evt: CompositionEvent]
  compositionupdate: [evt: CompositionEvent]
  compositionend: [evt: CompositionEvent]
}
