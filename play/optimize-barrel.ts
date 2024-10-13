import pathe from 'pathe'
import fs from 'node:fs/promises'
import { parseAsync, moduleLexerAsync } from 'oxc-parser'
import { ResolverFactory } from 'oxc-resolver'
import glob from 'fast-glob'
import MagicString from 'magic-string'
import { pkgRoot } from '@element-plus/build-utils'

import type { Plugin, ResolveFn } from 'vite'
import { Module } from 'node:module'
import path from 'node:path'


const pkgDir = pathe.normalize(pkgRoot)
const barrels = {
  'element-plus': `${pkgDir}/element-plus/index.ts`,
  '@element-plus/constants': `${pkgDir}/constants/index.ts`,
  '@element-plus/directives': `${pkgDir}/directives/index.ts`,
  '@element-plus/hooks': `${pkgDir}/hooks/index.ts`,
  '@element-plus/utils': `${pkgDir}/utils/index.ts`,
}
const alias = {
  '@element-plus/components': [`${pkgDir}/components/index.ts`],
  '@element-plus/constants': [`${pkgDir}/constants/index.ts`],
  '@element-plus/directives': [`${pkgDir}/directives/index.ts`],
  '@element-plus/hooks': [`${pkgDir}/hooks/index.ts`],
  '@element-plus/utils': [`${pkgDir}/utils/index.ts`],
}
interface Context {
  resolver?: ResolverFactory,
  programs?: Record<string, any>,
  exports: Record<string, Record<string, string>>
}
const ctx: Context = {
  exports: {}
}

const optimizeBarrelPlugin: Plugin = {
  name: 'optimize-barrel',
  async configResolved(config) {
    const resolver = new ResolverFactory({
      extensions: ['.ts', '.tsx'],
      alias
    })
    ctx.resolver = resolver
    const paths = await glob('**/*.ts', { cwd: pkgRoot, absolute: true, ignore: ['**/node_modules/**', '**/__tests__/**'] })
    const programEntries = await Promise.all(paths.map(async (path) => {
      const source = await fs.readFile(path, 'utf8')
      const result = await parseAsync(source, {
        sourceFilename: pathe.basename(path)
      })
      const program = JSON.parse(result.program)
      return [path, program]
    }))
    const programs = Object.fromEntries(programEntries)
    ctx.programs = programs
    ctx.exports['element-plus'] = await analyze(barrels['element-plus'])
    ctx.exports['@element-plus/utils'] = await analyze(barrels['@element-plus/utils'])
  },
  async transform(src, id) {
    const s = new MagicString(src)
    const result = await parseAsync(src)
    const program = JSON.parse(result.program)
    for (const node of program.body) {
      if (node.type === 'ImportDeclaration') {
        const map = {}
        const exports = ctx.exports[node.source.value]
        if (!exports || !node.specifiers) continue
        for (const specifier of node.specifiers) {
          let originalPath = exports[specifier.imported.name]
          let importedName = specifier.imported.name
          if (typeof originalPath === 'object') {
            originalPath = originalPath.path
            importedName = originalPath.name
          }
          map[originalPath] ??= []
          const text = specifier.imported.name === specifier.local.name ? importedName : `${importedName} as ${specifier.local.name}`
          map[originalPath].push(text)
        }
        const data = Object.entries(map).map(([originalPath, texts]) => {
          return `import { ${texts.join(', ')} } from '${originalPath.replace(/\.ts$/, '')}'`
        }).join('; ')
        s.overwrite(node.start, node.end, data)

      }
    }
    return {
      code: s.toString(),
      map: null
    }
  },
}

async function analyze(modulePath: string) {
  const program = ctx.programs[modulePath]
  if (!program) return
  const dir = pathe.dirname(modulePath)

  const exportNamedDeclarations = []
  const exportStartDeclarations = []
  const imports = {}
  for (const node of program.body) {
    if (node.exportKind !== 'value' && node.importKind !== 'value') continue

    // ignore default export
    switch (node.type) {
      case 'ExportNamedDeclaration':
        exportNamedDeclarations.push(node);
        break
      case 'ExportAllDeclaration':
        exportStartDeclarations.push(node);
        break
      case 'ImportDeclaration':
        for (const specifier of node.specifiers) {
          imports[specifier.local.name] = isLocalModule(node.source.value) ? getModulePath(dir, node.source.value) : node.source.value
        }
        break
    }
  }
  const localNamedExports = {}
  const externalNamedExports = {}
  const externalStarExports = {}

  const task1 = exportNamedDeclarations.map(async (node) => {
    if (node.source) {
      // export { foo } from './foo'
      if (isLocalModule(node.source.value)) {
        const path = getModulePath(dir, node.source.value)

        const exports = await analyze(path)
        if (!exports) return
        for (const specifier of node.specifiers) {
          if (!exports[specifier.local.name]) return
          externalNamedExports[specifier.exported.name] = exports[specifier.local.name]
        }
      }
      // export { foo } from 'foo'
      else {
        for (const specifier of node.specifiers) {
          externalNamedExports[specifier.exported.name] = specifier.exported.name === specifier.local.name ? node.source.value : {
            local: specifier.local.name,
            path: node.source.value
          }
        }
      }
    } else {
      // export { foo }
      if (node.specifiers?.length > 0) {
        for (const specifier of node.specifiers) {
          if (imports[specifier.local.name]) {
            // externalNamedExports[specifier.exported.name] = specifier.exported.name === specifier.local.name ?
            //   imports[specifier.local.name] : {
            //     local: specifier.local.name,
            //     path: imports[specifier.local.name]
            //   }
            externalNamedExports[specifier.exported.name] = imports[specifier.local.name]
          }
        }
      } else {
        // export {}
        if (!node.declaration) return

        if (node.declaration.type === 'VariableDeclaration') {
          for (const declaration of node.declaration.declarations) {
            // export const foo = 'foo'
            if (declaration.id.type === 'Identifier') {
              localNamedExports[declaration.id.name] = modulePath
            }
            // export const { foo } = Foo
            else if (declaration.id.type === 'ObjectPattern') {
              for (const property of declaration.id.properties) {
                localNamedExports[property.value.name] = modulePath
              }
            }
          }
        }
        // export function foo() {}
        else if (node.declaration.type === 'FunctionDeclaration') {
          localNamedExports[node.declaration.id.name] = modulePath
        }
      }
    }
  })
  const task2 = exportStartDeclarations.map(async (node) => {
    // skip analyzing third party packages
    if (!isLocalModule(node.source.value)) return

    const path = getModulePath(dir, node.source.value)
    const exports = await analyze(path)
    if (!exports) return

    if (barrels[node.source.value]) ctx.exports[node.source.value] = exports
    Object.assign(externalStarExports, exports)
  })

  await Promise.all([].concat(task1, task2))

  // local exports have the highest priority
  return {
    ...externalStarExports,
    ...externalNamedExports,
    ...localNamedExports
  }
}
function isLocalModule(moduleIdentifier) {
  return moduleIdentifier.startsWith('.') || alias[moduleIdentifier]
}
function getModulePath(dir, moduleIdentifier) {
  return pathe.normalize((ctx.resolver.sync(dir, moduleIdentifier)).path)
}
function createOptimizeBarrelPlugin() {
  return optimizeBarrelPlugin
}

export default createOptimizeBarrelPlugin
