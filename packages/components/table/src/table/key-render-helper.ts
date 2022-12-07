// @ts-nocheck
import { onMounted, onUnmounted, ref, unref, useSlots } from 'vue'
import type { Ref } from 'vue'
import type { Table } from './defaults'

export default function useKeyRender(table: Table<[]>) {
  const slots = useSlots()
  const observer: Ref = ref(null)

  const initWatchDom = () => {
    // 仅在首层存在 keyed fragment 的时候监测 column组件 的 dom 变化
    const keyedFragment = getKeyedFragment(slots)
    if (!keyedFragment?.length) return

    const el = table.vnode.el
    const columnsWrapper = (el as HTMLElement).querySelector('.hidden-columns')
    const config = { childList: true, subtree: true }
    const updateOrderFns = unref(table.store.states.updateOrderFns)
    observer.value = new MutationObserver(() => {
      updateOrderFns.forEach((fn: () => void) => fn())
    })

    observer.value.observe(columnsWrapper, config)
  }

  onMounted(() => {
    // fix https://github.com/element-plus/element-plus/issues/8528
    initWatchDom()
  })

  onUnmounted(() => {
    observer.value?.disconnect()
  })
}

function getKeyedFragment(slots) {
  if (!slots || !slots.default) return
  const slotIns = slots.default()
  return slotIns.filter((_) => _.patchFlag & 128 /* KEYED_FRAGMENT */)
}
