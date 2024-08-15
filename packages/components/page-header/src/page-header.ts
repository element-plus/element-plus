import { buildProps, iconPropType } from '@element-plus/utils'
import { Back } from '@element-plus/icons-vue'
import type { ExtractPropTypes } from 'vue'
import type PageHeader from './page-header.vue'

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
export type PageHeaderProps = ExtractPropTypes<typeof pageHeaderProps>

export const pageHeaderEmits = {
  back: () => true,
}
export type PageHeaderEmits = typeof pageHeaderEmits

export type PageHeaderInstance = InstanceType<typeof PageHeader>
