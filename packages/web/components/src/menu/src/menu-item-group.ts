import type { ExtractPropTypes } from 'vue'

export const menuItemGroupProps = {
  title: String,
} as const
export type MenuItemGroupProps = ExtractPropTypes<typeof menuItemGroupProps>
