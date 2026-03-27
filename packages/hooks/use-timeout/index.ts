import { tryOnScopeDispose } from '@vueuse/core'

export function useTimeout() {
  let timeoutHandle: ReturnType<typeof globalThis.setTimeout> | undefined

  const registerTimeout = (fn: (...args: any[]) => any, delay: number) => {
    cancelTimeout()
    timeoutHandle = setTimeout(fn, delay)
  }
  const cancelTimeout = () => {
    if (timeoutHandle === undefined) return

    clearTimeout(timeoutHandle)
    timeoutHandle = undefined
  }

  tryOnScopeDispose(() => cancelTimeout())

  return {
    registerTimeout,
    cancelTimeout,
  }
}
