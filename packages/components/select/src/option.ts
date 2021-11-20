import { buildProps } from '@element-plus/utils/props'
import type { SelectContext } from './select'
import type { ExtractPropTypes } from 'vue'

export interface OptionStates {
  index: number
  groupDisabled: boolean
  visible: boolean
  hitState: boolean
  hover: boolean
}

export const optionProps = buildProps({
  value: {
    type: [String, Number, Boolean, Object],
    required: true,
  },
  label: {
    type: [String, Number],
    default: '',
  },
  created: Boolean,
  disabled: {
    type: Boolean,
    default: false,
  },
} as const)

export type OptionProps = ExtractPropTypes<typeof optionProps>

export type OptionInstance = OptionProps & {
  currentLabel: string
  itemSelected: boolean
  isDisabled: boolean
  selectContext: SelectContext
  hoverItem: () => void
  visible: boolean
  hover: boolean
  selectOptionClick: () => void
  states: OptionStates
  $el: any
}
