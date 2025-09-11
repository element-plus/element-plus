import type { ExtractPropTypes, ExtractPublicPropTypes } from 'vue'

export const menuItemGroupProps = {
  /**
   * @description group title
   */
  title: String,
} as const
export type MenuItemGroupProps = ExtractPropTypes<typeof menuItemGroupProps>
export type MenuItemGroupPropsPublic = ExtractPublicPropTypes<
  typeof menuItemGroupProps
>
