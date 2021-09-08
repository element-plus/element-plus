module.exports = (md) => {
  const rules = {
    link_open: (tokens, idx, options, env, self) => {
      const token = tokens[idx]
      token.tag = 'app-link'

      return self.renderToken(tokens, idx, options)
    },
    link_close: (tokens, idx, options, env, self) => {
      const token = tokens[idx]
      token.tag = 'app-link'
      return self.renderToken(tokens, idx, options)
    },
    heading_open: (tokens, idx, options, env, self) => {
      const level = tokens[idx].markup.length
      const next = tokens[idx + 1]
      const children = next ? next.children : []

      const [, href = ''] = children[2]
        ? (children[2].attrs && children[2].attrs[1]) || []
        : []
      const content = children[0].content

      tokens[idx].tag = 'app-heading'
      tokens[idx].attrSet('content', content)
      tokens[idx].attrSet('href', href)
      tokens[idx].attrSet('level', level)

      return self.renderToken(tokens, idx, options)
    },
    heading_close: (tokens, idx, options, env, self) => {
      tokens[idx].tag = 'app-heading'

      return self.renderToken(tokens, idx, options)
    },

    image: (tokens, idx) => {
      const token = tokens[idx]
      const alt = token.content
      const src = token.attrGet('src')
      const title = token.attrGet('title')

      return `<div><app-img src="${src}" alt="${alt}" title="${title}" /></div>`
    },
  }

  Object.entries(rules).forEach(([key, val]) => {
    md.renderer.rules[key] = val
  })
}
