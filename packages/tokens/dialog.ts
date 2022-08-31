import type { CSSProperties, ComputedRef, InjectionKey, Ref } from 'vue'
import type { useNamespace } from '@element-plus/hooks'

export type DialogContext = {
  dialogRef: Ref<HTMLElement | undefined>
  headerRef: Ref<HTMLElement | undefined>
  bodyId: Ref<string>
  ns: ReturnType<typeof useNamespace>
  rendered: Ref<boolean>
  style: ComputedRef<CSSProperties>
}

export const dialogInjectionKey: InjectionKey<DialogContext> =
  Symbol('dialogInjectionKey')
