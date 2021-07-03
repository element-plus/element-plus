import { InjectionKey, PropType } from 'vue'

interface IDescriptionsInject {
  border: boolean
  column: number
  direction: PropType<'horizontal' | 'vertical'>
  size: PropType<ComponentSize>
  title: string
  extra: string
}

const elDescriptionsKey: InjectionKey<IDescriptionsInject> = 'elDescriptions' as any

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

const elDescriptionsItemKey: InjectionKey<IDescriptionsItemInject> = 'elDescriptionsItem' as any

export {
  IDescriptionsInject,
  elDescriptionsKey,
  IDescriptionsItemInject,
  elDescriptionsItemKey,
}
