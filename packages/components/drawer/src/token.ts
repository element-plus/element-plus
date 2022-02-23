import type { InjectionKey, Ref } from 'vue'
import type { useNamespace } from '@element-plus/hooks'

export type DrawerContext = {
  drawerRef: Ref<HTMLElement | undefined>
  ns: ReturnType<typeof useNamespace>
  rendered: Ref<boolean>
  visible: Ref<boolean>
}

export const elDrawerInjectionKey: InjectionKey<DrawerContext> = Symbol(
  'elDrawerInjectionKey'
)
