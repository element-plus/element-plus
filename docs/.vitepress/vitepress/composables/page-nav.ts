import { computed } from 'vue'
import { useData } from 'vitepress'
import {
  ensureStartingSlash,
  isArray,
  removeExtention as removeExtension,
} from '../utils'
import { useLang } from './lang'
import { getFlatSideBarLinks, getSidebarConfig } from './sidebar'

export function usePageNav() {
  const { page, theme } = useData()
  const lang = useLang()

  const path = computed(() => {
    return removeExtension(ensureStartingSlash(page.value.relativePath))
  })

  const candidates = computed(() => {
    const config = getSidebarConfig(
      theme.value.sidebars,
      path.value,
      lang.value
    )
    return isArray(config) ? getFlatSideBarLinks(config) : []
  })

  const index = computed(() => {
    return candidates.value.findIndex((item) => {
      return item.link === path.value
    })
  })
  const next = computed(() => {
    if (
      theme.value.nextLinks !== false &&
      index.value > -1 &&
      index.value < candidates.value.length - 1
    ) {
      return candidates.value[index.value + 1]
    }

    return null
  })

  const prev = computed(() => {
    if (theme.value.prevLinks !== false && index.value > 0) {
      return candidates.value[index.value - 1]
    }
    return null
  })

  const hasLinks = computed(() => !!next.value || !!prev.value)
  return {
    next,
    prev,
    hasLinks,
  }
}
