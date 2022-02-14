import { tryOnScopeDispose } from '@vueuse/core'

export function useTimeout() {
  let timeoutHandle: number

  const registerTimeout = (fn: (...args: any[]) => any, delay: number) => {
    cancelTimeout()
    timeoutHandle = window.setTimeout(fn, delay)
  }
  const cancelTimeout = () => window.clearTimeout(timeoutHandle)

  tryOnScopeDispose(() => cancelTimeout())

  return {
    registerTimeout,
    cancelTimeout,
  }
}
