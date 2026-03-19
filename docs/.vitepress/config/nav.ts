import { isExternal } from 'vitepress/dist/client/shared'
import { ensureLang } from '../utils/lang'
import navLocale from '../i18n/pages/sidebar.json'

// Mapping the first sub link to the nav link to avoid 404 error.

function getNav() {
  return Object.fromEntries(
    Object.entries(navLocale).map(([lang, locales]) => {
      const item: {
        link: string
        text: string
        activeMatch?: string
      }[] = Object.values(locales).map((item) => ({
        ...item,
        link: `${isExternal(item.link) ? '' : ensureLang(lang)}${item.link}`,
      }))

      return [lang, item]
    })
  )
}

export const nav = getNav()
