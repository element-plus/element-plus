import { buildProps, definePropType } from '@element-plus/utils'

import type { OptionValue } from './type'

export const COMPONENT_NAME = 'ElOption'
export const optionProps = buildProps({
  /**
   * @description value of option
   */
  value: {
    type: definePropType<OptionValue>([String, Number, Boolean, Object, null]),
    default: undefined,
  },
  /**
   * @description label of option, same as `value` if omitted
   */
  label: {
    type: [String, Number],
  },
  created: Boolean,
  /**
   * @description whether option is disabled
   */
  disabled: Boolean,
})
