export type Option = Record<string, unknown> & {
  value?: string | number
  label?: string
  children?: Option[]
  level?: number
}

export interface SelectedNodeItem {
  value: string | number
  label: string
  level: number
}
