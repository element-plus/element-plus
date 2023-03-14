import { buildProps } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'

export const badgeProps = buildProps({
  /**
   * @description display value.
   */
  value: {
    type: [String, Number],
    default: '',
  },
  /**
   * @description maximum value, shows `{max}+` when exceeded. Only works if value is a number.
   */
  max: {
    type: Number,
    default: 99,
  },
  /**
   * @description if a little dot is displayed.
   */
  isDot: Boolean,
  /**
   * @description hidden badge.
   */
  hidden: Boolean,
  /**
   * @description badge type.
   */
  type: {
    type: String,
    values: ['primary', 'success', 'warning', 'info', 'danger'],
    default: 'danger',
  },

  /* A prop that is used to change the direction of the text. */
  rtl: {
    type: Boolean,
    default: false,
  },
} as const)
export type BadgeProps = ExtractPropTypes<typeof badgeProps>
