import type MarkdownIt from 'markdown-it'
import type Renderer from 'markdown-it/lib/renderer'

export default (md: MarkdownIt): void => {
  const renderToken: Renderer.RenderRule = (tokens, idx, options, env, self) =>
    self.renderToken(tokens, idx, options)
  const defaultLinkOpenRenderer = md.renderer.rules.link_open || renderToken
  const defaultLinkCloseRenderer = md.renderer.rules.link_close || renderToken
  let isExternalLink = false

  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    const href = token.attrGet('href')

    if (href) {
      token.attrJoin('class', 'vp-link')
      if (/^((ht|f)tps?):\/\/?/.test(href)) {
        isExternalLink = true
      }
    }

    return defaultLinkOpenRenderer(tokens, idx, options, env, self)
  }

  md.renderer.rules.link_close = (tokens, idx, options, env, self) => {
    if (isExternalLink) {
      isExternalLink = false
      return `<i-ri-external-link-line class="link-icon" />${self.renderToken(
        tokens,
        idx,
        options
      )}`
    }

    return defaultLinkCloseRenderer(tokens, idx, options, env, self)
  }
}
