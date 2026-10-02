import type { MarkdownRenderer } from 'vitepress'

export default (md: MarkdownRenderer): void => {
  md.renderer.rules.tooltip = (tokens, idx) => {
    const token = tokens[idx]

    return `<api-typing type="${token.content}" details="${token.info}" />`
  }

  md.inline.ruler.before('emphasis', 'tooltip', (state, silent) => {
    const tooltipRegExp = /^\^\[([^\]]*)\](`[^`]*`)?/
    const str = state.src.slice(state.pos, state.posMax)

    if (!tooltipRegExp.test(str)) return false
    if (silent) return true

    const result = str.match(tooltipRegExp)

    if (!result) return false

    const token = state.push('tooltip', 'tooltip', 0)
    token.content = result[1].replace(/\\\|/g, '|')
    token.info = (result[2] || '').replace(/^`(.*)`$/, '$1')
    token.level = state.level
    state.pos += result[0].length

    return true
  })
}
