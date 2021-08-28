import type { InjectionKey } from 'vue'

export interface ElButtonGruopContext {
  size?: string
}

export const elButtonGroupKey: InjectionKey<ElButtonGruopContext> = Symbol()
