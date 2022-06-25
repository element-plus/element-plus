import type {
  OptionProps,
  SelectProps,
} from '../components/select-v2/src/defaults'
import type { ExtractPropTypes, InjectionKey } from 'vue'
import type { Option } from '../components/select-v2/src/select.types'

export interface SelectV2Context {
  props: ExtractPropTypes<typeof SelectProps>
  expanded: boolean
  onSelect: (option: Option<any>, index: number, byClick?: boolean) => void
  onHover: (idx: number) => void
  onKeyboardNavigate: (direction: 'forward' | 'backward') => void
  onKeyboardSelect: () => void
}

export const selectV2InjectionKey =
  'ElSelectV2Injection' as any as InjectionKey<SelectV2Context>
export type IOptionProps = ExtractPropTypes<typeof OptionProps>
export type ISelectProps = ExtractPropTypes<typeof SelectProps>
