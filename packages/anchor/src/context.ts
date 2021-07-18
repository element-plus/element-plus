import type { Ref, InjectionKey } from 'vue'
import { inject, provide } from 'vue'

export interface AnchorContext {
  registerLink: (link: string) => void
  unregisterLink: (link: string) => void
  activeLink: Ref<string> // use ref for reactive to calculate active status
  scrollTo: (link: string) => void
  handleClick: (e: Event, info: { href: string; }) => void
}

export const AnchorContextKey: InjectionKey<AnchorContext> = Symbol('anchorContextKey')

const useProvideAnchor = (state: AnchorContext) => {
  provide(AnchorContextKey, state)
}

const useInjectAnchor = () => {
  return inject(AnchorContextKey)
}

export {
  useProvideAnchor,
  useInjectAnchor,
}
