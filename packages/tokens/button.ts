import type { InjectionKey } from 'vue'

import type { ComponentSize } from '@element-plus/utils/types'

export interface ElButtonGroupContext {
  size?: ComponentSize
}

export const elButtonGroupKey: InjectionKey<ElButtonGroupContext> = Symbol()
