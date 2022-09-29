import { acceptHMRUpdate, defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { EpTheme } from '~/utils/theme'
import { themes } from '~/utils/theme'
import { setCssVarValue } from '~/utils'
import { isColor } from '~/utils/colors/helper'

export const useThemeStore = defineStore('theme', () => {
  const theme = useStorage<EpTheme>('ep-custom-theme', themes.default)

  if (JSON.stringify(theme.value) !== JSON.stringify(themes.default)) {
    Object.keys(theme.value.colors).forEach((name) => {
      setCssVarValue(`--el-color-${name}`, theme.value.colors[name])
    })
  }

  /**
   * update main color & generated colors
   * @param name
   * @param value
   */
  function updateColor(name: string, value: string) {
    theme.value.colors[name] = value
    if (!isColor(value)) return
    setCssVarValue(`--el-color-${name}`, value)
  }

  function reset() {
    theme.value = JSON.parse(JSON.stringify(themes.default))
    document.documentElement.removeAttribute('style')
  }

  return {
    theme,
    updateColor,
    reset,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot))
