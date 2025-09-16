import { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
import TagNav from '@element-plus/components/tag-nav'
import { buildProps } from '@element-plus/utils'

export const tagNavProps = buildProps({
  /**
   * @description bind to the name of selected tag item.
   */
  modelValue: String,
  /**
   * @description Whether push route when a tag navigation item was clicked,
   * Default is true
   * @defaultValue True
   */
  routing: Boolean,
  /**
   * @description the gap between two tag nav items (px)
   * As for default , use px.
   */
  gap: Number,
} as const)

export const tagNavEmits = ['orderUpdated']

export type TagNavProps = ExtractPropTypes<typeof tagNavProps>
export type TagNavPropsPublic = __ExtractPublicPropTypes<typeof tagNavProps>

export type TagNavInstance = InstanceType<typeof TagNav> & unknown
