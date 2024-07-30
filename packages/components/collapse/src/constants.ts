import type { InjectionKey, Ref } from 'vue'
import type { CollapseActiveName } from './collapse'

export interface CollapseContext {
  activeNames: Ref<CollapseActiveName[]>
  handleItemClick: (name: CollapseActiveName) => void
  iconPosition?: Ref<'left' | 'right' | ''>
}

export const collapseContextKey: InjectionKey<CollapseContext> =
  Symbol('collapseContextKey')
