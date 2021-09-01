import { computed } from 'vue'
import { useRoute, useData } from 'vitepress'
import { useActiveSidebarLinks } from 'vitepress/dist/client/theme-default/composables/activeSidebarLink'
import { useLang } from '../utils/routes'
import { ensureStartingSlash } from '../utils/index'

type SidebarItem = {
  text: string
  link: string
}

type SidebarConfig = SidebarItem[]

type Sidebar = {
  [key: string]: SidebarConfig
} | false | 'auto'

export function useSidebar() {
  const route = useRoute()
  const { site } = useData()
  const lang = useLang()
  useActiveSidebarLinks()
  return computed(() => {
    const sidebars = getSidebarConfig(site.value.themeConfig.sidebars, route.data.relativePath, lang.value)
    return sidebars
  })
}

function getSidebarConfig(sidebar: Sidebar, path: string, lang: string) {
  if (sidebar === false || Array.isArray(sidebar) || sidebar === 'auto') {
    return []
  }

  path = ensureStartingSlash(path)
  for (const dir in sidebar) {
    // make sure the multi sidebar key starts with slash too
    if (path.startsWith(ensureStartingSlash(`${lang}${dir}`))) {
      return sidebar[dir][lang]
    }
  }
  return []
}
