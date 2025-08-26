import { buildProps, isArray } from '@element-plus/utils'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
import type UploadDragger from './upload-dragger.vue'

export const uploadDraggerProps = buildProps({
  disabled: Boolean,
} as const)
export type UploadDraggerProps = ExtractPropTypes<typeof uploadDraggerProps>
export type UploadDraggerPropsPublic = __ExtractPublicPropTypes<
  typeof uploadDraggerProps
>

export const uploadDraggerEmits = {
  file: (file: File[]) => isArray(file),
}
export type UploadDraggerEmits = typeof uploadDraggerEmits

export type UploadDraggerInstance = InstanceType<typeof UploadDragger> & unknown
