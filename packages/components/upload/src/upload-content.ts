import { NOOP } from '@vue/shared'
import { buildProps, definePropType } from '@element-plus/utils'
import { uploadBaseProps } from './upload'
import type { ExtractPropTypes } from 'vue'
import type {
  RawFile,
  UploadAjaxError,
  UploadFile,
  UploadProgressEvent,
} from './upload'

import type uploadContent from './upload-content.vue'

export const uploadContentProps = buildProps({
  ...uploadBaseProps,
  beforeUpload: {
    type: definePropType<(file: RawFile) => void | boolean | Promise<any>>(
      Function
    ),
    default: NOOP,
  },
  onRemove: {
    type: definePropType<(file?: UploadFile, rawfile?: RawFile) => void>(
      Function
    ),
    default: NOOP as (file?: UploadFile, rawFile?: RawFile) => void,
  },
  onStart: {
    type: definePropType<(rawfile: File) => void>(Function),
    default: NOOP,
  },
  onSuccess: {
    type: definePropType<(e: any, file: RawFile) => unknown>(Function),
    default: NOOP,
  },
  onProgress: {
    type: definePropType<(e: UploadProgressEvent, file: RawFile) => void>(
      Function
    ),
    default: NOOP,
  },
  onError: {
    type: definePropType<(err: UploadAjaxError, file: RawFile) => void>(
      Function
    ),
    default: NOOP,
  },
  onExceed: {
    type: definePropType<(files: FileList, fileList: UploadFile[]) => void>(
      Function
    ),
    default: () => NOOP,
  },
} as const)

export type UploadContentProps = ExtractPropTypes<typeof uploadContentProps>

export type UploadContentInstance = InstanceType<typeof uploadContent>
