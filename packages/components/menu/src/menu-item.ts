import { buildProp, definePropType } from '@element-plus/utils/props'
import { isString } from '@element-plus/utils/util'

import type { ExtractPropTypes } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export const menuItemProps = {
  index: {
    type: String,
    default: null,
  },
  route: buildProp({
    type: definePropType<RouteLocationRaw>([String, Object]),
  }),
  disabled: Boolean,
} as const
export type MenuItemProps = ExtractPropTypes<typeof menuItemProps>

export const menuItemEmits = {
  click: (item: { index: string; indexPath: string[] }) =>
    isString(item.index) && Array.isArray(item.indexPath),
}
export type MenuItemEmits = typeof menuItemEmits
