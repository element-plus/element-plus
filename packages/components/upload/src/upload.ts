import { NOOP, buildProps, definePropType, mutable } from '@element-plus/utils'
import { ajaxUpload } from './ajax'
import type { Awaitable, Mutable } from '@element-plus/utils'

import type { UploadAjaxError } from './ajax'
import type { ExtractPropTypes } from 'vue'
import type Upload from './upload.vue'

export const uploadListTypes = ['text', 'picture', 'picture-card'] as const

let fileId = 1
export const genFileId = () => Date.now() + fileId++

export type UploadStatus = 'ready' | 'uploading' | 'success' | 'fail'
export interface UploadProgressEvent extends ProgressEvent {
  percent: number
}

export interface UploadRequestOptions {
  action: string
  method: string
  data: Record<string, string | Blob | [Blob, string]>
  filename: string
  file: UploadRawFile
  headers: Headers | Record<string, string | number | null | undefined>
  onError: (evt: UploadAjaxError) => void
  onProgress: (evt: UploadProgressEvent) => void
  onSuccess: (response: any) => void
  withCredentials: boolean
}
export interface UploadFile {
  name: string
  percentage?: number
  status: UploadStatus
  size?: number
  response?: unknown
  uid: number
  url?: string
  raw?: UploadRawFile
}
export type UploadUserFile = Omit<UploadFile, 'status' | 'uid'> &
  Partial<Pick<UploadFile, 'status' | 'uid'>>

export type UploadFiles = UploadFile[]
export interface UploadRawFile extends File {
  uid: number
}
export type UploadRequestHandler = (
  options: UploadRequestOptions
) => XMLHttpRequest | Promise<unknown>
export interface UploadHooks {
  beforeUpload: (
    rawFile: UploadRawFile
  ) => Awaitable<void | undefined | null | boolean | File | Blob>
  beforeRemove: (
    uploadFile: UploadFile,
    uploadFiles: UploadFiles
  ) => Awaitable<boolean>
  onRemove: (uploadFile: UploadFile, uploadFiles: UploadFiles) => void
  onChange: (uploadFile: UploadFile, uploadFiles: UploadFiles) => void
  onPreview: (uploadFile: UploadFile) => void
  onSuccess: (
    response: any,
    uploadFile: UploadFile,
    uploadFiles: UploadFiles
  ) => void
  onProgress: (
    evt: UploadProgressEvent,
    uploadFile: UploadFile,
    uploadFiles: UploadFiles
  ) => void
  onError: (
    error: Error,
    uploadFile: UploadFile,
    uploadFiles: UploadFiles
  ) => void
  onExceed: (files: File[], uploadFiles: UploadUserFile[]) => void
}

export type UploadData = Mutable<Record<string, any>>

export const uploadBaseProps = buildProps({
  /**
   * @description request URL
   */
  action: {
    type: String,
    default: '#',
  },
  /**
   * @description request headers
   */
  headers: {
    type: definePropType<Headers | Record<string, any>>(Object),
  },
  /**
   * @description set upload request method
   */
  method: {
    type: String,
    default: 'post',
  },
  /**
   * @description additions options of request
   */
  data: {
    type: definePropType<
      | Awaitable<UploadData>
      | ((rawFile: UploadRawFile) => Awaitable<UploadData>)
    >([Object, Function, Promise]),
    default: () => mutable({} as const),
  },
  /**
   * @description whether uploading multiple files is permitted
   */
  multiple: Boolean,
  /**
   * @description key name for uploaded file
   */
  name: {
    type: String,
    default: 'file',
  },
  /**
   * @description whether to activate drag and drop mode
   */
  drag: Boolean,
  /**
   * @description whether cookies are sent
   */
  withCredentials: Boolean,
  /**
   * @description whether to show the uploaded file list
   */
  showFileList: {
    type: Boolean,
    default: true,
  },
  /**
   * @description accepted [file types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept), will not work when `thumbnail-mode === true`
   */
  accept: {
    type: String,
    default: '',
  },
  /**
   * @description default uploaded files
   */
  fileList: {
    type: definePropType<UploadUserFile[]>(Array),
    default: () => mutable([] as const),
  },
  /**
   * @description whether to auto upload file
   */
  autoUpload: {
    type: Boolean,
    default: true,
  },
  /**
   * @description type of file list
   */
  listType: {
    type: String,
    values: uploadListTypes,
    default: 'text',
  },
  /**
   * @description override default xhr behavior, allowing you to implement your own upload-file's request
   */
  httpRequest: {
    type: definePropType<UploadRequestHandler>(Function),
    default: ajaxUpload,
  },
  /**
   * @description whether to disable upload
   */
  disabled: Boolean,
  /**
   * @description maximum number of uploads allowed
   */
  limit: Number,
} as const)

export const uploadProps = buildProps({
  ...uploadBaseProps,
  /**
   * @description hook function before uploading with the file to be uploaded as its parameter. If `false` is returned or a `Promise` is returned and then is rejected, uploading will be aborted
   */
  beforeUpload: {
    type: definePropType<UploadHooks['beforeUpload']>(Function),
    default: NOOP,
  },
  /**
   * @description hook function before removing a file with the file and file list as its parameters. If `false` is returned or a `Promise` is returned and then is rejected, removing will be aborted
   */
  beforeRemove: {
    type: definePropType<UploadHooks['beforeRemove']>(Function),
  },
  /**
   * @description hook function when files are removed
   */
  onRemove: {
    type: definePropType<UploadHooks['onRemove']>(Function),
    default: NOOP,
  },
  /**
   * @description hook function when select file or upload file success or upload file fail
   */
  onChange: {
    type: definePropType<UploadHooks['onChange']>(Function),
    default: NOOP,
  },
  /**
   * @description hook function when clicking the uploaded files
   */
  onPreview: {
    type: definePropType<UploadHooks['onPreview']>(Function),
    default: NOOP,
  },
  /**
   * @description hook function when uploaded successfully
   */
  onSuccess: {
    type: definePropType<UploadHooks['onSuccess']>(Function),
    default: NOOP,
  },
  /**
   * @description hook function when some progress occurs
   */
  onProgress: {
    type: definePropType<UploadHooks['onProgress']>(Function),
    default: NOOP,
  },
  /**
   * @description hook function when some errors occurs
   */
  onError: {
    type: definePropType<UploadHooks['onError']>(Function),
    default: NOOP,
  },
  /**
   * @description hook function when limit is exceeded
   */
  onExceed: {
    type: definePropType<UploadHooks['onExceed']>(Function),
    default: NOOP,
  },
  /**
   * @description set HTML attribute: crossorigin.
   */
  crossorigin: {
    type: definePropType<'anonymous' | 'use-credentials' | ''>(String),
  },
} as const)

export type UploadProps = ExtractPropTypes<typeof uploadProps>

export type UploadInstance = InstanceType<typeof Upload>
