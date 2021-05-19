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

export {
  IDescriptionsInject,
  elDescriptionsKey,
}
