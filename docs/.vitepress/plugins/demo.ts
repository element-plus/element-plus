import path from 'path'
import fs from 'fs'
import { docRoot } from '@element-plus/build-utils'
import { sfcTs2js } from '../utils/ts2js'

import type { MarkdownRenderer } from 'vitepress'

interface ContainerOpts {
  marker?: string | undefined
  validate?(params: string): boolean
  render?: MarkdownRenderer['renderer']['rules']['container']
}
function createDemoContainer(md: MarkdownRenderer): ContainerOpts {
  return {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },

    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const description = m && m.length > 1 ? m[1] : ''
        const sourceFileToken = tokens[idx + 2]
        let source = ''
        const sourceFile = sourceFileToken.children?.[0].content ?? ''

        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(
            path.resolve(docRoot, 'examples', `${sourceFile}.vue`),
            'utf-8'
          )
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)
        const jsSource = sfcTs2js(source)
        const mdRender = (code: string) =>
          md.render(
            `\`\`\` vue\n${code}${code.endsWith('\n') ? '' : '\n'}\`\`\``
          )
        const encode = (code: string) =>
          encodeURIComponent(code).replace(/'/g, "\\'")
        const sources = `['${encode(mdRender(source))}', '${encode(mdRender(jsSource))}']`
        const rawSources = `['${encode(source)}', '${encode(jsSource)}']`
        const res = `<Demo :sources="${sources}" path="${sourceFile}" :raw-sources="${rawSources}" description="${encodeURIComponent(md.render(description))}">
  <template #source><ep-${sourceFile.replaceAll('/', '-')}/></template>`
        return res
      } else {
        return '</Demo>\n'
      }
    },
  }
}

export default createDemoContainer
