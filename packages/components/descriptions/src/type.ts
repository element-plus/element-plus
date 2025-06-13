import type { ColumnAlignment, ComponentSize } from '@element-plus/constants'
import type {
  DescriptionItemProps,
  DescriptionItemVNode,
} from './description-item'

export interface IDescriptionsInject {
  props: {
    border: boolean
    column: number
    direction: 'horizontal' | 'vertical'
    size: ComponentSize
    title: string
    extra: string
    labelWidth: string | number
  }
  addDescriptionItem: (item: DescriptionItemContext) => void
  removeDescriptionItem: (uid: number) => void
}
export interface IDescriptionsItemInject {
  label: string
  span: number
  rowspan: number
  width: string | number
  minWidth: string | number
  labelWidth: string | number
  align: ColumnAlignment
  labelAlign?: ColumnAlignment
  className: string
  labelClassName: string
}
export interface DescriptionItemContext {
  uid: number
  props: DescriptionItemProps
  vnode: DescriptionItemVNode
}
