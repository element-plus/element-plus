import fs from 'fs'
import { Visitor, parseSync } from 'oxc-parser'
import MagicString from 'magic-string'

import type { Plugin } from 'rollup'

function extractPropsIndexes(file: string, code: string): number[] {
  const result = parseSync(file, code)
  const propsIndexes: number[] = []

  const visitor = new Visitor({
    Property(node) {
      if (node.key.type === 'Identifier' && node.key.name === 'props') {
        if (propsIndexes.length) {
          return
        }
        propsIndexes.push(node.start, node.end)
      }
    },
  })
  visitor.visit(result.program)
  return propsIndexes
}

function extractImportPropsStatements(
  file: string,
  code: string,
  name: string
): string {
  const result = parseSync(file, code, { lang: 'ts' })
  let fileName = ''
  const visitor = new Visitor({
    ImportDeclaration(node) {
      for (const specifier of node.specifiers) {
        if (
          specifier.type === 'ImportSpecifier' &&
          specifier.imported.type === 'Identifier' &&
          specifier.imported.name === name
        ) {
          fileName = node.source.value as string
        }
      }
    },
  })
  visitor.visit(result.program)
  return fileName
}

export function SupplyValidator(): Plugin {
  const cacheId = new Map<string, boolean>()
  // some props type name and prop name are not consistent and require remapping
  const reMapPropsName: Record<string, string> = {
    elTooltipContentProps: 'useTooltipContentProps', // tooltip/src/conent.vue
    cascaderComponentProps: 'cascaderProps',
  }
  // some import file need remapping
  const reMapImportFile: Record<string, string> = {
    './types': './virtual-tree', // tree-node.vue
  }
  return {
    name: 'supply-validator-plugin',
    transform: {
      order: 'post',
      async handler(code, id) {
        const isVueFile = id.includes('.vue')
        if (cacheId.has(id) || !isVueFile) {
          return
        }

        const vueFilePath = id.split('?')[0]
        if (!vueFilePath.endsWith('.vue')) {
          return
        }

        const rawContent = await fs.promises.readFile(vueFilePath, 'utf-8')
        const propsType = rawContent.match(/defineProps<(\w+)>/)?.[1]
        if (!propsType) {
          cacheId.set(id, true)
          return
        }

        const propsIndex = extractPropsIndexes(vueFilePath, code)
        if (propsIndex.length !== 2) {
          cacheId.set(id, true)
          return
        }
        const extractImportFile = extractImportPropsStatements(
          vueFilePath,
          rawContent.split(/<script lang="ts" setup>|<\/script>/g)[1],
          propsType
        )
        if (!extractImportFile) {
          cacheId.set(id, true)
          return
        }
        const propsName = propsType[0].toLowerCase() + propsType.slice(1)
        const s = new MagicString(code)
        s.prepend(
          `import { ${reMapPropsName[propsName] || propsName} } from '${reMapImportFile[extractImportFile] || extractImportFile}'\n`
        )
        s.overwrite(
          propsIndex[0],
          propsIndex[1],
          `props: ${reMapPropsName[propsName] || propsName}`
        )
        cacheId.set(id, true)
        return {
          code: s.toString(),
          map: s.generateMap({ hires: true }),
        }
      },
    },
  }
}
