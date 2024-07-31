import {
  buildProps,
  definePropType,
  isFunction,
  isString,
} from '@element-plus/utils'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { inputProps } from '@element-plus/components/input'
import { filterOption } from './helper'

import type { ExtractPropTypes } from 'vue'
import type Mention from './mention.vue'
import type { MentionOption } from './types'
import type { Options } from '@element-plus/components/popper'

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
  popperClass: {
    type: String,
    default: '',
  },
  /**
   * @description [popper.js](https://popper.js.org/docs/v2/) parameters
   */
  popperOptions: {
    type: definePropType<Partial<Options>>(Object),
    default: () => ({} as Partial<Options>),
  },
})

export const mentionEmits = {
  [UPDATE_MODEL_EVENT]: (value: string) => isString(value),
  search: (pattern: string, prefix: string) =>
    isString(pattern) && isString(prefix),
  select: (option: MentionOption, prefix: string) =>
    isString(option.value) && isString(prefix),
  focus: (evt: FocusEvent) => evt instanceof FocusEvent,
  blur: (evt: FocusEvent) => evt instanceof FocusEvent,
}

export type MentionEmits = typeof mentionEmits
export type MentionProps = ExtractPropTypes<typeof mentionProps>
export type MentionInstance = InstanceType<typeof Mention>

export type { MentionOption } from './types'
