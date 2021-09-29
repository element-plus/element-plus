import type { InjectionKey } from 'vue'

import type { ButtonProps } from '@element-plus/components/button'

export interface ElButtonGroupContext {
  size?: ButtonProps['size']
  type?: ButtonProps['type']
}

export const elButtonGroupKey: InjectionKey<ElButtonGroupContext> = Symbol()
