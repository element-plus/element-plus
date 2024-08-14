import type { InjectionKey } from 'vue'
import type { BreadcrumbProps } from './breadcrumb'

export const breadcrumbKey: InjectionKey<BreadcrumbProps> =
  Symbol('breadcrumbKey')
