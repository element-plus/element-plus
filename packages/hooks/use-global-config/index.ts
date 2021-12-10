import { inject, toRef } from 'vue'
import { configProviderContextKey } from '@element-plus/tokens'
import type { Ref } from 'vue'
import type { ConfigProviderContext } from '@element-plus/tokens'

export function useGlobalConfig<K extends keyof ConfigProviderContext>(
  key: K
): Ref<ConfigProviderContext[K]>
export function useGlobalConfig(): ConfigProviderContext
export function useGlobalConfig(key?: keyof ConfigProviderContext) {
  const config = inject(configProviderContextKey, {})
  if (key) {
    return toRef(config, key)
  } else {
    return config
  }
}
