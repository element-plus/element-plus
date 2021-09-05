import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { defaultLang, Language } from '../constants/language'

export const useLang = () => {
  const route = useRoute()
  return computed(() => {
    // the first part of the first slash
    const path = route.data?.relativePath
    let langSign: Language

    if (path?.includes('/')) {
      langSign = path.split('/').shift() as Language
    } else {
      langSign = defaultLang
    }
    return langSign
  })
}

export const useRootPath = (lang: ReturnType<typeof useLang>) => {
  return computed(() => (lang.value === defaultLang ? '' : `${lang.value}`))
}

export const useIsHome = () => {
  const route = useRoute()

  return computed(() => {
    const { relativePath: path } = route.data || {}

    return !path.includes('/') ? true : path.split('/')[1] === 'index.md'
  })
}
