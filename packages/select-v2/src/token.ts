import { SelectProps } from './defaults'

import type { ExtractPropTypes, InjectionKey } from 'vue'
import { Option } from './select.types'
export interface SelectGroupContext {
  options: []
}

export interface SelectContext {
  props: ExtractPropTypes<typeof SelectProps>
  selected: number[]
  onSelect: (option: Option, byClick: boolean) => void
}


export const selectGroupKey = 'ElSelectGroup' as unknown as InjectionKey<SelectGroupContext>

export const selectKey = 'ElSelect' as unknown as InjectionKey<SelectContext>
