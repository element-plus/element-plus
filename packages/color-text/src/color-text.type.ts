export type Option = string[] | string | number[] | number
export type Color = string

export interface IColorTextOptions {
  options: Option[]
  colors: Color[]
}

export type ColorTextType = 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'default'
