import type { ExtractPropTypes } from 'vue'

export const pageHeaderProps = {
  icon: {
    type: String,
    default: 'el-icon-back',
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
