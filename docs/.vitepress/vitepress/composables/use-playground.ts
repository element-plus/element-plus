import { utoa } from '../utils'
import { isDark } from './dark'

const MAIN_FILE_NAME = 'App.vue'

export const usePlayground = (source: string) => {
  const code = decodeURIComponent(source)
  const originCode = {
    [MAIN_FILE_NAME]: code,
  }

  const encoded = utoa(JSON.stringify(originCode))
  const isPreview = location.host.startsWith('preview')
  let link = `https://element-plus.run/`
  if (isPreview) {
    const pr = location.host.split('-', 2)[1]
    link = `${link}?pr=${pr}`
  }
  if (isDark.value) {
    if (isPreview) {
      link += '&theme=dark'
    } else {
      link = `${link}?theme=dark`
    }
  }
  link += `#${encoded}`
  return {
    encoded,
    link,
  }
}
