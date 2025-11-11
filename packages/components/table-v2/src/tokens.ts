import type { InjectionKey, Ref } from 'vue'
import type { UseNamespaceReturn } from '@element-plus/hooks'

export type TableV2Context = {
  isScrolling: Ref<boolean>
  isResetting: Ref<boolean>
  ns: UseNamespaceReturn
}

export const TableV2InjectionKey: InjectionKey<TableV2Context> =
  Symbol('tableV2')

export const TABLE_V2_GRID_INJECTION_KEY = 'tableV2GridScrollLeft'
