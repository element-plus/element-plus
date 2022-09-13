import type { InjectionKey } from 'vue'
import type { BreadcrumbProps } from '@element-plus/components/src/breadcrumb'

export const breadcrumbKey: InjectionKey<BreadcrumbProps> =
  Symbol('breadcrumbKey')
