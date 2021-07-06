import type { PropType } from 'vue'

interface IDescriptionsInject {
  border: boolean
  column: number
  direction: PropType<'horizontal' | 'vertical'>
  size: PropType<ComponentSize>
  title: string
  extra: string
}

interface IDescriptionsItemInject {
  label: string
  span: number
  width: string | number
  minWidth: string | number
  align: string
  labelAlign: string
  className: string
  labelClassName: string
}

export {
  IDescriptionsInject,
  IDescriptionsItemInject,
}
