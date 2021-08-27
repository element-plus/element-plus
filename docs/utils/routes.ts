import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { defaultLang, langPack, Language } from '../constants/language'

export const useLang = () => {
  const route = useRoute()
  return computed(() => {
    const langSign = route.path.split('/')[1]
    return langPack.includes(langSign as Language) ? langSign : defaultLang
  })
}

export const useRootPath = (lang: ReturnType<typeof useLang>) => {
  return computed(() => lang.value === defaultLang ? '' : `${lang.value}`)
}
