import type { InjectionKey } from 'vue'

export interface scrollbarContext {
  scrollbarElement: HTMLDivElement
  wrapElement: HTMLDivElement
}

export const scrollbarContextKey: InjectionKey<scrollbarContext> = Symbol(
  'scrollbarContextKey'
)
