import type { ConfigProviderProps } from '@element-plus/components/src/config-provider'
import type { InjectionKey, Ref } from 'vue'

export type ConfigProviderContext = Partial<ConfigProviderProps>

export const configProviderContextKey: InjectionKey<
  Ref<ConfigProviderContext>
> = Symbol()
