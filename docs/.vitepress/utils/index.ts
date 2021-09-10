import { isRef, ref } from 'vue'
import type { Ref } from 'vue'

export * from 'vitepress/dist/client/theme-default/utils'

const isBool = (val: unknown): val is boolean => {
  return typeof val === 'boolean'
}

export const useToggle = (getToggled?: Ref<boolean>) => {
  const val = isRef(getToggled)
    ? getToggled
    : ref(isBool(getToggled) ? getToggled : false)

  return [
    val,
    (toggle?: boolean) => {
      val.value = isBool(toggle) ? toggle : !val.value
    },
  ] as const
}

export const throttleAndDebounce = (fn: () => any, delay: number) => {
  let timeout: ReturnType<typeof setTimeout>
  let called = false
  return () => {
    if (timeout) {
      clearTimeout(timeout)
    }
    if (!called) {
      fn()
      called = true
      setTimeout(() => {
        called = false
      }, delay)
    } else {
      timeout = setTimeout(fn, delay)
    }
  }
}
