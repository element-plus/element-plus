import { computed, inject, unref } from 'vue'
import { buildProp } from '@element-plus/utils'
import { componentSizes } from '@element-plus/constants'

import type { Ref } from 'vue'
import type { ComponentSize } from '@element-plus/constants'

export const useSizeProp = buildProp({
  type: String,
  values: componentSizes,
  required: false,
} as const)

export const useSizeProps = {
  size: useSizeProp,
}

export interface SizeContext {
  size: Ref<ComponentSize>
}

export const SIZE_INJECTION_KEY = 'SIZE_INJECTION_KEY'

export const useGlobalSize = () => {
  const injectedSize = inject(SIZE_INJECTION_KEY, {} as SizeContext)

  return computed<ComponentSize>(() => {
    return unref(injectedSize.size) || ''
  })
}
