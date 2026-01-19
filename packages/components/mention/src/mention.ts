import {
  buildProps,
  definePropType,
  isFunction,
  isObject,
  isString,
} from '@element-plus/utils'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { inputProps } from '@element-plus/components/input'
import { filterOption } from './helper'
import { useTooltipContentProps } from '@element-plus/components/tooltip'

import type { ExtractPublicPropTypes } from 'vue'
import type Mention from './mention.vue'
import type { MentionOption } from './types'
import type { Options } from '@element-plus/components/popper'
import type { InputProps } from '@element-plus/components/input'
import type { ElTooltipContentProps } from '@element-plus/components/tooltip'

export interface MentionProps extends InputProps {
  /**
   * @description mention options list
   */
  options?: MentionOption[]
  /**
   * @description prefix character to trigger mentions. The string length must be exactly 1.
   */
  prefix?: string | string[]
  /**
   * @description character to split mentions. The string length must be exactly 1.
   */
  split?: string
  /**
   * @description customize filter option logic.
   */
  filterOption?: false | typeof filterOption
  /**
   * @description set popup placement
   */
  placement?: 'bottom' | 'top'
  /**
   * @description whether the dropdown panel has an arrow
   */
  showArrow?: boolean
  /**
   * @description offset of the dropdown panel
   */
  offset?: number
  /**
   * @description when backspace is pressed to delete, whether the mention content is deleted as a whole
   */
  whole?: boolean
  /**
   * @description when backspace is pressed to delete, check if the mention is a whole
   */
  checkIsWhole?: (pattern: string, prefix: string) => boolean
  /**
   * @description input value
   */
  modelValue?: string
  /**
   * @description whether the dropdown panel of mentions is in a loading state.
   */
  loading?: boolean
  /**
   * @description custom class name for dropdown panel
   */
  popperClass?: ElTooltipContentProps['popperClass']
  /**
   * @description custom style for dropdown panel
   */
  popperStyle?: ElTooltipContentProps['popperStyle']
  /**
   * @description [popper.js](https://popper.js.org/docs/v2/) parameters
   */
  popperOptions?: Partial<Options>
  /**
   * @description configuration options
   */
  props?: MentionOptionProps
}

/**
 * @deprecated Removed after 3.0.0, Use `MentionProps` instead.
 */
export const mentionProps = buildProps({
  ...inputProps,
  /**
   * @description mention options list
   */
  options: {
    type: definePropType<MentionOption[]>(Array),
    default: () => [],
  },
  /**
   * @description prefix character to trigger mentions. The string length must be exactly 1.
   */
  prefix: {
    type: definePropType<string | string[]>([String, Array]),
    default: '@',
    validator: (val: string | string[]) => {
      if (isString(val)) return val.length === 1
      return val.every((v) => isString(v) && v.length === 1)
    },
  },
  /**
   * @description character to split mentions. The string length must be exactly 1.
   */
  split: {
    type: String,
    default: ' ',
    validator: (val: string) => val.length === 1,
  },
  /**
   * @description customize filter option logic.
   */
  filterOption: {
    type: definePropType<false | typeof filterOption>([Boolean, Function]),
    default: () => filterOption,
    validator: (val) => {
      if (val === false) return true
      return isFunction(val)
    },
  },
  /**
   * @description set popup placement
   */
  placement: {
    type: definePropType<'bottom' | 'top'>(String),
    default: 'bottom',
  },
  /**
   * @description whether the dropdown panel has an arrow
   */
  showArrow: Boolean,
  /**
   * @description offset of the dropdown panel
   */
  offset: {
    type: Number,
    default: 0,
  },
  /**
   * @description when backspace is pressed to delete, whether the mention content is deleted as a whole
   */
  whole: Boolean,
  /**
   * @description when backspace is pressed to delete, check if the mention is a whole
   */
  checkIsWhole: {
    type: definePropType<(pattern: string, prefix: string) => boolean>(
      Function
    ),
  },
  /**
   * @description input value
   */
  modelValue: String,
  /**
   * @description whether the dropdown panel of mentions is in a loading state.
   */
  loading: Boolean,
  /**
   * @description custom class name for dropdown panel
   */
  popperClass: useTooltipContentProps.popperClass,
  /**
   * @description custom style for dropdown panel
   */
  popperStyle: useTooltipContentProps.popperStyle,
  /**
   * @description [popper.js](https://popper.js.org/docs/v2/) parameters
   */
  popperOptions: {
    type: definePropType<Partial<Options>>(Object),
    default: () => ({}) as Partial<Options>,
  },
  /**
   * @description configuration options
   */
  props: {
    type: definePropType<MentionOptionProps>(Object),
    default: () => mentionDefaultProps,
  },
})

export const mentionEmits = {
  [UPDATE_MODEL_EVENT]: (value: string) => isString(value),
  'whole-remove': (pattern: string, prefix: string) =>
    isString(pattern) && isString(prefix),
  input: (value: string) => isString(value),
  search: (pattern: string, prefix: string) =>
    isString(pattern) && isString(prefix),
  select: (option: MentionOption, prefix: string) =>
    isObject(option) && isString(prefix),
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
}

export type MentionEmits = typeof mentionEmits
/**
 * @deprecated Removed after 3.0.0, Use `MentionProps` instead.
 */
export type MentionPropsPublic = ExtractPublicPropTypes<typeof mentionProps>
export type MentionInstance = InstanceType<typeof Mention> & unknown

export type { MentionOption } from './types'

export type MentionOptionProps = {
  value?: string
  label?: string
  disabled?: string
  [key: string]: string | undefined
}

export const mentionDefaultProps: Required<MentionOptionProps> = {
  value: 'value',
  label: 'label',
  disabled: 'disabled',
}
