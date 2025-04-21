import mdContainer from 'markdown-it-container'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'
import externalLinkIcon from '../plugins/external-link-icon'
import tableWrapper from '../plugins/table-wrapper'
import tooltip from '../plugins/tooltip'
import tag from '../plugins/tag'
import headers from '../plugins/headers'
import createDemoContainer from '../plugins/demo'
import { ApiTableContainer } from '../plugins/api-table'
import type { MarkdownRenderer } from 'vitepress'

export const mdPlugin = (md: MarkdownRenderer) => {
  md.use(headers)
  md.use(externalLinkIcon)
  md.use(tableWrapper)
  md.use(tooltip)
  md.use(tag)
  md.use(mdContainer, 'demo', createDemoContainer(md))
  md.use(ApiTableContainer)
  md.use(groupIconMdPlugin as unknown as (md: MarkdownRenderer) => void)
}
