import type { RuleItem } from 'async-validator'

export interface FormItemRule extends RuleItem {
  trigger?: string
}

export interface FormRulesMap {
  [key: string]: FormItemRule | FormItemRule[]
}
