import type { CSSProperties, ComputedRef, InjectionKey, Ref } from 'vue'
import type { UseNamespaceReturn } from '@element-plus/hooks'
import type { ElOverlay } from '@element-plus/components/overlay'

export type DialogContext = {
  dialogRef: Ref<HTMLElement | undefined>
  headerRef: Ref<HTMLElement | undefined>
  overlayRef: Ref<InstanceType<typeof ElOverlay> | undefined>
  bodyId: Ref<string>
  ns: UseNamespaceReturn
  rendered: Ref<boolean>
  style: ComputedRef<CSSProperties>
}

export const dialogInjectionKey: InjectionKey<DialogContext> =
  Symbol('dialogInjectionKey')
