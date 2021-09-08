import { onBeforeUnmount } from 'vue'

import type { TimeoutHandle } from '@element-plus/utils/types'

export default function () {
  let timeoutHandle: TimeoutHandle

  onBeforeUnmount(() => {
    clearTimeout(timeoutHandle)
  })

  return {
    registerTimeout: (fn: (...args: any[]) => unknown, delay: number) => {
      clearTimeout(timeoutHandle)
      timeoutHandle = setTimeout(fn, delay) as any as TimeoutHandle
    },

    cancelTimeout: () => {
      clearTimeout(timeoutHandle)
    },
  }
}
