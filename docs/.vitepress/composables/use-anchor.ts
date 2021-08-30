import { computed } from 'vue'
import { useRoute } from 'vitepress'

import type { PageData } from 'vitepress'

export const useAnchor = () => {
  const route = useRoute()

  return computed(() => {
    const { headers, frontmatter } = route.data

    const { sidebarDepth, sidebar } = frontmatter
    // when sidebar is set to false, then no anchor should be displayed
    if (sidebar === false) return []

    return resolveAutoSidebar(headers, sidebarDepth)

  })
}

function resolveAutoSidebar(headers: PageData['headers'], depth: number) {
  const ret = []
  if (headers === undefined) {
    return []
  }
  let lastH2 = undefined
  headers.forEach(({ level, title, slug }) => {
    if (level - 1 > depth) {
      return
    }
    const item = {
      text: title,
      link: `#${slug}`,
    }
    if (level === 2) {
      lastH2 = item
      ret.push(item)
    } else if (lastH2) {
      (lastH2.children || (lastH2.children = [])).push(item)
    }
  })
  return ret
}
