import { isObject } from '@element-plus/utils'
import type { PanelItem } from '../type'

export function getCollapsible(
  collapsible: boolean | { start?: boolean; end?: boolean }
) {
  if (collapsible && isObject(collapsible)) {
    return collapsible
  }
  return {
    start: !!collapsible,
    end: !!collapsible,
  }
}

export function isCollapsible(
  panel: PanelItem | null | undefined,
  size: number,
  nextPanel: PanelItem | null | undefined,
  nextSize: number
) {
  // 如果当前面板是可折叠的，并且当前面板有大小，则可折叠
  if (panel?.collapsible.end && size > 0) {
    return true
  }

  // 如果下一个面板是可折叠的，并且下一个面板没有大小，但是当前面板有大小，则可折叠
  if (nextPanel?.collapsible.start && nextSize === 0 && size > 0) {
    return true
  }

  // 否则不可折叠
  return false
}
