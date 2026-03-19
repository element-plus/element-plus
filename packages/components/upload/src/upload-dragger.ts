import { buildProps, isArray } from '@element-plus/utils'

import type { ExtractPublicPropTypes } from 'vue'
import type UploadDragger from './upload-dragger.vue'

export interface UploadDraggerProps {
  disabled?: boolean
  directory?: boolean
}

/**
 * @deprecated Removed after 3.0.0, Use `UploadDraggerProps` instead.
 */
export const uploadDraggerProps = buildProps({
  disabled: {
    type: Boolean,
    default: undefined,
  },
  directory: Boolean,
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `UploadDraggerProps` instead.
 */
export type UploadDraggerPropsPublic = ExtractPublicPropTypes<
  typeof uploadDraggerProps
>

export const uploadDraggerEmits = {
  file: (file: File[]) => isArray(file),
}
export type UploadDraggerEmits = typeof uploadDraggerEmits

export type UploadDraggerInstance = InstanceType<typeof UploadDragger> & unknown
