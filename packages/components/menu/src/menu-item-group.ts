import type { ExtractPropTypes } from 'vue'

export const menuItemGroupProps = {
  /**
   * @description group title
   */
  title: String,
}
export type MenuItemGroupProps = ExtractPropTypes<typeof menuItemGroupProps>
