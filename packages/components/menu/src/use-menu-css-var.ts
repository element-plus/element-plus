import { computed } from 'vue'
import useMenuColor from './use-menu-color'

import type { MenuProps } from './menu'

export const useMenuCssVar = (props: MenuProps) => {
  return computed(() => {
    return {
      '--el-menu-text-color': props.textColor || '',
      '--el-menu-hover-text-color': props.textColor || '',
      '--el-menu-background-color': props.backgroundColor || '',
      '--el-menu-hover-background-color': useMenuColor(props).value || '',
      '--el-menu-active-color': props.activeTextColor || '',
    }
  })
}
