import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'

export const menuItemGroupProps = {
  /**
   * @description group title
   */
  title: String,
} as const
export type MenuItemGroupProps = ExtractPropTypes<typeof menuItemGroupProps>
export type MenuItemGroupPropsPublic = __ExtractPublicPropTypes<
  typeof menuItemGroupProps
>
