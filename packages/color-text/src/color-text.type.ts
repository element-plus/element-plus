export interface IColorTextOptions {
  options: Array<Array<string>> | Array<string>
  colors: Array<string>
}

export type ColorTextType = 'primary' | 'success' | 'warning' | 'info' | 'danger' | 'default'
