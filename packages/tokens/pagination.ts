import type { InjectionKey, ComputedRef } from 'vue'

export interface ElPaginationContext {
  currentPage?: ComputedRef<number>
  pageCount?: ComputedRef<number>
  disabled?: ComputedRef<boolean>
  changeEvent?: (val: number) => void
  handleSizeChange?: (val: number) => void
}

export const elPaginationKey: InjectionKey<ElPaginationContext> =
  Symbol('elPaginationKey')
