import { h, ref, Teleport, onUnmounted } from 'vue'
import { NOOP } from '@vue/shared'
import { isClient } from '@vueuse/core'
import { createGlobalNode, removeGlobalNode } from '@element-plus/utils-v2'

import type { VNode, Ref } from 'vue'

export const useTeleport = (
  contentRenderer: () => VNode,
  appendToBody: Ref<boolean>
) => {
  const isTeleportVisible = ref(false)

  if (!isClient) {
    return {
      isTeleportVisible,
      showTeleport: NOOP,
      hideTeleport: NOOP,
      renderTeleport: NOOP,
    }
  }

  let $el: HTMLElement | null = null

  const showTeleport = () => {
    isTeleportVisible.value = true
    // this allows the delayed showing strategy since the the content itself could be enterable
    // e.g. el-popper
    if ($el !== null) return

    $el = createGlobalNode()
  }

  const hideTeleport = () => {
    isTeleportVisible.value = false
    if ($el !== null) {
      removeGlobalNode($el)
      $el = null
    }
  }

  const renderTeleport = () => {
    return appendToBody.value !== true
      ? contentRenderer()
      : isTeleportVisible.value
      ? [h(Teleport, { to: $el }, contentRenderer())]
      : undefined
  }

  onUnmounted(hideTeleport)

  return {
    isTeleportVisible,
    showTeleport,
    hideTeleport,
    renderTeleport,
  }
}
