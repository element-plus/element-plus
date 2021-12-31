import { inject, ref, toRef } from 'vue'
import { configProviderContextKey } from '@element-plus/tokens'
import { hasOwn, isObject } from '@element-plus/utils/util'
import type { Ref } from 'vue'
import type { ConfigProviderContext } from '@element-plus/tokens'

export function useGlobalConfig<K extends keyof ConfigProviderContext>(
  key: K
): Ref<ConfigProviderContext[K]>
export function useGlobalConfig(): ConfigProviderContext
export function useGlobalConfig(key?: keyof ConfigProviderContext) {
  const config = inject(configProviderContextKey, {})
  if (key) {
    return isObject(config) && hasOwn(config, key)
      ? toRef(config, key)
      : ref(undefined)
  } else {
    return config
  }
}
