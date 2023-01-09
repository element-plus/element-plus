import { onMounted, onUnmounted, ref } from 'vue'
import type { Table } from './defaults'

export default function useKeyRender(table: Table<[]>) {
  const observer = ref<MutationObserver>()

  const initWatchDom = () => {
    const el = table.vnode.el
    const columnsWrapper = (el as HTMLElement).querySelector('.hidden-columns')
    const config = { childList: true, subtree: true }
    const updateOrderFns = table.store.states.updateOrderFns
    observer.value = new MutationObserver(() => {
      updateOrderFns.forEach((fn: () => void) => fn())
    })

    observer.value.observe(columnsWrapper!, config)
  }

  onMounted(() => {
    // fix https://github.com/element-plus/element-plus/issues/8528
    initWatchDom()
  })

  onUnmounted(() => {
    observer.value?.disconnect()
  })
}
