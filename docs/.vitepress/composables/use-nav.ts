import { computed } from 'vue'
import { useData } from 'vitepress'

import { useLang } from '../utils/routes'
import { ensureLang } from '../site-utils'

export const useNav = () => {

  const { theme } = useData()
  const lang = useLang()

  return computed(() => {
    return theme.value.nav[lang.value]
  })
}
