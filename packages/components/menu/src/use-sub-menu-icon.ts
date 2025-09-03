import { computed } from 'vue'
import { ArrowDown, ArrowRight } from '@element-plus/icons-vue'

import type { ComputedRef } from 'vue'
import type { SubMenuProps } from './sub-menu'

interface UseSubMenuIconOptions {
  props: SubMenuProps
  opened: ComputedRef<boolean>
  mode: ComputedRef<string>
  isFirstLevel: ComputedRef<boolean>
  isCollapsed: ComputedRef<boolean>
}

/**
 * 子菜单图标逻辑 Hook
 * @param options 配置选项
 * @returns 子菜单标题图标
 */
export function useSubMenuIcon({
  props,
  opened,
  mode,
  isFirstLevel,
  isCollapsed,
}: UseSubMenuIconOptions) {
  const getIconForExpandedMode = () => {
    if (props.expandCloseIcon && props.expandOpenIcon) {
      return opened.value ? props.expandOpenIcon : props.expandCloseIcon
    }
    return ArrowDown
  }

  const getIconForCollapsedMode = () => {
    if (props.collapseCloseIcon && props.collapseOpenIcon) {
      return opened.value ? props.collapseOpenIcon : props.collapseCloseIcon
    }
    return ArrowRight
  }

  const subMenuTitleIcon = computed(() => {
    const isExpandedMode =
      (mode.value === 'horizontal' && isFirstLevel.value) ||
      (mode.value === 'vertical' && !isCollapsed.value)

    return isExpandedMode ? getIconForExpandedMode() : getIconForCollapsedMode()
  })

  return {
    subMenuTitleIcon,
    getIconForExpandedMode,
    getIconForCollapsedMode,
  }
}
