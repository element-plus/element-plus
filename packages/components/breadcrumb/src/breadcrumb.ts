import { buildProps, iconPropType } from '@element-plus/utils'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'

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
export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>
export type BreadcrumbPropsPublic = __ExtractPublicPropTypes<
  typeof breadcrumbProps
>
