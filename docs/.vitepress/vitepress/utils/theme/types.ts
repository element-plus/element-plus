export interface EpThemeColors {
  /**
   * Primary Color
   */
  primary: string
  /**
   * Secondary Colors
   */
  success: string
  warning: string
  danger: string
  info: string
}

export interface EpTheme {
  /**
   * @default 'el'
   */
  namespace?: string
  colors: Partial<EpThemeColors>
}

export type EpThemeColor = keyof EpThemeColors

export const themeColorNames: EpThemeColor[] = [
  'primary',
  'success',
  'warning',
  'danger',
  'info',
]
