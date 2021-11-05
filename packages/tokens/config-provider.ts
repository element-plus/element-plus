import type { configProviderProps } from '@element-plus/components/config-provider/config-provider'
import type { InjectionKey, ExtractPropTypes } from 'vue'

export type ConfigProvdierContext = ExtractPropTypes<typeof configProviderProps>

export const configProviderContextKey: InjectionKey<ConfigProvdierContext> =
  Symbol()
