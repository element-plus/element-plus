import type { MarkdownRenderer } from 'vitepress'

export default (md: MarkdownRenderer): void => {
  md.renderer.rules.table_open = () => '<div class="vp-table"><table>'
  md.renderer.rules.table_close = () => '</table></div>'
}
