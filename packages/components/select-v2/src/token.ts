import type { optionProps, selectProps } from './defaults'
import type { ExtractPropTypes, InjectionKey, Ref } from 'vue'
import type { Option } from './select.types'
import type { TooltipInstance } from '@element-plus/components/tooltip'

export interface SelectV2Context {
  props: ExtractPropTypes<typeof selectProps>
  expanded: Ref<boolean>
  tooltipRef: Ref<TooltipInstance | undefined>
  onSelect: (option: Option) => void
  onHover: (idx: number) => void
  onKeyboardNavigate: (direction: 'forward' | 'backward') => void
  onKeyboardSelect: () => void
}

export const selectV2InjectionKey: InjectionKey<SelectV2Context> = Symbol(
  'ElSelectV2Injection'
)
export type IOptionV2Props = ExtractPropTypes<typeof optionProps>
export type ISelectV2Props = ExtractPropTypes<typeof selectProps>
