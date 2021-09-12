import { RuleItem } from 'async-validator'

export declare interface FormItemRule extends RuleItem {
  trigger?: string
}

export declare interface FormRulesMap {
  [key: string]: FormItemRule | FormItemRule[]
}
