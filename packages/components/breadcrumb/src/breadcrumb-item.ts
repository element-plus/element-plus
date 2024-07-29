import { buildProps, definePropType } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

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
export type BreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>
