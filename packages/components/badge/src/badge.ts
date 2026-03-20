import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPublicPropTypes, StyleValue } from 'vue'

export interface BadgeProps {
  /**
   * @description display value.
   */
  value?: string | number
  /**
   * @description maximum value, shows `{max}+` when exceeded. Only works if value is a number.
   */
  max?: number
  /**
   * @description if a little dot is displayed.
   */
  isDot?: boolean
  /**
   * @description hidden badge.
   */
  hidden?: boolean
  /**
   * @description badge type.
   */
  type?: 'primary' | 'success' | 'warning' | 'info' | 'danger'
  /**
   * @description whether to show badge when value is zero.
   */
  showZero?: boolean
  /**
   * @description customize dot background color
   */
  color?: string
  /**
   * @description CSS style of badge
   */
  badgeStyle?: StyleValue
  /**
   * @description set offset of the badge
   */
  offset?: [number, number]
  /**
   * @description custom class name of badge
   */
  badgeClass?: string
}

/**
 * @deprecated Removed after 3.0.0, Use `BadgeProps` instead.
 */
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
  /**
   * @description whether to show badge when value is zero.
   */
  showZero: {
    type: Boolean,
    default: true,
  },
  /**
   * @description customize dot background color
   */
  color: String,
  /**
   * @description CSS style of badge
   */
  badgeStyle: {
    type: definePropType<StyleValue>([String, Object, Array]),
  },
  /**
   * @description set offset of the badge
   */
  offset: {
    type: definePropType<[number, number]>(Array),
    default: () => [0, 0],
  },
  /**
   * @description custom class name of badge
   */
  badgeClass: {
    type: String,
  },
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `BadgeProps` instead.
 */
export type BadgePropsPublic = ExtractPublicPropTypes<typeof badgeProps>
