import { NOOP } from '@vue/shared'
import { buildProps, definePropType } from '@element-plus/utils'
import { listType } from './upload'
import type { ExtractPropTypes } from 'vue'
import type { UploadFile } from './upload'
import type uploadList from './upload-list.vue'

export const uploadListProps = buildProps({
  files: {
    type: definePropType<UploadFile[]>(Array),
    default: () => [],
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  handlePreview: {
    type: definePropType<(file: UploadFile) => void>(Function),
    default: () => NOOP,
  },
  listType: {
    type: String,
    values: listType,
    default: 'text',
  },
} as const)

export type UploadListProps = ExtractPropTypes<typeof uploadListProps>
export const uploadListEmits = {
  remove: (file: UploadFile) => file,
}
export type UploadListEmits = typeof uploadListEmits
export type UploadListInstance = InstanceType<typeof uploadList>
