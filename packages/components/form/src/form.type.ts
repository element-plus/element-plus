import type { RuleItem } from 'async-validator'

export interface FormItemRule extends RuleItem {
  trigger?: string | string[]
}

export type FormRulesMap<T extends string = string> = Partial<
  Record<T, FormItemRule | FormItemRule[]>
>
