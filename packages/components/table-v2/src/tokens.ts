import type { InjectionKey, Ref } from 'vue'

export type TableV2Context = {
  isScrolling: Ref<boolean>
}

export const TableV2InjectionKey: InjectionKey<TableV2Context> =
  Symbol('tableV2')
