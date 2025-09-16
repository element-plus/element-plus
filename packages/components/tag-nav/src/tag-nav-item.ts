import { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
import TagNavItem from '@element-plus/components/tag-nav/src/tag-nav-item.vue'
import { buildProps, definePropType } from '@element-plus/utils'

import type { RouteLocationRaw } from 'vue-router'

export const tagNavItemProps = buildProps({
  /**
   * @description whether tab item is closeable
   */
  closable: Boolean,
  /**
   * @description whether the tag router to,
   * use vue router
   */
  to: {
    type: definePropType<RouteLocationRaw>(Object),
    default: undefined,
  },
  /**
   * @description the content shows in tag nav item
   */
  title: String,
  /**
   * @description Unique, the name of a tag nav item
   */
  name: String,
} as const)

export const tagNavItemEmits = ['tagRemove', 'tagClick']

export type TagNavItemProps = ExtractPropTypes<typeof tagNavItemProps>
export type TagNavItemPropsPublic = __ExtractPublicPropTypes<
  typeof tagNavItemProps
>

export type TagNavItemInstance = InstanceType<typeof TagNavItem> & unknown
