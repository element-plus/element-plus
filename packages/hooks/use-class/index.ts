import { computed } from 'vue'
import { prefixClass } from '@element-plus/components/config-provider'
import type { ComputedRef } from 'vue'

export const usePrefixClass = (className: string): ComputedRef<string> => {
  return computed(() => `${prefixClass.value}-${className}`)
}
