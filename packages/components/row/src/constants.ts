import type { ComputedRef, InjectionKey } from 'vue'

interface RowContext {
  gutter: ComputedRef<number>
}

export const rowContextKey: InjectionKey<RowContext> = Symbol('rowContextKey')
