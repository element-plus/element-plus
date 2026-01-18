import type { ExtractPublicPropTypes } from 'vue'

export interface MenuItemGroupProps {
  /**
   * @description group title
   */
  title?: string
}

/**
 * @deprecated Removed after 3.0.0, Use `MenuItemGroupProps` instead.
 */
export const menuItemGroupProps = {
  /**
   * @description group title
   */
  title: String,
} as const

/**
 * @deprecated Removed after 3.0.0, Use `MenuItemGroupProps` instead.
 */
export type MenuItemGroupPropsPublic = ExtractPublicPropTypes<
  typeof menuItemGroupProps
>
