import path from 'path'
import type { Plugin } from 'rollup'

export default function entryPlugin(): Plugin {
  return {
    name: 'element-plus-entry-plugin',
    transform(code, id) {
      if (id.includes('packages')) {
        return {
          code: code.replace(
            /@element-plus\//g,
            `${path.relative(
              path.dirname(id),
              path.resolve(__dirname, '../packages')
            )}/`
          ),
          map: null,
        }
      }
      return { code, map: null }
    },
  }
}
