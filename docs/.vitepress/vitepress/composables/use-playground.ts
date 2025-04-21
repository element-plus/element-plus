import { onMounted, ref, watch } from 'vue'
import { utoa } from '../utils'
import { isDark } from './dark'
import type { Link } from '../types'

const MAIN_FILE_NAME = 'App.vue'

export const usePreview = () => location.host.startsWith('preview')

export const usePreviewPR = () => location.host.split('-', 2)[1]

export const usePlayground = (source: string) => {
  const code = source ? decodeURIComponent(source) : source
  const originCode = {
    [MAIN_FILE_NAME]: code,
  }

  const encoded = code ? utoa(JSON.stringify(originCode)) : ''

  let link = `https://element-plus.run/`

  if (usePreview()) {
    link = `${link}?pr=${usePreviewPR()}`
  }

  if (isDark.value) {
    link = `${link}${usePreview() ? '&' : '?'}theme=dark`
  }

  if (code) {
    link += `#${encoded}`
  }

  return {
    encoded,
    link,
  }
}

export const usePlaygroundPreview = (
  props: Readonly<{
    item: Link
  }>
) => {
  const targetLink = ref(props.item.link)

  const handler = () => {
    if (props.item.text === 'Playground') {
      const { link } = usePlayground('')

      targetLink.value = link
    }
  }

  watch(() => isDark.value, handler)

  onMounted(handler)

  return targetLink
}
