import { onBeforeUnmount } from 'vue'

export default function () {
  let timeoutHandle: ReturnType<typeof setTimeout>

  onBeforeUnmount(() => {
    clearTimeout(timeoutHandle)
  })

  return {
    registerTimeout: (fn: (...args: any[]) => unknown, delay: number) => {
      clearTimeout(timeoutHandle)
      timeoutHandle = setTimeout(fn, delay)
    },

    cancelTimeout: () => {
      clearTimeout(timeoutHandle)
    },
  }
}
