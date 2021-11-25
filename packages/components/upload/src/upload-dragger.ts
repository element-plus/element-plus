import { buildProps } from '@element-plus/utils/props'
import { isArray } from '@element-plus/utils/util'
import type { ExtractPropTypes } from 'vue'

export const uploadDraggerProps = buildProps({
  disabled: {
    type: Boolean,
    default: false,
  },
} as const)
export type UploadDraggerProps = ExtractPropTypes<typeof uploadDraggerProps>

export const uploadDraggerEmits = {
  file: (file: File[] | FileList) => isArray(file),
}
export type UploadDraggerEmits = typeof uploadDraggerEmits
