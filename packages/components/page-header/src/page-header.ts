import { Back } from '@element-plus/icons-vue'
import type { ExtractPropTypes, PropType, Component } from 'vue'

export const pageHeaderProps = {
  icon: {
    type: [String, Object] as PropType<string | Component>,
    default: Back,
  },
  title: String,
  content: {
    type: String,
    default: '',
  },
} as const
export type PageHeaderProps = ExtractPropTypes<typeof pageHeaderProps>

export const pageHeaderEmits = {
  back: () => true,
}
export type PageHeaderEmits = typeof pageHeaderEmits
