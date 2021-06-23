import { h, ref, Teleport, getCurrentInstance, onMounted } from 'vue'
import { NOOP } from '@vue/shared'
import isServer from '@element-plus/utils/isServer'
import { createGlobalNode, removeGlobalNode } from '@element-plus/utils/global-nodes'

import type { VNode } from 'vue'

export default (contentRenderer: () => VNode, appendToBody: boolean) => {
  const vm = getCurrentInstance()

  const isTeleportVisible = ref(false)

  if (isServer) {
    return {
      isTeleportVisible,
      showTeleport: NOOP,
      hideTeleport: NOOP,
      renderTeleport: NOOP,
    }
  }

  const target = (vm.proxy.$props as { target: string; }).target
  let $el: HTMLElement = null

  const showTeleport = () => {

    isTeleportVisible.value = true
    $el = createGlobalNode()
  }

  const hideTeleport = () => {

    isTeleportVisible.value = true
    removeGlobalNode($el)
    $el = null
  }

  const renderTeleport = () => {
    return appendToBody !== true
      ? contentRenderer()
      : isTeleportVisible.value === true
        ? [
          h(
            Teleport,
            { to: target },
            contentRenderer(),
          ),
        ]
        : void 0
  }

  onMounted(hideTeleport)

  return {
    isTeleportVisible,
    showTeleport,
    hideTeleport,
    renderTeleport,
  }
}
