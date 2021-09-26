import type { ExtractPropTypes } from 'vue'

export const breadcrumbProps = {
  separator: {
    type: String,
    default: '/',
  },
  separatorClass: {
    type: String,
    default: '',
  },
} as const
export type BreadcrumbProps = ExtractPropTypes<typeof breadcrumbProps>
