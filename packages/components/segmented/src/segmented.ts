import {
  buildProps,
  definePropType,
  isNumber,
  isString,
} from '@element-plus/utils'
import { useAriaProps, useSizeProp } from '@element-plus/hooks'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@element-plus/constants'

import type { Option } from './types'
import type { ExtractPropTypes } from 'vue'
import type Segmented from './segmented.vue'

export const segmentedProps = buildProps({
  /**
   * @description options of segmented
   */
  options: {
    type: definePropType<Option[]>(Array),
    default: () => [],
  },
  /**
   * @description binding value
   */
  modelValue: {
    type: [String, Number, Boolean],
    default: undefined,
  },
  /**
   * @description fit width of parent content
   */
  block: Boolean,
  /**
   * @description size of component
   */
  size: useSizeProp,
  /**
   * @description whether segmented is disabled
   */
  disabled: Boolean,
  /**
   * @description whether to trigger form validation
   */
  validateEvent: {
    type: Boolean,
    default: true,
  },
  /**
   * @description native input id
   */
  id: String,
  /**
   * @description native `name` attribute
   */
  name: String,
  ...useAriaProps(['ariaLabel']),
})

export type SegmentedProps = ExtractPropTypes<typeof segmentedProps>

export const segmentedEmits = {
  [UPDATE_MODEL_EVENT]: (val: any) => isString(val) || isNumber(val),
  [CHANGE_EVENT]: (val: any) => isString(val) || isNumber(val),
}
export type SegmentedEmits = typeof segmentedEmits

export type SegmentedInstance = InstanceType<typeof Segmented>
