import type { OptionProps, SelectProps } from './defaults'
import type { ExtractPropTypes, InjectionKey, Ref } from 'vue'
import type { Option } from './select.types'
import type { TooltipInstance } from '@element-plus/components/tooltip'

export interface SelectV2Context {
  props: ExtractPropTypes<typeof SelectProps>
  expanded: boolean
  tooltipRef: Ref<TooltipInstance>
  onSelect: (option: Option) => void
  onHover: (idx: number) => void
  onKeyboardNavigate: (direction: 'forward' | 'backward') => void
  onKeyboardSelect: () => void
}

export const selectV2InjectionKey: InjectionKey<SelectV2Context> = Symbol(
  'ElSelectV2Injection'
)
export type IOptionV2Props = ExtractPropTypes<typeof OptionProps>
export type ISelectV2Props = ExtractPropTypes<typeof SelectProps>
