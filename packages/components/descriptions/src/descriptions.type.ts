import type { Align, ComponentSize } from '@element-plus/constants'

export interface IDescriptionsInject {
  border: boolean
  column: number
  direction: 'horizontal' | 'vertical'
  size: ComponentSize
  title: string
  extra: string
  labelWidth: string | number
}

export interface IDescriptionsItemInject {
  label: string
  span: number
  rowspan: number
  width: string | number
  minWidth: string | number
  labelWidth: string | number
  align: Align
  labelAlign?: Align
  className: string
  labelClassName: string
}
