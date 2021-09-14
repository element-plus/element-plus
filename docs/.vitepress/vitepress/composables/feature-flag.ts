import { computed } from 'vue'
import { useData } from 'vitepress'

export const useFeatureFlag = (flag: string) => {
  const { theme } = useData()

  return computed(() => {
    return (theme.value.features || {})[flag]
  })
}
