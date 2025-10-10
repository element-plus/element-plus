import path from 'node:path'
import { fileURLToPath } from 'node:url'

import type { PartialResolvedId, Plugin } from 'rollup'

type AliasOption = Pick<PartialResolvedId, 'external'> & {
  replacement: string
}

const cwd = path.resolve()
const rootPath = path.resolve(cwd, '../../')
const alias: Record<string, AliasOption> = {
  '@element-plus/components': {
    replacement: path.resolve(rootPath, 'packages/components'),
  },
  '@element-plus/constants': {
    replacement: path.resolve(rootPath, 'packages/constants'),
  },
  '@element-plus/directives': {
    replacement: path.resolve(rootPath, 'packages/directives'),
  },
  '@element-plus/hooks': {
    replacement: path.resolve(rootPath, 'packages/hooks'),
  },
  '@element-plus/utils': {
    replacement: path.resolve(rootPath, 'packages/utils'),
  },
  '@element-plus/theme-chalk': {
    replacement: 'element-plus/theme-chalk',
    external: 'absolute',
  },
}
const packages = Object.keys(alias) as (keyof typeof alias)[]
export function ElementPlusAlias(): Plugin {
  return {
    name: 'element-plus-alias',
    resolveId(id) {
      const packageName = packages.find((p) => id.startsWith(p))
      if (packageName) {
        return {
          id: id.replace(packageName, alias[packageName].replacement),
          external: alias[packageName].external,
        }
      }
    },
  }
}
