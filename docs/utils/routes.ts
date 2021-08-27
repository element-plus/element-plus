import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { Language } from '../constants/language'

export const useLang = () => {
  const route = useRoute()
  return computed(() => route.path.split('/')[1] || Language.CN)
}
