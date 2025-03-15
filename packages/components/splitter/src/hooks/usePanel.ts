import { type Ref, computed, provide, ref } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { addPanelKey, removePanelKey } from '../const'
import type { PanelItem } from '../type'

const ns = useNamespace('splitter-panel')

export function getCollapsible(
  collapsible: boolean | { start?: boolean; end?: boolean }
) {
  if (collapsible && typeof collapsible === 'object') {
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

export function usePanel(containerEl: Ref<HTMLDivElement | undefined>) {
  const panels = ref<PanelItem[]>([])

  const addPanel = (panel: PanelItem) => {
    // 1. Find the position of the panel
    let index = -1
    Array.from(containerEl.value?.children || []).some((el) => {
      if (el.className.includes(ns.b())) index++
      return el.isSameNode(panel.el)
    })

    panels.value.splice(index, 0, { ...panel, index })
    // 2. Reorder the panels
    panels.value.forEach((p, i) => (p.index = i))
  }

  const removePanel = (uid: number) => {
    const index = panels.value.findIndex((p) => p.uid === uid)
    panels.value.splice(index, 1)
    panels.value.forEach((p, i) => (p.index = i))
  }

  const panelsMap = computed(() => {
    return panels.value.reduce<Record<number, PanelItem>>((obj, pane) => {
      obj[pane.uid] = pane
      return obj
    }, {})
  })

  provide(addPanelKey, addPanel)
  provide(removePanelKey, removePanel)

  return { panelsMap, panels }
}
