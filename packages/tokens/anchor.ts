import type { AnchorLinkProps } from '@element-plus/components/anchor'
import type { InjectionKey, Ref, ShallowRef } from 'vue'

export type AnchorLinkInstance = {
  uid: number
  element: ShallowRef<HTMLElement | undefined>
  props: AnchorLinkProps
}

export interface AnchorContext {
  activeLink: Ref<number>
  registerLink: (instance: AnchorLinkInstance) => void
  unregisterLink: (uid: number) => void
  scrollTo: (link: string) => void
  onAnchorLinkClick: (link: string, evt: MouseEvent) => void
}

export const anchorContextKey: InjectionKey<AnchorContext> =
  Symbol('anchorContextKey')
