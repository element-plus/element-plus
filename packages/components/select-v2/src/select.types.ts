type OptionCommon = Record<string, any>

export type Option = OptionCommon & {
  created?: boolean
}

export type OptionGroup = OptionCommon

export type OptionType = Option | OptionGroup

export type OptionItemProps = {
  item: any
  index: number
  disabled: boolean
}
export type SelectStates = {
  inputValue: string
  cachedOptions: Option[]
  createdOptions: Option[]
  hoveringIndex: number
  inputHovering: boolean
  selectionWidth: number
  collapseItemWidth: number
  previousQuery: string | null
  previousValue: unknown
  selectedLabel: string
  menuVisibleOnFocus: boolean
  isBeforeHide: boolean
}
