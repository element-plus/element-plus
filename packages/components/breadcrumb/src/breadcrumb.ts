import { buildProps, iconPropType } from '@element-plus/utils'

import type { ExtractPublicPropTypes } from 'vue'
import type { IconPropType } from '@element-plus/utils'

export interface BreadcrumbProps {
  /**
   * @description separator character
   */
  separator?: string
  /**
   * @description icon component of icon separator
   */
  separatorIcon?: IconPropType
}

/**
 * @deprecated Removed after 3.0.0, Use `BreadcrumbProps` instead.
 */
export const breadcrumbProps = buildProps({
  /**
   * @description separator character
   */
  separator: {
    type: String,
    default: '/',
  },
  /**
   * @description icon component of icon separator
   */
  separatorIcon: {
    type: iconPropType,
  },
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `BreadcrumbProps` instead.
 */
export type BreadcrumbPropsPublic = ExtractPublicPropTypes<
  typeof breadcrumbProps
>
