import { onBeforeMount } from 'vue'
import { generateId } from '@element-plus/utils/util'
import { isClient } from '@vueuse/core'

let cachedContainer: HTMLElement

export const POPPER_CONTAINER_ID = `el-popper-container-${generateId()}`

export const POPPER_CONTAINER_SELECTOR = `#${POPPER_CONTAINER_ID}`

export const usePopperContainer = () => {
  onBeforeMount(() => {
    if (!isClient) return

    if (!cachedContainer) {
      const container = document.createElement('div')
      container.id = POPPER_CONTAINER_ID
      document.body.appendChild(container)
      cachedContainer = container
    }
  })
}
