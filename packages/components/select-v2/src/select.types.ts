type OptionCommon = Record<string, any>

export type OptionV2 = OptionCommon & {
  created?: boolean
}

export type OptionGroup = OptionCommon

export type OptionType = OptionV2 | OptionGroup

export type OptionItemProps = {
  item: any
  index: number
  disabled: boolean
}
export type SelectStates = {
  inputValue: string
  cachedOptions: OptionV2[]
  createdOptions: OptionV2[]
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
