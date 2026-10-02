import { buildProps, iconPropType } from '@element-plus/utils'
import { Back } from '@element-plus/icons-vue'

import type { ExtractPublicPropTypes } from 'vue'
import type { IconPropType } from '@element-plus/utils'
import type PageHeader from './page-header.vue'

export interface PageHeaderProps {
  /**
   * @description icon component of page header
   */
  icon?: IconPropType
  /**
   * @description main title of page header
   */
  title?: string
  /**
   * @description content of page header
   */
  content?: string
}

/**
 * @deprecated Removed after 3.0.0, Use `PageHeaderProps` instead.
 */
export const pageHeaderProps = buildProps({
  /**
   * @description icon component of page header
   */
  icon: {
    type: iconPropType,
    default: () => Back,
  },
  /**
   * @description main title of page header
   */
  title: String,
  /**
   * @description content of page header
   */
  content: {
    type: String,
    default: '',
  },
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `PageHeaderProps` instead.
 */
export type PageHeaderPropsPublic = ExtractPublicPropTypes<
  typeof pageHeaderProps
>

export const pageHeaderEmits = {
  back: () => true,
}
export type PageHeaderEmits = typeof pageHeaderEmits

export type PageHeaderInstance = InstanceType<typeof PageHeader> & unknown
