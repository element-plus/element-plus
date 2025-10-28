import { NOOP, buildProps, definePropType, mutable } from '@element-plus/utils'
import { uploadListTypes } from './upload'

import type { ExtractPropTypes, __ExtractPublicPropTypes } from 'vue'
import type { UploadFile, UploadFiles, UploadHooks } from './upload'
import type UploadList from './upload-list.vue'

export const uploadListProps = buildProps({
  files: {
    type: definePropType<UploadFiles>(Array),
    default: () => mutable([]),
  },
  disabled: Boolean,
  handlePreview: {
    type: definePropType<UploadHooks['onPreview']>(Function),
    default: NOOP,
  },
  listType: {
    type: String,
    values: uploadListTypes,
    default: 'text',
  },
  /**
   * @description set HTML attribute: crossorigin.
   */
  crossorigin: {
    type: definePropType<'anonymous' | 'use-credentials' | ''>(String),
  },
  /**
   * @description whether to show the size of uploaded file
   */
  showFileSize: {
    type: Boolean,
    default: false,
  },
  showFileTooltip: {
    type: Boolean,
    default: false,
  },
} as const)

export type UploadListProps = ExtractPropTypes<typeof uploadListProps>
export type UploadListPropsPublic = __ExtractPublicPropTypes<
  typeof uploadListProps
>
export const uploadListEmits = {
  remove: (file: UploadFile) => !!file,
}
export type UploadListEmits = typeof uploadListEmits
export type UploadListInstance = InstanceType<typeof UploadList> & unknown
