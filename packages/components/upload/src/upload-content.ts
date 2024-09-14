import { NOOP, buildProps, definePropType } from '@element-plus/utils'
import { uploadBaseProps } from './upload'

import type { ExtractPropTypes } from 'vue'
import type {
  UploadFile,
  UploadHooks,
  UploadProgressEvent,
  UploadRawFile,
} from './upload'
import type UploadContent from './upload-content.vue'
import type { UploadAjaxError } from './ajax'

export const uploadContentProps = buildProps({
  ...uploadBaseProps,

  beforeUpload: {
    type: definePropType<UploadHooks['beforeUpload']>(Function),
    default: NOOP,
  },
  onRemove: {
    type: definePropType<
      (file: UploadFile | UploadRawFile, rawFile?: UploadRawFile) => void
    >(Function),
    default: NOOP,
  },
  onStart: {
    type: definePropType<(rawFile: UploadRawFile) => void>(Function),
    default: NOOP,
  },
  onSuccess: {
    type: definePropType<(response: any, rawFile: UploadRawFile) => unknown>(
      Function
    ),
    default: NOOP,
  },
  onProgress: {
    type: definePropType<
      (evt: UploadProgressEvent, rawFile: UploadRawFile) => void
    >(Function),
    default: NOOP,
  },
  onError: {
    type: definePropType<
      (err: UploadAjaxError, rawFile: UploadRawFile) => void
    >(Function),
    default: NOOP,
  },
  onExceed: {
    type: definePropType<UploadHooks['onExceed']>(Function),
    default: NOOP,
  },
} as const)

export type UploadContentProps = ExtractPropTypes<typeof uploadContentProps>

export type UploadContentInstance = InstanceType<typeof UploadContent>
