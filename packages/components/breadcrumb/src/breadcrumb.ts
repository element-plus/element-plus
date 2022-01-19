import { buildProps, definePropType } from '@element-plus/utils/props'
import type { ExtractPropTypes, Component } from 'vue'
import type Breadcrumb from './breadcrumb.vue'

export const breadcrumbProps = buildProps({
  separator: {
    type: String,
    default: '/',
  },
  separatorIcon: {
    type: definePropType<string | Component>([String, Object]),
    default: '',
  },
} as const)
export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>
export type BreadcrumbInstance = InstanceType<typeof Breadcrumb>
