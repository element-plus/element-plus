import { buildProps, isString } from '@element-plus/utils'
import type { ExtractPropTypes } from 'vue'
import type Anchor from './anchor.vue'

export const anchorProps = buildProps({
  container: {
    type: String,
    default: '',
  },
  offsetTop: {
    type: Number,
    default: 0,
  },
  offsetLeft: {
    type: Number,
    default: 0,
  },
  boundary: {
    type: Number,
    default: 5,
  },
  behavior: {
    type: String,
    values: ['auto', 'smooth'],
    default: 'smooth',
  },
  hash: {
    type: Boolean,
    default: false,
  },
} as const)
export type AnchorProps = ExtractPropTypes<typeof anchorProps>

export const anchorEmits = {
  select: (link: string, evt: MouseEvent) =>
    isString(link) && evt instanceof MouseEvent,
  change: (link: string) => isString(link),
}
export type AnchorEmits = typeof anchorEmits

export type AnchorInstance = InstanceType<typeof Anchor>

export const getLinkTarget = (link: string) => {
  const regex = /#(\S+)$/

  const sharpLinkMatch = regex.exec(link)
  if (!sharpLinkMatch) return

  return (
    document.querySelector<HTMLElement>(`#${sharpLinkMatch[1]}`) || undefined
  )
}
