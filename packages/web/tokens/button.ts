import type { InjectionKey } from 'vue'

import type { ButtonProps } from '@element-plus/components/src/button'

export interface ButtonGroupContext {
  size?: ButtonProps['size']
  type?: ButtonProps['type']
}

export const buttonGroupContextKey: InjectionKey<ButtonGroupContext> = Symbol(
  'buttonGroupContextKey'
)
