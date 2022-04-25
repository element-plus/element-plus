import { computed, unref } from 'vue'
import { useData } from 'vitepress'
import { isClient, useBrowserLocation } from '@vueuse/core'
import type { MaybeRef } from '@vueuse/core'

const location = useBrowserLocation()

export const useFeatureFlag = (flag: MaybeRef<string>) => {
  const { theme } = useData()
  return computed(() => {
    // On server rendering there will was no `location`
    if (!isClient) return false

    const _flag = unref(flag)
    const params = new URLSearchParams(location.value.search)
    return params.get(`feature:${_flag}`) || (theme.value.features || {})[_flag]
  })
}
