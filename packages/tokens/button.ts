import type { InjectionKey } from 'vue'

import type { ComponentSize } from '@element-plus/utils/types'

export interface ElButtonGruopContext {
  size?: ComponentSize
}

export const elButtonGroupKey: InjectionKey<ElButtonGruopContext> = Symbol()
