import { ref, unref } from 'vue'
import { isClient } from '@vueuse/core'
import type { ComputedRef, Ref } from 'vue'

type AppendTo = string | HTMLElement

export const useLoadTeleport = (
  appendTo: AppendTo | Ref<AppendTo> | ComputedRef<AppendTo>
) => {
  const isLoad = ref(false)

  if (!isClient) {
    isLoad.value = true
  } else {
    const el =
      typeof unref(appendTo) === 'string'
        ? document.querySelector(unref(appendTo) as string)
        : unref(appendTo)
    if (el) {
      isLoad.value = true
    }
  }

  return {
    isLoad,
  }
}
