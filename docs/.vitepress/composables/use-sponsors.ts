import { computed } from 'vue'
import { useData } from 'vitepress'

export const useSponsors = () => {
  const { site } = useData()
  return computed(() => {
    return site.value.themeConfig.sponsors
  })
}
