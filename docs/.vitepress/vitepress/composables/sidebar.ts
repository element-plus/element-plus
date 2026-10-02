import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import { ensureStartingSlash } from '../utils'
import { useLang } from './lang'

export const useSidebar = () => {
  const route = useRoute()
  const { site, page } = useData()
  const lang = useLang()
  if (!page.value) {
    return {
      sidebars: computed(() => []),
      hasSidebar: computed(() => false),
    }
  }
  const sidebars = computed(() => {
    if (page.value.frontmatter.sidebar === false) return []
    const sidebars = getSidebarConfig(
      site.value.themeConfig.sidebars,
      route.data.relativePath,
      lang.value
    )
    return sidebars
  })

  return {
    sidebars,
    hasSidebar: computed(() => sidebars.value.length > 0),
  }
}

export function isSideBarConfig(sidebar) {
  return sidebar === false || sidebar === 'auto' || Array.isArray(sidebar)
}
export function isSideBarGroup(item) {
  return item.children !== undefined
}
export function isSideBarEmpty(sidebar) {
  return Array.isArray(sidebar) ? sidebar.length === 0 : !sidebar
}

type SidebarItem = {
  text: string
  link: string
}

type SidebarConfig = SidebarItem[]

type Sidebar =
  | {
      [key: string]: SidebarConfig
    }
  | false
  | 'auto'

export function getSidebarConfig(sidebar: Sidebar, path: string, lang: string) {
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

export function getFlatSideBarLinks(sidebar) {
  return sidebar.reduce((links, item) => {
    if (item.link) {
      links.push({ text: item.text, link: item.link })
    }
    if (isSideBarGroup(item)) {
      links = [...links, ...getFlatSideBarLinks(item.children)]
    }
    return links
  }, [])
}
