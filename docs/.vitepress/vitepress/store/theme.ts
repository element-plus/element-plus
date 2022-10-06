import { watch } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { EpTheme } from '~/utils/theme'
import { parseFromCss, themes } from '~/utils/theme'
import { setCssVarValue } from '~/utils'
import { isColor } from '~/utils/colors/helper'

export const useThemeStore = defineStore('theme', () => {
  const theme = useStorage<EpTheme>('ep-custom-theme', themes.default)
  console.log(theme.value)
  theme.value = Object.assign({}, themes.default, theme.value)

  if (JSON.stringify(theme.value) !== JSON.stringify(themes.default)) {
    console.log('init')
    init()
  }

  watch(
    () => theme.value,
    () => {
      init()
    }
  )

  /**
   * init and load theme
   */
  function init() {
    if (typeof theme.value.colors === 'object') {
      Object.keys(theme.value.colors).forEach((name) => {
        setCssVarValue(`--el-color-${name}`, theme.value.colors![name])
      })
    }
  }

  /**
   * update main color & generated colors
   * @param name
   * @param value
   */
  function updateColor(name: string, value: string) {
    if (!theme.value.colors) theme.value.colors = {}
    theme.value.colors[name] = value
    if (!isColor(value)) return
    setCssVarValue(`--el-color-${name}`, value)
  }

  /**
   * parse css or json
   * @param text
   * @param type
   */
  function parse(text: string, type: 'css' | 'json') {
    let data: Partial<EpTheme> = {}
    if (type === 'css') {
      data = parseFromCss(text)
    } else if (type === 'json') {
      data = JSON.parse(text)
    }
    theme.value = data
    return data
  }

  function reset() {
    theme.value = JSON.parse(JSON.stringify(themes.default))
    document.documentElement.removeAttribute('style')
  }

  return {
    theme,
    init,
    updateColor,
    parse,
    reset,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot))
