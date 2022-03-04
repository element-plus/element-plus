import { EP_PKG, EP_PREFIX } from '../utils/constants'
import type { Plugin } from 'rollup'

export function ElementPlusAlias(): Plugin {
  const THEME_CHALK = `${EP_PREFIX}/theme-chalk`

  return {
    name: 'element-plus-alias-plugin',
    resolveId(id, importer, options) {
      if (!id.startsWith(EP_PREFIX)) return

      if (id.startsWith(THEME_CHALK)) {
        return {
          id: id.replaceAll(THEME_CHALK, `${EP_PKG}/theme-chalk`),
          external: 'absolute',
        }
      }

      return this.resolve(id, importer, { skipSelf: true, ...options })
    },
  }
}
