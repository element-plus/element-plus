import { onMounted, onUnmounted } from 'vue'

import type { Table } from './defaults'

export default function useKeyRender(table: Table<[]>) {
  let observer: MutationObserver | null = null

  const initWatchDom = () => {
    const el = table.vnode.el
    const columnsWrapper = (el as HTMLElement).querySelector('.hidden-columns')
    const config = { childList: true, subtree: true }
    const updateOrderFns = table.store.states.updateOrderFns
    observer = new MutationObserver(() => {
      updateOrderFns.forEach((fn: () => void) => fn())
    })

    observer?.observe(columnsWrapper!, config)
  }

  onMounted(() => {
    // fix https://github.com/element-plus/element-plus/issues/8528
    initWatchDom()
  })

  onUnmounted(() => {
    observer?.disconnect()
  })
}
