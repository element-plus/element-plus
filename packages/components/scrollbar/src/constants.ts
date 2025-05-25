import type { InjectionKey } from 'vue'
import type { ScrollbarProps } from './scrollbar'

export interface ScrollbarContext {
  scrollbarElement: HTMLDivElement
  wrapElement: HTMLDivElement
  direction: ScrollbarProps['direction']
}

export const scrollbarContextKey: InjectionKey<ScrollbarContext> = Symbol(
  'scrollbarContextKey'
)
