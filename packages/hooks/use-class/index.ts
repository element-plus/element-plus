import { computed } from 'vue'
import { useGlobalConfig } from '../use-global-config'
import type { ComputedRef } from 'vue'

export const usePrefixClass = (className: string): ComputedRef<string> => {
  const globalConfig = useGlobalConfig()

  return computed(
    () => `${globalConfig.value.prefixClass || 'el'}-${className}`
  )
}
