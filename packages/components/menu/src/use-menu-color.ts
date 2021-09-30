import { computed } from 'vue'
import { darken } from '@element-plus/utils/color'

import type { MenuProps } from './menu'

export default function useMenuColor(props: MenuProps) {
  const menuBarColor = computed(() => {
    const color = props.backgroundColor
    if (!color) {
      return ''
    } else {
      return darken(color)
    }
  })
  return menuBarColor
}
