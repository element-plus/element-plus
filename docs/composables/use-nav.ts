import { computed } from 'vue'
import { useData } from 'vitepress'

import { useLang } from '../utils/routes'

export const useNav = () => {

  const { theme } = useData()
  const lang = useLang()

  return computed(() => {
    return theme.value.nav[lang.value]
  })
}
