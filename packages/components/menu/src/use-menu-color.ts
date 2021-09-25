import { computed } from 'vue'
import { darken } from '@element-plus/utils/color'

import type { IMenuProps } from './types'

export default function useMenuColor(props: IMenuProps) {
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
