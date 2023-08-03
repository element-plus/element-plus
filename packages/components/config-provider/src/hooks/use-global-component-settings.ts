import { computed, unref } from 'vue'

import {
  defaultInitialZIndex,
  defaultNamespace,
  useLocale,
  useNamespace,
  useZIndex,
} from '@element-plus/hooks'
import { provideGlobalConfig, useGlobalConfig } from './use-global-config'
import type { MaybeRef } from '@vueuse/core'
import type { ConfigProviderContext } from '../constants'

// for components like `ElMessage` `ElNotification` `ElMessageBox`.
export function useGlobalComponentSettings(
  block: string,
  sizeFallback?: MaybeRef<ConfigProviderContext['size']>
) {
  const config = useGlobalConfig()

  const ns = useNamespace(
    block,
    computed(() => config.value?.namespace || defaultNamespace)
  )

  const locale = useLocale(computed(() => config.value?.locale))
  const zIndex = useZIndex(
    computed(() => config.value?.zIndex || defaultInitialZIndex)
  )
  const size = computed(() => unref(sizeFallback) || config.value?.size || '')
  provideGlobalConfig(computed(() => unref(config) || {}))

  return {
    ns,
    locale,
    zIndex,
    size,
  }
}
