import { NOOP, buildProps, definePropType } from '@element-plus/utils'
import { UploadBaseProps, uploadBaseProps } from './upload'

import type { ExtractPublicPropTypes } from 'vue'
import type {
  UploadFile,
  UploadHooks,
  UploadProgressEvent,
  UploadRawFile,
} from './upload'
import type UploadContent from './upload-content.vue'
import type { UploadAjaxError } from './ajax'

export interface UploadContentProps extends UploadBaseProps {
  beforeUpload?: UploadHooks['beforeUpload']
  onRemove?: (file: UploadFile | UploadRawFile) => void
  onStart?: (rawFile: UploadRawFile) => void
  onSuccess?: (response: any, rawFile: UploadRawFile) => unknown
  onProgress?: (evt: UploadProgressEvent, rawFile: UploadRawFile) => void
  onError?: (err: UploadAjaxError, rawFile: UploadRawFile) => void
  onExceed?: UploadHooks['onExceed']
}

/**
 * @deprecated Removed after 3.0.0, Use `UploadContentProps` instead.
 */
export const uploadContentProps = buildProps({
  ...uploadBaseProps,

  beforeUpload: {
    type: definePropType<UploadHooks['beforeUpload']>(Function),
    default: NOOP,
  },
  onRemove: {
    type: definePropType<(file: UploadFile | UploadRawFile) => void>(Function),
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

/**
 * @deprecated Removed after 3.0.0, Use `UploadContentProps` instead.
 */
export type UploadContentPropsPublic = ExtractPublicPropTypes<
  typeof uploadContentProps
>

export type UploadContentInstance = InstanceType<typeof UploadContent> & unknown
