import type { ExtractPropTypes, InjectionKey } from 'vue'
import type { Option } from '@element-plus/components/select-v2/src/select.types'
import type {
  OptionProps,
  SelectProps,
} from '@element-plus/components/select-v2/src/defaults'

export interface SelectV2Context {
  props: ExtractPropTypes<typeof SelectProps>
  expanded: boolean
  onSelect: (option: Option<any>, index: number, byClick?: boolean) => void
  onKeyboardNavigate: (direction: 'forward' | 'backward') => void
  onKeyboardSelect: () => void
}

export const selectV2InjectionKey: InjectionKey<SelectV2Context> = Symbol(
  'ElSelectV2Injection'
)
export type IOptionProps = ExtractPropTypes<typeof OptionProps>
export type ISelectProps = ExtractPropTypes<typeof SelectProps>
