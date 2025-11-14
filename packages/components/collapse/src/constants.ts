import type { InjectionKey, Ref } from 'vue'
import type { CollapseActiveName, CollapseCollapsibleType } from './collapse'

export interface CollapseContext {
  activeNames: Ref<CollapseActiveName[]>
  collapsible: CollapseCollapsibleType | undefined
  handleItemClick: (name: CollapseActiveName) => void
}

export const collapseContextKey: InjectionKey<CollapseContext> =
  Symbol('collapseContextKey')
