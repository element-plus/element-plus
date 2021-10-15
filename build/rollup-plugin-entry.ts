import path from 'path'
import { pkgRoot } from './utils/paths'
import { EP_PREFIX } from './constants'
import type { Plugin } from 'rollup'

export function RollupResolveEntryPlugin(): Plugin {
  return {
    name: 'element-plus-entry-plugin',

    transform(code, id) {
      if (id.includes('packages')) {
        code = code.replaceAll(
          `${EP_PREFIX}/theme-chalk`,
          `element-plus/theme-chalk`
        )
        code = code.replace(
          /@element-plus\/(components|directives|utils|hooks|tokens|locale)/g,
          `${path.relative(path.dirname(id), path.resolve(pkgRoot))}/$1`
        )
        return code
      }
    },
  }
}
