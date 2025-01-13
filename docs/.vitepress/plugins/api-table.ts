import type { MarkdownRenderer } from 'vitepress'
export const ApiTableContainer = (md: MarkdownRenderer) => {
  const fence = md.renderer.rules.fence!

  md.renderer.rules.fence = (...args) => {
    const [tokens, idx, ...rest] = args
    const [options, env] = rest
    const token = tokens[idx]
    if (token.info === 'api') {
      const newTokens = md.parse(token.content, env)

      let result = ''
      const { rules } = md.renderer
      newTokens.forEach((newToken, idx) => {
        const { type } = newToken
        if (type === 'inline') {
          result += md.renderer.renderInline(newToken.children!, options, env)
        } else if (typeof rules[type] !== 'undefined') {
          result += rules[newToken.type]!(
            newTokens,
            idx,
            options,
            env,
            md.renderer
          )
        } else {
          result += md.renderer.renderToken(newTokens, idx, options)
        }
      })
      return result
    }
    return fence.call(md, ...args)
  }
}
