import { buildProps } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'
import type AnchorLink from './anchor-link.vue'

export const anchorLinkProps = buildProps({
  href: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
} as const)
export type AnchorLinkProps = ExtractPropTypes<typeof anchorLinkProps>

export type AnchorLinkInstance = InstanceType<typeof AnchorLink>
