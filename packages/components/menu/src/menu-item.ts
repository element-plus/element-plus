import {
  buildProps,
  definePropType,
  isArray,
  isString,
} from '@element-plus/utils'

import type { ExtractPublicPropTypes } from 'vue'
import type { RouteLocationRaw } from 'vue-router'
import type { MenuItemRegistered } from './types'

export interface MenuItemProps {
  /**
   * @description unique identification
   * - will be required in the next major version
   * - required: true
   */
  index?: string | null
  /**
   * @description Vue Router object
   */
  route?: RouteLocationRaw
  /**
   * @description whether disabled
   */
  disabled?: boolean
}

/**
 * @deprecated Removed after 3.0.0, Use `MenuItemProps` instead.
 */
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

/**
 * @deprecated Removed after 3.0.0, Use `MenuItemProps` instead.
 */
export type MenuItemPropsPublic = ExtractPublicPropTypes<typeof menuItemProps>

export const menuItemEmits = {
  click: (item: MenuItemRegistered) =>
    isString(item.index) && isArray(item.indexPath),
}
export type MenuItemEmits = typeof menuItemEmits
