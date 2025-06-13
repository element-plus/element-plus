import type { InjectionKey } from 'vue'
import type { IDescriptionsInject } from './type'

export const descriptionsKey: InjectionKey<IDescriptionsInject> =
  Symbol('elDescriptions')
