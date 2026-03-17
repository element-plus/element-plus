import { ComputedRef, computed, onMounted, ref, watch } from 'vue'
import { isClient } from '@vueuse/core'
import { utoa } from '../utils'
import { isDark } from './dark'

import type { Link } from '../types'

const MAIN_FILE_NAME = 'App.vue'

export const usePreview = () => isClient && location.host.startsWith('preview')

export const usePreviewPR = () =>
  isClient ? location.host.split('-', 2)[1] : ''

export const usePlayground = (source: ComputedRef<string>) => {
  const code = computed(() =>
    source.value ? decodeURIComponent(source.value) : source.value
  )
  const originCode = computed(() => ({
    [MAIN_FILE_NAME]: code.value,
  }))
  const encoded = computed(() =>
    code.value ? utoa(JSON.stringify(originCode.value)) : ''
  )

  const link = computed(() => {
    const _link = new URL('https://element-plus.run/')

    if (usePreview()) {
      _link.searchParams.append('pr', usePreviewPR())
    }
    if (isDark.value) {
      _link.searchParams.append('theme', 'dark')
    }
    if (code.value.includes('@vueuse/core')) {
      _link.searchParams.append('extra_packages', '@vueuse/core')
    }
    if (code.value) {
      _link.hash = encoded.value
    }
    return _link.toString()
  })

  return {
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
