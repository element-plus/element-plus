import { buildProp, definePropType } from '@element-plus/utils/props'

import type { ExtractPropTypes } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

export const breadcrumbItemProps = {
  to: buildProp({
    type: definePropType<RouteLocationRaw>([String, Object]),
    default: '',
  } as const),
  replace: {
    type: Boolean,
    default: false,
  },
} as const
export type BreadcrumbItemProps = ExtractPropTypes<typeof breadcrumbItemProps>
