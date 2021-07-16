import { watch, isRef } from 'vue'
import type { Ref, WatchStopHandle } from 'vue'

let stopWatchCssVar: WatchStopHandle | null = null

export function useCssVar(
  vars:
    | Ref<Record<string, string>>
    | Record<string, string>,
  target?: HTMLElement,
) {
  const elRef = target || window?.document?.documentElement
  const VAR_PREFIX = '--el-'

  const setVars = (val: Record<string, string>) => {
    Object.keys(val).forEach(key => {
      if (key.startsWith(VAR_PREFIX)) {
        elRef.style.setProperty(key, val[key])
      } else {
        elRef.style.setProperty(VAR_PREFIX + key, val[key])
      }
    })
  }

  if (stopWatchCssVar) {
    stopWatchCssVar()
    stopWatchCssVar = null
  }

  isRef(vars)
    ? (stopWatchCssVar = watch(
      vars,
      val => {
        setVars(val)
      },
      {
        immediate: true,
      },
    ))
    : setVars(vars)

  return stopWatchCssVar
}
