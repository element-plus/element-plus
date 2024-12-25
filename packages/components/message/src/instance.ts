import type { ComponentInternalInstance, VNode } from 'vue'
import type { Mutable } from '@element-plus/utils'
import type { MessageHandler, MessageProps } from './message'

export type MessageContext = {
  id: string
  vnode: VNode & {
    component: ComponentInternalInstance & { props: Mutable<MessageProps> }
  }
  handler: MessageHandler
  mount: () => void
}

export const instances: MessageContext[] = []

export const getInstance = (id: string) => {
  const idx = instances.findIndex((instance) => instance.id === id)
  const current = instances[idx]
  let prev: MessageContext | undefined
  if (idx > 0) {
    prev = instances[idx - 1]
  }
  return { current, prev }
}

export const getLastOffset = (id: string): number => {
  const { prev } = getInstance(id)
  if (!prev) return 0
  return prev.vnode.component.exposed!.bottom.value
}

export const getOffsetOrSpace = (id: string, offset: number) => {
  const idx = instances.findIndex((instance) => instance.id === id)
  return idx > 0 ? 16 : offset
}
