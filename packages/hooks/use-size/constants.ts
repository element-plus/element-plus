import type { InjectionKey, Ref } from 'vue'
import type { ComponentSize } from '@element-plus/constants'

export interface SizeContext {
  size: Ref<ComponentSize>
}

export const SIZE_INJECTION_KEY: InjectionKey<SizeContext> = Symbol('size')
