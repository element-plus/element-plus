---
title: Upload
lang: en-US
---

# Upload

Upload files by clicking or drag-and-drop.

## Basic Usage

:::demo Customize upload button type and text using `slot`. Set `limit` and `on-exceed` to limit the maximum number of uploads allowed and specify method when the limit is exceeded. Plus, you can abort removing a file in the `before-remove` hook.

upload/basic

:::

## Cover Previous File

:::demo Set `limit` and `on-exceed` to automatically replace the previous file when select a new file.

upload/limit-cover

:::

## User Avatar

Use `before-upload` hook to limit the upload file format and size.

:::demo

upload/avatar

:::

## Photo Wall

Use `list-type` to change the fileList style.

:::demo

upload/photo-wall

:::

## Custom Thumbnail

Use `scoped-slot` to change default thumbnail template.

:::demo

upload/custom-thumbnail

:::

## File List with Thumbnail

:::demo

upload/file-list-with-thumbnail

:::

## File List Control

Use `on-change` hook function to control upload file list.

:::demo

upload/file-list

:::

## Drag to Upload

You can drag your file to a certain area to upload it.

:::demo

upload/drag-and-drop

:::

## Manual Upload

:::demo

upload/manual

:::

## API

### Attributes

| Name                          | Description                                                                                                                                                                           | Type                                                                                                                                       | Default                                                                                                            |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| action ^(required)            | request URL.                                                                                                                                                                          | ^[string]                                                                                                                                  | #                                                                                                                  |
| headers                       | request headers.                                                                                                                                                                      | ^[object]`Headers \| Record<string, any>`                                                                                                  | —                                                                                                                  |
| method                        | set upload request method.                                                                                                                                                            | ^[string]                                                                                                                                  | post                                                                                                               |
| multiple                      | whether uploading multiple files is permitted.                                                                                                                                        | ^[boolean]                                                                                                                                 | false                                                                                                              |
| data                          | additions options of request. support `Awaitable` data and `Function` since v2.3.13.                                                                                                  | ^[object]`Record<string, any> \| Awaitable<Record<string, any>>` / ^[Function]`(rawFile: UploadRawFile) => Awaitable<Record<string, any>>` | {}                                                                                                                 |
| name                          | key name for uploaded file.                                                                                                                                                           | ^[string]                                                                                                                                  | file                                                                                                               |
| with-credentials              | whether cookies are sent.                                                                                                                                                             | ^[boolean]                                                                                                                                 | false                                                                                                              |
| show-file-list                | whether to show the uploaded file list.                                                                                                                                               | ^[boolean]                                                                                                                                 | true                                                                                                               |
| drag                          | whether to activate drag and drop mode.                                                                                                                                               | ^[boolean]                                                                                                                                 | false                                                                                                              |
| accept                        | accepted [file types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept), will not work when `thumbnail-mode === true`.                                     | ^[string]                                                                                                                                  | ''                                                                                                                 |
| crossorigin                   | native attribute [crossorigin](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin).                                                                             | ^[enum]`'' \| 'anonymous' \| 'use-credentials'`                                                                                            | —                                                                                                                  |
| on-preview                    | hook function when clicking the uploaded files.                                                                                                                                       | ^[Function]`(uploadFile: UploadFile) => void`                                                                                              | —                                                                                                                  |
| on-remove                     | hook function when files are removed.                                                                                                                                                 | ^[Function]`(uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                                                                    | —                                                                                                                  |
| on-success                    | hook function when uploaded successfully.                                                                                                                                             | ^[Function]`(response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                                                     | —                                                                                                                  |
| on-error                      | hook function when some errors occurs.                                                                                                                                                | ^[Function]`(error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                                                      | —                                                                                                                  |
| on-progress                   | hook function when some progress occurs.                                                                                                                                              | ^[Function]`(evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                                          | —                                                                                                                  |
| on-change                     | hook function when select file or upload file success or upload file fail.                                                                                                            | ^[Function]`(uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                                                                    | —                                                                                                                  |
| on-exceed                     | hook function when limit is exceeded.                                                                                                                                                 | ^[Function]`(files: File[], uploadFiles: UploadUserFile[]) => void`                                                                        | —                                                                                                                  |
| before-upload                 | hook function before uploading with the file to be uploaded as its parameter. If `false` is returned or a `Promise` is returned and then is rejected, uploading will be aborted.      | ^[Function]`(rawFile: UploadRawFile) => Awaitable<void \| undefined \| null \| boolean \| File \| Blob>`                                   | —                                                                                                                  |
| before-remove                 | hook function before removing a file with the file and file list as its parameters. If `false` is returned or a `Promise` is returned and then is rejected, removing will be aborted. | ^[Function]`(uploadFile: UploadFile, uploadFiles: UploadFiles) => Awaitable<boolean>`                                                      | —                                                                                                                  |
| file-list / v-model:file-list | default uploaded files.                                                                                                                                                               | ^[object]`UploadUserFile[]`                                                                                                                | []                                                                                                                 |
| list-type                     | type of file list.                                                                                                                                                                    | ^[enum]`'text' \| 'picture' \| 'picture-card'`                                                                                             | text                                                                                                               |
| auto-upload                   | whether to auto upload file.                                                                                                                                                          | ^[boolean]                                                                                                                                 | true                                                                                                               |
| http-request                  | override default xhr behavior, allowing you to implement your own upload-file's request.                                                                                              | ^[Function]`(options: UploadRequestOptions) => XMLHttpRequest \| Promise<unknown>`                                                         | ajaxUpload [see](https://github.com/element-plus/element-plus/blob/dev/packages/components/upload/src/ajax.ts#L55) |
| disabled                      | whether to disable upload.                                                                                                                                                            | ^[boolean]                                                                                                                                 | false                                                                                                              |
| limit                         | maximum number of uploads allowed.                                                                                                                                                    | ^[number]                                                                                                                                  | —                                                                                                                  |

### Slots

| Name    | Description                         | Type                                           |
| ------- | ----------------------------------- | ---------------------------------------------- |
| default | customize default content.          | -                                              |
| trigger | content which triggers file dialog. | -                                              |
| tip     | content of tips.                    | -                                              |
| file    | content of thumbnail template.      | ^[object]`{ file: UploadFile, index: number }` |

### Exposes

| Name         | Description                                                                                            | Type                                                                              |
| ------------ | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------- |
| abort        | cancel upload request.                                                                                 | ^[Function]`(file: UploadFile) => void`                                           |
| submit       | upload the file list manually.                                                                         | ^[Function]`() => void`                                                           |
| clearFiles   | clear the file list (this method is not supported in the `before-upload` hook).                        | ^[Function]`(status?: UploadStatus[]) => void`                                    |
| handleStart  | select the file manually.                                                                              | ^[Function]`(rawFile: UploadRawFile) => void`                                     |
| handleRemove | remove the file manually. `file` and `rawFile` has been merged. `rawFile` will be removed in `v2.2.0`. | ^[Function]`(file: UploadFile \| UploadRawFile, rawFile?: UploadRawFile) => void` |

## Type Declarations

<details>
  <summary>Show declarations</summary>

```ts
type UploadFiles = UploadFile[]

type UploadUserFile = Omit<UploadFile, 'status' | 'uid'> &
  Partial<Pick<UploadFile, 'status' | 'uid'>>

type UploadStatus = 'ready' | 'uploading' | 'success' | 'fail'

type Awaitable<T> = Promise<T> | T

type Mutable<T> = { -readonly [P in keyof T]: T[P] }

interface UploadFile {
  name: string
  percentage?: number
  status: UploadStatus
  size?: number
  response?: unknown
  uid: number
  url?: string
  raw?: UploadRawFile
}

interface UploadProgressEvent extends ProgressEvent {
  percent: number
}

interface UploadRawFile extends File {
  uid: number
  isDirectory?: boolean
}

interface UploadRequestOptions {
  action: string
  method: string
  data: Record<string, string | Blob | [string | Blob, string]>
  filename: string
  file: File
  headers: Headers | Record<string, string | number | null | undefined>
  onError: (evt: UploadAjaxError) => void
  onProgress: (evt: UploadProgressEvent) => void
  onSuccess: (response: any) => void
  withCredentials: boolean
}
```

</details>
