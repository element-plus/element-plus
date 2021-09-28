import type { InjectionKey } from 'vue'
import type { IDescriptionsInject } from '@element-plus/components/descriptions/src/descriptions.type'

export const elDescriptionsKey: InjectionKey<IDescriptionsInject> =
  Symbol('elDescriptions')
