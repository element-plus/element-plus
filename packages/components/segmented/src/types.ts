export type Option =
  | {
      label: string
      value: string | number | boolean
      disabled?: boolean
      [key: string]: any
    }
  | string
  | number
  | boolean
