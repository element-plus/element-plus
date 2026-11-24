import { tryOnScopeDispose } from '@vueuse/core'

export function useTimeout() {
  let timeoutHandle: number | undefined

  const registerTimeout = (fn: (...args: any[]) => any, delay: number) => {
    cancelTimeout()
    timeoutHandle = globalThis.setTimeout(fn, delay)
  }
  const cancelTimeout = () => {
    if (timeoutHandle === undefined) return

    globalThis.clearTimeout(timeoutHandle)
    timeoutHandle = undefined
  }

  tryOnScopeDispose(() => cancelTimeout())

  return {
    registerTimeout,
    cancelTimeout,
  }
}
