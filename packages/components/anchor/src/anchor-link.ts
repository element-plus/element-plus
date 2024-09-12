import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'

export const anchorLinkProps = buildProps({
  /**
   * @description the text content of the anchor link
   */
  title: String,
  /**
   * @description The address of the anchor link
   */
  href: String,
})

export type AnchorLinkProps = ExtractPropTypes<typeof anchorLinkProps>
