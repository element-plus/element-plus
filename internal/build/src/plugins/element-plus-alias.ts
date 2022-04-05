import { EP_PKG, EP_PREFIX } from '../constants'

import type { Plugin } from 'rollup'

export function ElementPlusAlias(): Plugin {
  const themeChalk = 'theme-chalk'
  const sourceThemeChalk = `${EP_PREFIX}/${themeChalk}` as const
  const bundleThemeChalk = `${EP_PKG}/${themeChalk}` as const

  return {
    name: 'element-plus-alias-plugin',
    resolveId(id) {
      if (!id.startsWith(sourceThemeChalk)) return
      return {
        id: id.replaceAll(sourceThemeChalk, bundleThemeChalk),
        external: 'absolute',
      }
    },
  }
}
