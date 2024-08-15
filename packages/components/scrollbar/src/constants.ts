import type { InjectionKey } from 'vue'

export interface ScrollbarContext {
  scrollbarElement: HTMLDivElement
  wrapElement: HTMLDivElement
}

export const scrollbarContextKey: InjectionKey<ScrollbarContext> = Symbol(
  'scrollbarContextKey'
)
