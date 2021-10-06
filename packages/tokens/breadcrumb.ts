import type { InjectionKey } from 'vue'
import type { BreadcrumbProps } from '@element-plus/components/breadcrumb'

export const elBreadcrumbKey: InjectionKey<BreadcrumbProps> =
  Symbol('elBreadcrumbKey')
