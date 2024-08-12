import { ref, unref } from 'vue'
import { isClient } from '@vueuse/core'
import { isString } from '@element-plus/utils'
import type { ComputedRef, Ref, RendererElement } from 'vue'

type AppendTo = string | HTMLElement | RendererElement | null | undefined

export const useLoadTeleport = (
  appendTo: AppendTo | Ref<AppendTo> | ComputedRef<AppendTo>
) => {
  const isLoadTeleport = ref(false)

  if (!isClient) {
    isLoadTeleport.value = true
  } else if (unref(appendTo)) {
    try {
      const el = isString(unref(appendTo))
        ? document.querySelector(unref(appendTo) as string)
        : unref(appendTo)
      if (el) {
        isLoadTeleport.value = true
      }
    } catch {}
  }

  return isLoadTeleport
}
