export type MentionOption = {
  value: string
  label?: string
  disabled?: boolean
  [key: string]: any
}

export interface MentionCtx {
  pattern: string
  start: number
  end: number
  prefix: string
  prefixIndex: number
  splitIndex: number
  selectionEnd: number
}
