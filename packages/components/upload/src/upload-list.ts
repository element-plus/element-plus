import { NOOP } from '@vue/shared'
import { buildProps, definePropType } from '@element-plus/utils/props'
import type { ExtractPropTypes } from 'vue'
import type { UploadFile } from './upload'

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
    values: ['picture', 'picture-card', 'text'],
    default: 'text',
  },
} as const)
export type UploadListProps = ExtractPropTypes<typeof uploadListProps>

export const uploadListEmits = {
  remove: (file: UploadFile) => file,
}
export type UploadListEmits = typeof uploadListEmits
