import {
  buildProps,
  definePropType,
  isArray,
  isString,
} from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import type { MenuItemRegistered } from './types'

export const menuItemProps = buildProps({
  /**
   * @description unique identification
   */
  index: {
    type: definePropType<string | null>([String, null]),
    default: null,
  },
  /**
   * @description Vue Router object
   */
  route: {
    type: definePropType<RouteLocationRaw>([String, Object]),
  },
  /**
   * @description whether disabled
   */
  disabled: Boolean,
  /**
   * @description when menuItem inactive and `persistent` is `false` , dropdown menuItem will be destroyed
   */
  persistent: {
    type: Boolean,
    default: true,
  },
} as const)

export type MenuItemProps = ExtractPropTypes<typeof menuItemProps>

export const menuItemEmits = {
  click: (item: MenuItemRegistered) =>
    isString(item.index) && isArray(item.indexPath),
}
export type MenuItemEmits = typeof menuItemEmits
