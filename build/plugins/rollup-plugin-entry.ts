import path from 'path'
import { pkgRoot } from '../utils/paths'
import { EP_PKG, EP_PREFIX } from '../utils/constants'
import { getWorkspaceNames } from '../utils/pkg'
import type { Plugin } from 'rollup'

export async function RollupResolveEntryPlugin(): Promise<Plugin> {
  const pkgs = (await getWorkspaceNames(pkgRoot))
    .filter((pkg) => pkg.startsWith(`${EP_PREFIX}/`))
    .map((pkg) => pkg.replace(`${EP_PREFIX}/`, ''))

  return {
    name: 'element-plus-entry-plugin',

    transform(code, id) {
      if (id.includes('packages')) {
        code = code.replaceAll(
          `${EP_PREFIX}/theme-chalk`,
          `${EP_PKG}/theme-chalk`
        )
        code = code.replace(
          new RegExp(`@element-plus\\/(${pkgs.join('|')})`, 'g'),
          `${path.relative(path.dirname(id), path.resolve(pkgRoot))}/$1`
        )
        return {
          code,
          map: null,
        }
      }
    },
  }
}
