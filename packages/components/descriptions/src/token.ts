import type { InjectionKey } from 'vue'
import type { IDescriptionsInject } from './descriptions.type'

export const descriptionsKey: InjectionKey<IDescriptionsInject> =
  Symbol('elDescriptions')
