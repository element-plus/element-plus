import path from 'node:path'
import fs from 'node:fs'

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
      if (!packageName) return

      const aliasOption = alias[packageName]
      id = id.replace(packageName, aliasOption.replacement)
      if (packageName === '@element-plus/components') {
        id = isDirectory(id) ? `${id}/index.ts` : `${id}.ts`
      } else if (packageName !== '@element-plus/theme-chalk') {
        id = `${id}/index.ts`
      }

      return {
        id,
        external: aliasOption.external,
      }
    },
  }
}

function isDirectory(dir: string) {
  let stat
  try {
    stat = fs.statSync(dir, { throwIfNoEntry: false })
  } catch (e) {
    if (e && (e.code === 'ENOENT' || e.code === 'ENOTDIR')) return false
    throw e
  }
  return stat && stat.isDirectory()
}
