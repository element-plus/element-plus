import { computed } from 'vue'
import { useRoute } from 'vitepress'
import { defaultLang } from '../constants/language'

export const useLang = () => {
  const route = useRoute()
  return computed(() => {
    // the first part of the first slash
    const langSign = route.data.relativePath.split('/').shift()
    return langSign || defaultLang
  })
}

export const useRootPath = (lang: ReturnType<typeof useLang>) => {
  return computed(() => lang.value === defaultLang ? '' : `${lang.value}`)
}


export const useIsHome = () => {
  const route = useRoute()

  return computed(() => route.path === '/' || route.data.relativePath.split('/')[1] === 'index.md')
}
