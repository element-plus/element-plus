import { onMounted, ref, watch } from 'vue'
import { isClient } from '@vueuse/core'
import { utoa } from '../utils'
import { isDark } from './dark'

import type { Link } from '../types'

const MAIN_FILE_NAME = 'App.vue'

export const usePreview = () => isClient && location.host.startsWith('preview')

export const usePreviewPR = () =>
  isClient ? location.host.split('-', 2)[1] : ''

export const usePlayground = (source: string) => {
  const code = source ? decodeURIComponent(source) : source
  const originCode = {
    [MAIN_FILE_NAME]: code,
  }

  const encoded = code ? utoa(JSON.stringify(originCode)) : ''

  const link = new URL('https://element-plus.run/')

  if (usePreview()) {
    link.searchParams.append('pr', usePreviewPR())
  }

  if (isDark.value) {
    link.searchParams.append('theme', 'dark')
  }

  if (code.includes('@vueuse/core')) {
    link.searchParams.append('extra_packages', '@vueuse/core')
  }

  if (code) {
    link.hash = encoded
  }

  return {
    encoded,
    link: link.toString(),
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
  watch(
    () => props.item.link,
    (newLink) => {
      targetLink.value = newLink
      handler()
    }
  )

  onMounted(handler)

  return targetLink
}
