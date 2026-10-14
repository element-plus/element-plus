import type { MarkdownRenderer } from 'vitepress'

export default (md: MarkdownRenderer): void => {
  md.inline.ruler.before('emphasis', 'tag', (state, silent) => {
    const tagRegExp = /^\^\(([^)]*)\)/
    const str = state.src.slice(state.pos, state.posMax)

    if (!tagRegExp.test(str)) return false
    if (silent) return true

    const result = str.match(tagRegExp)

    if (!result) return false

    const token = state.push('html_inline', '', 0)
    const value = result[1].trim()
    /**
     * Add styles for some special tags
     * vitepress/styles/content/tag-content.scss
     */
    const tagClass = ['beta', 'deprecated', 'a11y', 'required'].includes(value)
      ? value
      : ''
    token.content = `<span class="vp-tag ml-1 ${tagClass}">${value}</span>`
    token.level = state.level
    state.pos += result[0].length

    return true
  })
}
