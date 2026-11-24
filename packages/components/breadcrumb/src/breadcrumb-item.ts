import { buildProps, definePropType } from '@element-plus/utils'

import type { ExtractPublicPropTypes } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export interface BreadcrumbItemProps {
  /**
   * @description target route of the link, same as `to` of `vue-router`
   */
  to?: RouteLocationRaw
  /**
   * @description if `true`, the navigation will not leave a history record
   */
  replace?: boolean
}

/**
 * @deprecated Removed after 3.0.0, Use `BreadcrumbItemProps` instead.
 */
export const breadcrumbItemProps = buildProps({
  /**
   * @description target route of the link, same as `to` of `vue-router`
   */
  to: {
    type: definePropType<RouteLocationRaw>([String, Object]),
    default: '',
  },
  /**
   * @description if `true`, the navigation will not leave a history record
   */
  replace: Boolean,
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `BreadcrumbItemProps` instead.
 */
export type BreadcrumbItemPropsPublic = ExtractPublicPropTypes<
  typeof breadcrumbItemProps
>
