import { computed } from 'vue'
import { TinyColor } from '@ctrl/tinycolor'

import type { MenuProps } from './menu'

export default function useMenuColor(props: MenuProps) {
  const menuBarColor = computed(() => {
    const color = props.backgroundColor
    return color ? new TinyColor(color).shade(20).toString() : ''
  })
  return menuBarColor
}
