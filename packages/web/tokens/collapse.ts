import type { CollapseActiveName } from '@element-plus/components/collapse'
import type { InjectionKey, Ref } from 'vue'

export interface CollapseContext {
  activeNames: Ref<CollapseActiveName[]>
  handleItemClick: (name: CollapseActiveName) => void
}

export const collapseContextKey: InjectionKey<CollapseContext> =
  Symbol('collapseContextKey')
