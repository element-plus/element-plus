import { EP_PKG, EP_PREFIX } from '../utils/constants'
import { getDistPackages } from '../utils/pkg'
import type { Plugin } from 'rollup'

export async function ElementPlusAlias(): Promise<Plugin> {
  const pkgs = await getDistPackages()

  return {
    name: 'element-plus-alias-plugin',
    resolveId(id, importer, options) {
      if (!id.startsWith(EP_PREFIX)) return

      const THEME_CHALK = `${EP_PREFIX}/theme-chalk`
      if (id.startsWith(THEME_CHALK)) {
        return {
          id: id.replaceAll(THEME_CHALK, `${EP_PKG}/theme-chalk`),
          external: 'absolute',
        }
      }

      let updatedId = id
      for (const pkg of pkgs) {
        if (id.startsWith(pkg.name))
          updatedId = updatedId.replace(pkg.name, pkg.dir)
      }
      return this.resolve(id, importer, { skipSelf: true, ...options })
    },
  }
}
