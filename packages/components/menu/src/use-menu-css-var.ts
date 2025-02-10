import { computed } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import useMenuColor from './use-menu-color'

import type { MenuProps } from './menu'

export const useMenuCssVar = (props: MenuProps, level: number) => {
  const ns = useNamespace('menu')
  return computed(() =>
    ns.cssVarBlock({
      'text-color': props.textColor || '',
      'hover-text-color': props.textColor || '',
      'bg-color': props.backgroundColor || '',
      'hover-bg-color': useMenuColor(props).value || '',
      'active-color': props.activeTextColor || '',
      level: `${level}`,
    })
  )
}
