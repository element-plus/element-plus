import { NOOP } from '@vue/shared'
import { buildProps, definePropType } from '@element-plus/utils'
import ajax from './ajax'
import type { ExtractPropTypes } from 'vue'
import type upload from './upload.vue'

export type UploadStatus = 'ready' | 'uploading' | 'success' | 'fail'

export const listType = ['text', 'picture', 'picture-card'] as const

export interface UploadProgressEvent extends ProgressEvent {
  percent: number
}

export interface UploadAjaxError extends Error {
  status: number
  method: string
  url: string
}

export interface UploadRequestOptions {
  action: string
  method: string
  data: Record<string, string | Blob>
  filename: string
  file: File
  headers: Partial<Headers>
  onError: (e: Error) => void
  onProgress: (e: ProgressEvent) => void
  onSuccess: (response: XMLHttpRequestResponseType) => unknown
  withCredentials: boolean
}

export interface UploadFile {
  name: string
  percentage?: number
  status: UploadStatus
  size: number
  response?: unknown
  uid: number
  url?: string
  raw: RawFile
}

export interface RawFile extends File {
  uid: number
}

export const uploadBaseProps = buildProps({
  action: {
    type: String,
    required: true,
  },
  headers: {
    type: definePropType<Partial<Headers>>(Object),
  },
  method: {
    type: String,
    default: 'post',
  },
  data: {
    type: Object,
    default: () => ({}),
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: 'file',
  },
  drag: {
    type: Boolean,
    default: false,
  },
  withCredentials: Boolean,
  showFileList: {
    type: Boolean,
    default: true,
  },
  accept: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'select',
  },
  fileList: {
    type: definePropType<UploadFile[]>(Array),
    default: () => [],
  },
  autoUpload: {
    type: Boolean,
    default: true,
  },
  listType: {
    type: String,
    values: listType,
    default: 'text',
  },
  httpRequest: {
    type: Function,
    default: ajax,
  },
  disabled: Boolean,
  limit: Number,
} as const)

export const uploadProps = buildProps({
  ...uploadBaseProps,
  beforeUpload: {
    type: definePropType<(file: RawFile) => void | boolean | Promise<any>>(
      Function
    ),
    default: NOOP,
  },
  beforeRemove: {
    type: definePropType<
      (
        file: UploadFile,
        uploadFiles: UploadFile[]
      ) => boolean | Promise<unknown>
    >(Function),
  },
  onRemove: {
    type: definePropType<(file: UploadFile, uploadFiles: UploadFile[]) => void>(
      Function
    ),
    default: NOOP,
  },
  onChange: {
    type: definePropType<(file: UploadFile, uploadFiles: UploadFile[]) => void>(
      Function
    ),
    default: NOOP,
  },
  onPreview: {
    type: definePropType<(file: UploadFile) => void>(Function),
    default: NOOP,
  },
  onSuccess: {
    type: definePropType<
      (param: any, file: UploadFile, uploadFiles: UploadFile[]) => void
    >(Function),
    default: NOOP,
  },
  onProgress: {
    type: definePropType<
      (
        param: UploadProgressEvent,
        file: UploadFile,
        uploadFiles: UploadFile[]
      ) => void
    >(Function),
    default: NOOP,
  },
  onError: {
    type: definePropType<
      (param: Error, file: UploadFile, uploadFiles: UploadFile[]) => void
    >(Function),
    default: NOOP,
  },
  onExceed: {
    type: definePropType<(file: FileList, uploadFiles: UploadFile[]) => void>(
      Function
    ),
    default: () => NOOP,
  },
} as const)

export type UploadProps = ExtractPropTypes<typeof uploadProps>

export type UploadInstance = InstanceType<typeof upload>
