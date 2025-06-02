import { buildProps, definePropType } from '@element-plus/utils'

export const COMPONENT_NAME = 'ElOption'
export const optionProps = buildProps({
  /**
   * @description value of option
   */
  value: {
    type: definePropType<
      string | number | boolean | Record<string, any> | null
    >([String, Number, Boolean, Object, null]),
    required: true as const,
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
