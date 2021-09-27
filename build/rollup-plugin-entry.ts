import path from 'path'
import type { Plugin } from 'rollup'

export function RollupResolveEntryPlugin(): Plugin {
  return {
    name: 'element-plus-entry-plugin',
    transform(code, id) {
      if (id.includes('packages')) {
        return {
          code: code.replace(
            /@element-plus\/(components|directives|utils|hooks|tokens|locale)/g,
            `${path.relative(
              path.dirname(id),
              path.resolve(__dirname, '../packages')
            )}/$1`
          ),
          map: null,
        }
      }
      return { code, map: null }
    },
  }
}
