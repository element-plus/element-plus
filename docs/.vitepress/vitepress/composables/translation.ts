import { useRouter, useRoute } from 'vitepress'
import { useLang } from './lang'
import { PREFERRED_LANG_KEY } from '../constant'

import langs from '../../i18n/lang.json'

export const useTranslation = () => {
  const route = useRoute()
  const router = useRouter()
  const lang = useLang()

  const languageMap = {
    'en-US': 'English',
    'zh-CN': '中文',
    'es-ES': 'Español',
    'fr-FR': 'Français',
    'ja-JP': '日本語',
  }

  const switchLang = (targetLang: string) => {
    if (lang.value === targetLang) return
    localStorage.setItem(PREFERRED_LANG_KEY, targetLang)
    const firstSlash = route.path.indexOf('/', 1)

    const goTo = `/${targetLang}/${route.path.slice(firstSlash + 1)}`

    // location.href = goTo
    router.go(goTo)
  }

  return {
    languageMap,
    switchLang,
    langs,
    lang,
  }
}
