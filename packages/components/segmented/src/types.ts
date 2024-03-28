export type Option =
  | {
      label: string
      value: string | number
      disabled?: boolean
      [key: string]: any
    }
  | string
  | number
  | undefined
