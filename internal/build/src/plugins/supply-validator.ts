import fs from 'fs'
import { Visitor, parseSync } from 'oxc-parser'
import MagicString from 'magic-string'

import type { Plugin } from 'rolldown'

function extractPropsIndexesAndMergeProp(
  file: string,
  code: string
): {
  propsIndexes: number[]
  mergePropsIndexes: number[]
} {
  const result = parseSync(file, code)
  const propsIndexes: number[] = []
  const mergePropsIndexes: number[] = []

  const visitor = new Visitor({
    Property(node) {
      if (node.key.type === 'Identifier' && node.key.name === 'props') {
        if (propsIndexes.length) {
          return
        }
        propsIndexes.push(node.start, node.end)
      }
    },
    ImportDeclaration(node) {
      for (const specifier of node.specifiers) {
        if (
          specifier.type === 'ImportSpecifier' &&
          specifier.imported.type === 'Identifier' &&
          specifier.imported.name === 'mergeDefaults'
        ) {
          mergePropsIndexes.push(specifier.start, specifier.end + 1)
        }
      }
    },
  })
  visitor.visit(result.program)

  return {
    propsIndexes,
    mergePropsIndexes,
  }
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
      filter: {
        id: {
          include: /\.vue.*type=script/,
          exclude: /input-otp\.vue/,
        },
      },
      handler(code, id) {
        const vueFilePath = id.slice(0, id.indexOf('?'))
        const rawContent = fs.readFileSync(vueFilePath, 'utf-8')
        const propsType = rawContent.match(/defineProps<(\w+)>/)?.[1]
        if (!propsType) return

        const { propsIndexes, mergePropsIndexes } =
          extractPropsIndexesAndMergeProp(id, code)
        if (propsIndexes.length !== 2) return

        const scriptContent = rawContent.split(
          /<script lang="ts" setup>|<\/script>/g
        )[1]
        const extractImportFile = extractImportPropsStatements(
          vueFilePath,
          scriptContent,
          propsType
        )
        if (!extractImportFile) return

        const propsName = propsType[0].toLowerCase() + propsType.slice(1)
        const s = new MagicString(code)
        const importFilePath =
          reMapImportFile[extractImportFile] || extractImportFile
        if (mergePropsIndexes.length === 2) {
          s.remove(mergePropsIndexes[0], mergePropsIndexes[1])
        }
        s.prepend(
          `import { ${reMapPropsName[propsName] || propsName} } from '${importFilePath}'\n`
        )
        s.overwrite(
          propsIndexes[0],
          propsIndexes[1],
          `props: ${reMapPropsName[propsName] || propsName}`
        )
        return {
          code: s.toString(),
          map: s.generateMap({ hires: true }),
        }
      },
    },
  }
}
