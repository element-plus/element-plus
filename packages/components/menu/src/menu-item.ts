import {
  buildProps,
  definePropType,
  isArray,
  isString,
} from '@element-plus/utils'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import type { MenuItemRegistered } from './types'

export const menuItemProps = buildProps({
  /**
   * @description unique identification
   */
  index: {
    type: definePropType<string | null>([String, null]),
    // will be required in the next major version
    // required: true,
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
} as const)
export type MenuItemProps = ExtractPropTypes<typeof menuItemProps>
export type MenuItemPropsPublic = __ExtractPublicPropTypes<typeof menuItemProps>

export const menuItemEmits = {
  click: (item: MenuItemRegistered) =>
    isString(item.index) && isArray(item.indexPath),
}
export type MenuItemEmits = typeof menuItemEmits
