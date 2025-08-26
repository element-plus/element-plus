import fs from 'fs'
import path from 'path'
import { camelize } from '@vue/shared'
import glob from 'fast-glob'
import { docRoot, docsDirName, projRoot } from '@element-plus/build-utils'
import { REPO_BRANCH, REPO_PATH } from '@element-plus/build-constants'
import { getLang, languages } from '../utils/lang'
import footerLocale from '../i18n/component/footer.json'

import type { Plugin } from 'vite'

type Append = Record<'headers' | 'footers' | 'scriptSetups', string[]>

let compPaths: string[]

export function MarkdownTransform(): Plugin {
  return {
    name: 'element-plus-md-transform',

    enforce: 'pre',

    async buildStart() {
      const pattern = `{${[...languages, languages[0]].join(',')}}/component`

      compPaths = await glob(pattern, {
        cwd: docRoot,
        absolute: true,
        onlyDirectories: true,
      })
    },

    async transform(code, id) {
      if (!id.endsWith('.md')) return

      const componentId = path.basename(id, '.md')
      const append: Append = {
        headers: [],
        footers: [],
        scriptSetups: getExampleImports(componentId),
      }

      code = transformVpScriptSetup(code, append)

      if (compPaths.some((compPath) => id.startsWith(compPath))) {
        code = transformComponentMarkdown(id, componentId, code, append)
      }

      return combineMarkdown(
        code,
        [combineScriptSetup(append.scriptSetups), ...append.headers],
        append.footers
      )
    },
  }
}

const combineScriptSetup = (codes: string[]) =>
  `\n<script setup>
${codes.join('\n')}
</script>
`

const combineMarkdown = (
  code: string,
  headers: string[],
  footers: string[]
) => {
  const frontmatterEnds = code.indexOf('---\n\n')
  const firstHeader = code.search(/\n#{1,6}\s.+/)
  const sliceIndex =
    firstHeader < 0
      ? frontmatterEnds < 0
        ? 0
        : frontmatterEnds + 4
      : firstHeader

  if (headers.length > 0)
    code =
      code.slice(0, sliceIndex) + headers.join('\n') + code.slice(sliceIndex)
  code += footers.join('\n')

  return `${code}\n`
}

const vpScriptSetupRE = /<vp-script\s(.*\s)?setup(\s.*)?>([\s\S]*)<\/vp-script>/

const transformVpScriptSetup = (code: string, append: Append) => {
  const matches = code.match(vpScriptSetupRE)
  if (matches) code = code.replace(matches[0], '')
  const scriptSetup = matches?.[3] ?? ''
  if (scriptSetup) append.scriptSetups.push(scriptSetup)
  return code
}

const GITHUB_BLOB_URL = `https://github.com/${REPO_PATH}/blob/${REPO_BRANCH}`
const GITHUB_TREE_URL = `https://github.com/${REPO_PATH}/tree/${REPO_BRANCH}`
const transformComponentMarkdown = (
  id: string,
  componentId: string,
  code: string,
  append: Append
) => {
  const lang = getLang(id)
  const docUrl = `${GITHUB_BLOB_URL}/${docsDirName}/en-US/component/${componentId}.md`
  const componentUrl = `${GITHUB_TREE_URL}/packages/components/${componentId}`
  const styleUrl = `${GITHUB_TREE_URL}/packages/theme-chalk/src/${componentId}.scss`

  const componentPath = path.resolve(
    projRoot,
    `packages/components/${componentId}`
  )
  const stylePath = path.resolve(
    projRoot,
    `packages/theme-chalk/src/${componentId}.scss`
  )

  const isComponent = fs.existsSync(componentPath)
  const isHaveComponentStyle = fs.existsSync(stylePath)

  const links = [[footerLocale[lang].docs, docUrl]]

  if (isComponent && isHaveComponentStyle)
    links.unshift([footerLocale[lang].style, styleUrl])

  if (isComponent) links.unshift([footerLocale[lang].component, componentUrl])

  const linksText = links
    .filter((i) => i)
    .map(([text, link]) => `[${text}](${link})`)
    .join(' • ')

  const sourceSection = `
## ${footerLocale[lang].source}

${linksText}`

  const contributorsSection = `
## ${footerLocale[lang].contributors}

<Contributors id="${componentId}" />`

  append.footers.push(sourceSection, isComponent ? contributorsSection : '')

  return code
}

const getExampleImports = (componentId: string) => {
  const examplePath = path.resolve(docRoot, 'examples', componentId)
  if (!fs.existsSync(examplePath)) return []
  const files = fs.readdirSync(examplePath)
  const imports: string[] = []

  for (const item of files) {
    if (!/\.vue$/.test(item)) continue
    const file = item.replace(/\.vue$/, '')
    const name = camelize(`Ep-${componentId}-${file}`)

    imports.push(
      `import ${name} from '../../examples/${componentId}/${file}.vue'`
    )
  }

  return imports
}
