import { InjectionKey, Ref, ShallowRef, UnwrapRef, type VNode } from 'vue'
import { TagNavProps } from '@element-plus/components/tag-nav/src/tag-nav'
import { TagNavItemProps } from '@element-plus/components/tag-nav/src/tag-nav-item'

export type TagNavItemContext = UnwrapRef<{
  uid: number
  getVnode: () => VNode
  tagName: string
  props: TagNavItemProps
}>

export interface TagNavRootContext {
  registerItem: (item: TagNavItemContext) => void
  unregisterItem: (item: TagNavItemContext) => void
  currentItem: Ref<string>
  dragPlaceholderInd: Ref<number | null>
  draggedInd: Ref<number | null>
  draggedItemName: Ref<string | null>
  containerRef: Ref<HTMLElement | null>
  tagListRef: ShallowRef<Array<TagNavItemContext>>
  props: TagNavProps
}

export const tagNavContextKey: InjectionKey<TagNavRootContext> =
  Symbol('tagNavContextKey')
