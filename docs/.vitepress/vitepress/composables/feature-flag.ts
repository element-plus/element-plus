import { computed, unref } from 'vue'
import { useData } from 'vitepress'
import { useBrowserLocation } from '@vueuse/core'
import type { MaybeRef } from '@vueuse/core'

const location = useBrowserLocation()

export const useFeatureFlag = (flag: MaybeRef<string>) => {
  const { theme } = useData()

  return computed(() => {
    const _flag = unref(flag)
    const params = new URLSearchParams(location.value.search)
    return params.get(`feature:${_flag}`) || (theme.value.features || {})[_flag]
  })
}
