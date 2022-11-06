import { shallowReactive } from 'vue'
import type { ComponentInternalInstance, VNode } from 'vue'
import type { Mutable } from '@element-plus/utils'
import type { MessageHandler, MessageProps } from './message'

export type MessageContext = {
  id: string
  vnode: VNode
  handler: MessageHandler
  vm: ComponentInternalInstance
  props: Mutable<MessageProps>
}

export const instances: MessageContext[] = shallowReactive([])

export const getInstance = (id: string) => {
  const idx = instances.findIndex((instance) => instance.id === id)
  const current = instances[idx]
  const prev = idx > 0 && instances[idx - 1]
  return { current, prev }
}

export const getLastOffset = (id: string): number => {
  const { prev } = getInstance(id)
  return !prev ? 0 : prev.vm.exposed!.bottom.value
}
