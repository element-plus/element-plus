import path from 'path'
import fs from 'node:fs'

import type { PartialResolvedId, Plugin } from 'rollup'

type AliasOption = Pick<PartialResolvedId, 'external'> & {
  replacement: string
}

const cwd = path.resolve()
const rootPath = path.resolve(cwd, '../../')
const alias: Record<string, AliasOption> = {
  '@element-plus/components': {
    replacement: path.join(rootPath, 'packages/components'),
  },
  '@element-plus/constants': {
    replacement: path.join(rootPath, 'packages/constants'),
  },
  '@element-plus/directives': {
    replacement: path.join(rootPath, 'packages/directives'),
  },
  '@element-plus/hooks': {
    replacement: path.join(rootPath, 'packages/hooks'),
  },
  '@element-plus/utils': {
    replacement: path.join(rootPath, 'packages/utils'),
  },
  '@element-plus/locale': {
    replacement: path.join(rootPath, 'packages/locale'),
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
    async resolveId(id) {
      const packageName = packages.find((p) => id.startsWith(p))
      if (!packageName) return

      const aliasOption = alias[packageName]
      id = id.replace(packageName, aliasOption.replacement)
      if (packageName !== '@element-plus/theme-chalk') {
        id = isDirectory(id)
          ? path.join(id, 'index.ts')
          : path.normalize(`${id}.ts`)
      }

      return {
        id,
        external: aliasOption.external,
      }
    },
  }
}

function isDirectory(dir: string) {
  const stat = fs.statSync(dir, { throwIfNoEntry: false })
  return stat?.isDirectory() ?? false
}
