import { NOOP, buildProps, definePropType, mutable } from '@element-plus/utils'
import { uploadListTypes } from './upload'

import type { ExtractPublicPropTypes } from 'vue'
import type {
  Crossorigin,
  ListType,
  UploadFile,
  UploadFiles,
  UploadHooks,
} from './upload'
import type UploadList from './upload-list.vue'

export interface UploadListProps {
  files?: UploadFiles
  disabled?: boolean
  handlePreview?: UploadHooks['onPreview']
  listType?: ListType
  /**
   * @description set HTML attribute: crossorigin.
   */
  crossorigin?: Crossorigin
}

/**
 * @deprecated Removed after 3.0.0, Use `UploadListProps` instead.
 */
export const uploadListProps = buildProps({
  files: {
    type: definePropType<UploadFiles>(Array),
    default: () => mutable([]),
  },
  disabled: {
    type: Boolean,
    default: undefined,
  },
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
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `UploadListProps` instead.
 */
export type UploadListPropsPublic = ExtractPublicPropTypes<
  typeof uploadListProps
>
export const uploadListEmits = {
  remove: (file: UploadFile) => !!file,
}
export type UploadListEmits = typeof uploadListEmits
export type UploadListInstance = InstanceType<typeof UploadList> & unknown
