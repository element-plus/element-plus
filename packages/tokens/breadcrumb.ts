import type { InjectionKey } from 'vue'
import type { BreadcrumbProps } from '@element-plus/components/breadcrumb/src/breadcrumb'

export const elBreadcrumbKey: InjectionKey<BreadcrumbProps> =
  Symbol('elBreadcrumbKey')
