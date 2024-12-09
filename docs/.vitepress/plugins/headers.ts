import { resolveHeadersFromTokens, slugify } from '@mdit-vue/shared'
import type { MarkdownRenderer } from 'vitepress'

/**
 * Get markdown headers info
 *
 * Extract them into env
 */
export default (md: MarkdownRenderer): void => {
  // extract headers to env
  const render = md.renderer.render.bind(md.renderer)

  const level = [2, 3, 4, 5, 6]
  md.renderer.render = (tokens, options, env) => {
    env.headers = resolveHeadersFromTokens(tokens, {
      level,
      shouldAllowHtml: true,
      shouldAllowNested: false,
      shouldEscapeText: false,
      slugify,
    })
    return render(tokens, options, env)
  }
}
