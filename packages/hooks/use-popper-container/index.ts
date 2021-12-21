import { onBeforeMount } from 'vue'
import { generateId } from '@element-plus/utils/util'
import isServer from '@element-plus/utils/isServer'

let cachedContainer: HTMLElement

export const POPPER_CONTAINER_ID = `el-popper-container-${generateId()}`

export const POPPER_CONTAINER_SELECTOR = `#${POPPER_CONTAINER_ID}`

export const usePopperContainer = () => {
  onBeforeMount(() => {
    if (isServer) return

    // This is for bypassing the error that when under testing env, we often encounter
    // document.body.innerHTML = '' situation
    // for this we need to disable the caching since it's not really needed
    if (process.env?.NODE_ENV === 'test' || !cachedContainer) {
      const container = document.createElement('div')
      container.id = POPPER_CONTAINER_ID
      document.body.appendChild(container)
      cachedContainer = container
    }
  })
}
