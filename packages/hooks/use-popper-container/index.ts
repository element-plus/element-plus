import { computed, onBeforeMount, watch } from 'vue'
import { isClient } from '@vueuse/core'
import { generateId } from '@element-plus/utils'
import { useNamespace } from '../use-namespace'

let cachedContainer: HTMLElement

export const POPPER_CONTAINER_UUID = generateId()

const createContainer = (popperContainerId: string) => {
  const container = document.createElement('div')
  container.id = popperContainerId
  document.body.appendChild(container)
  return container
}

export const usePopperContainerNode = () => {
  const ns = useNamespace(`popper-container-${POPPER_CONTAINER_UUID}`)

  watch(ns.namespace, () => {
    if (cachedContainer) {
      cachedContainer.id = ns.b()
    }
  })

  return computed(() => {
    const popperContainerId = ns.b()
    return {
      id: popperContainerId,
      selector: `#${popperContainerId}`,
      cachedContainer,
    }
  })
}

export const usePopperContainer = () => {
  const popperContainerNode = usePopperContainerNode()

  onBeforeMount(() => {
    if (!isClient) return
    // This is for bypassing the error that when under testing env, we often encounter
    // document.body.innerHTML = '' situation
    // for this we need to disable the caching since it's not really needed
    if (
      process.env.NODE_ENV === 'test' ||
      !cachedContainer ||
      !document.body.querySelector(popperContainerNode.value.selector)
    ) {
      cachedContainer = createContainer(popperContainerNode.value.id)
    }
  })
}
