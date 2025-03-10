import { useSizeProp } from '@element-plus/hooks'
import { buildProps, isBoolean } from '@element-plus/utils'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'

export const captchaProps = buildProps({
  /**
   * @description binding value
   */
  modelValue: {
    type: Boolean,
    default: false,
  },
  /**
   * @description captcha size.
   */
  size: useSizeProp,
  /**
   * @description translation for `help text` or if empty set up built-in translation
   */
  helpText: String,
  /**
   * @description translation for `complete text` or if empty set up built-in translation
   */
  completeText: String,
} as const)

export const captchaEmits = {
  start: () => true,
  success: () => true,
  fail: () => true,
  [UPDATE_MODEL_EVENT]: (val: boolean) => isBoolean(val),
}
