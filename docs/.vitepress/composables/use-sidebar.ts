import { computed } from 'vue'
import { useRoute, useData } from 'vitepress'
import { useLang } from '../utils/routes'
import { getSidebarConfig } from '../utils/sidebar'

export function useSidebar() {
  const route = useRoute()
  const { site } = useData()
  const lang = useLang()
  return computed(() => {
    const sidebars = getSidebarConfig(
      site.value.themeConfig.sidebars,
      route.data.relativePath,
      lang.value
    )
    return sidebars
  })
}
