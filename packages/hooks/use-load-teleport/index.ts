import { ref, unref } from 'vue'
import { isClient } from '@vueuse/core'
import type { ComputedRef, Ref, RendererElement } from 'vue'

type AppendTo = string | HTMLElement | RendererElement | null | undefined

export const useLoadTeleport = (
  appendTo: AppendTo | Ref<AppendTo> | ComputedRef<AppendTo>
) => {
  const isLoadTeleport = ref(false)

  if (!isClient) {
    isLoadTeleport.value = true
  } else if (unref(appendTo)) {
    const el =
      typeof unref(appendTo) === 'string'
        ? document.querySelector(unref(appendTo) as string)
        : unref(appendTo)
    if (el) {
      isLoadTeleport.value = true
    }
  }

  return {
    isLoadTeleport,
  }
}
