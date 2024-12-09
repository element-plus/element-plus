import {
  buildProps,
  definePropType,
  iconPropType,
  isString,
  mutable,
} from '@element-plus/utils'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { useAriaProps, useSizeProp } from '@element-plus/hooks'
import type { ExtractPropTypes, StyleValue } from 'vue'

export type InputAutoSize = { minRows?: number; maxRows?: number } | boolean

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
  disabled: Boolean,
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
   * @description type of input
   */
  type: {
    type: String,
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
    type: String,
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
   * @description native input readonly
   */
  clearable: Boolean,
  /**
   * @description toggleable password input
   */
  showPassword: Boolean,
  /**
   * @description word count
   */
  showWordLimit: Boolean,
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
  // NOTE: when autofill by browser, the keydown event is instanceof Event, not KeyboardEvent
  // relative bug report https://github.com/element-plus/element-plus/issues/6665
  keydown: (evt: KeyboardEvent | Event) => evt instanceof Event,
  compositionstart: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionupdate: (evt: CompositionEvent) => evt instanceof CompositionEvent,
  compositionend: (evt: CompositionEvent) => evt instanceof CompositionEvent,
}
export type InputEmits = typeof inputEmits
