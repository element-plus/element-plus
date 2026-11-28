import mdContainer from 'markdown-it-container'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'
import externalLinkIcon from '../plugins/external-link-icon.ts'
import tableWrapper from '../plugins/table-wrapper.ts'
import tooltip from '../plugins/tooltip.ts'
import tag from '../plugins/tag.ts'
import headers from '../plugins/headers.ts'
import createDemoContainer, {
  setupDemoHighlightResolution,
} from '../plugins/demo.ts'
import { ApiTableContainer } from '../plugins/api-table.ts'

import type { MarkdownRenderer } from 'vitepress'

export const mdPlugin = (md: MarkdownRenderer) => {
  md.use(headers)
  md.use(externalLinkIcon)
  md.use(tableWrapper)
  md.use(tooltip)
  md.use(tag)
  md.use(mdContainer, 'demo', createDemoContainer(md))
  setupDemoHighlightResolution(md)
  md.use(ApiTableContainer)
  md.use(groupIconMdPlugin as unknown as (md: MarkdownRenderer) => void)
}
