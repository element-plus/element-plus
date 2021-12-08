import { getCurrentInstance, computed } from 'vue'
import type { ComputedRef } from 'vue'

export const useProp = <T>(name: string): ComputedRef<T | undefined> => {
  const vm = getCurrentInstance()!
  return computed(() => vm.proxy?.$props[name] ?? undefined)
}
