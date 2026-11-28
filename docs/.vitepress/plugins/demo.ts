import path from 'path'
import fs from 'fs'
import { docRoot } from '@element-plus/build-utils'
import { sfcTs2js } from '../utils/ts2js.ts'

import type { MarkdownRenderer } from 'vitepress'

interface ContainerOpts {
  marker?: string | undefined
  validate?(params: string): boolean
  render?: MarkdownRenderer['renderer']['rules']['container']
}

const encode = (code: string) => encodeURIComponent(code).replace(/'/g, "\\'")

const toFence = (code: string) =>
  `\`\`\`vue\n${code}${code.endsWith('\n') ? '' : '\n'}\`\`\``

// markdown-it-async emits a placeholder when `md.render` hits the async
// highlighter synchronously. The demo container renders its sources via
// `md.render` and URL-encodes the output into the `:sources` binding, so
// `renderAsync`'s placeholder replacement never sees them and the demo
// sources end up without syntax highlighting. Wrap `md.renderAsync` (the
// same pattern VitePress's snippet plugin uses) and resolve the encoded
// placeholders once the page has been rendered.
const encodedPlaceholderMark = '%3C!--%3A%3Amarkdown-it-async%3A%3A'
const encodedPlaceholderRe =
  /%3Cpre%3E%3C!--%3A%3Amarkdown-it-async%3A%3A(\w+)%3A%3A--%3E%3Ccode%3E[\s\S]*?%3C%2Fcode%3E%3C%2Fpre%3E/g
const placeholderRe =
  /<pre><!--::markdown-it-async::\w+::--><code>([\s\S]*?)<\/code><\/pre>/

const unescapeHtml = (html: string) =>
  html
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')

const resolvePlaceholder = async (
  md: MarkdownRenderer,
  id: string,
  encoded: string,
  renderPage: (src: string, env?: any) => Promise<string>
): Promise<string> => {
  const entry = md.placeholderMap.get(id)
  if (entry) {
    md.placeholderMap.delete(id)
    const highlighted = (await entry[0]) || ''
    if (highlighted) {
      return encode(
        highlighted.startsWith('<pre')
          ? highlighted
          : `<pre><code class="language-vue">${highlighted}</code></pre>`
      )
    }
  }

  // the placeholder entry is already resolved or missing: recover the
  // source from the placeholder itself and render it again
  const escaped = decodeURIComponent(encoded).match(placeholderRe)?.[1] ?? ''
  return encode(await renderPage(toFence(unescapeHtml(escaped))))
}

export const setupDemoHighlightResolution = (md: MarkdownRenderer) => {
  const renderPage = md.renderAsync.bind(md)

  md.renderAsync = async (src: string, env?: any) => {
    const html = await renderPage(src, env)
    if (!html.includes(encodedPlaceholderMark)) return html

    const resolved = await Promise.all(
      Array.from(html.matchAll(encodedPlaceholderRe), ([encoded, id]) =>
        resolvePlaceholder(md, id, encoded, renderPage)
      )
    )
    return html.replace(encodedPlaceholderRe, () => resolved.shift()!)
  }
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
        let jsSource
        try {
          jsSource = sfcTs2js(source)
        } catch (e: any) {
          throw new Error(
            `Error transforming source file ${sourceFile} to js: ${e}`
          )
        }
        const mdRender = (code: string) => md.render(toFence(code))
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
