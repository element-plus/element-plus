import type { IOptionV2Props, ISelectV2Props } from './defaults'
import type { InjectionKey, Ref } from 'vue'
import type { Option } from './select.types'
import type { TooltipInstance } from '@element-plus/components/tooltip'

export interface SelectV2Context {
  props: ISelectV2Props
  expanded: Ref<boolean>
  tooltipRef: Ref<TooltipInstance | undefined>
  onSelect: (option: Option) => void
  onHover: (idx?: number) => void
  onKeyboardNavigate: (direction: 'forward' | 'backward') => void
  onKeyboardSelect: () => void
}

export const selectV2InjectionKey: InjectionKey<SelectV2Context> = Symbol(
  'ElSelectV2Injection'
)
export type { ISelectV2Props, IOptionV2Props }
