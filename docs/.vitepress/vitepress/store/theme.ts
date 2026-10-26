import { computed, watch } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import defaultTheme from '../utils/theme/store/default'
import {
  normalizeColor,
  normalizeTheme,
  parseFromCss,
} from '../utils/theme/parse'
import { generateCssFromTheme } from '../utils/theme/helper'
import { themeColorNames } from '../utils/theme/types'

import type { EpTheme, EpThemeColor } from '../utils/theme/types'

const styleId = 'ep-custom-theme'

export const useThemeStore = defineStore('theme', () => {
  const theme = useStorage<EpTheme>(
    'ep-custom-theme',
    normalizeTheme(defaultTheme)
  )
  const fullTheme = computed(() => {
    try {
      return normalizeTheme(theme.value)
    } catch {
      return normalizeTheme(defaultTheme)
    }
  })

  // Keep editor styles separate so reset never removes the site's inline styles.
  watch(fullTheme, init, { immediate: true, flush: 'sync' })

  function init() {
    if (typeof document === 'undefined') return
    let style = document.querySelector<HTMLStyleElement>(`#${styleId}`)
    if (
      themeColorNames.every(
        (name) => fullTheme.value.colors[name] === defaultTheme.colors[name]
      )
    ) {
      style?.remove()
      return
    }
    if (!style) {
      style = document.createElement('style')
      style.id = styleId
      document.head.appendChild(style)
    }
    style.textContent = generateCssFromTheme({
      ...fullTheme.value,
      namespace: 'el',
    })
  }

  function updateColor(name: EpThemeColor, value: string | null) {
    if (!themeColorNames.includes(name)) return false
    try {
      const color = normalizeColor(value)
      theme.value = {
        ...fullTheme.value,
        colors: { ...fullTheme.value.colors, [name]: color },
      }
      return true
    } catch {
      return false
    }
  }

  function parse(text: string, type: 'css' | 'json') {
    const data =
      type === 'css' ? parseFromCss(text) : normalizeTheme(JSON.parse(text))
    theme.value = data
    return data
  }

  function reset() {
    theme.value = normalizeTheme(defaultTheme)
  }

  return { theme, fullTheme, init, updateColor, parse, reset }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot))
