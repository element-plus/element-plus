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

## Upload Directory ^(2.13.1)

Enable folder upload via the `directory` prop.

:::demo After enabling it, only folders can be selected, and after selecting a folder, the files within the folder will be flattened.

upload/directory

:::

## Manual Upload

:::demo

upload/manual

:::

## API

### Attributes

| Name                          | Description                                                                                                                                                                          | Type                                                                                                                                       | Default                                                                                                            |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| action ^(required)            | Request URL                                                                                                                                                                          | ^[string]                                                                                                                                  | #                                                                                                                  |
| headers                       | Request headers                                                                                                                                                                      | ^[object]`Headers \| Record<string, any>`                                                                                                  | —                                                                                                                  |
| method                        | Set upload request method                                                                                                                                                            | ^[string]                                                                                                                                  | post                                                                                                               |
| multiple                      | Whether uploading multiple files is permitted                                                                                                                                        | ^[boolean]                                                                                                                                 | false                                                                                                              |
| data                          | Additions options of request. support `Awaitable` data and `Function` since v2.3.13                                                                                                  | ^[object]`Record<string, any> \| Awaitable<Record<string, any>>` / ^[Function]`(rawFile: UploadRawFile) => Awaitable<Record<string, any>>` | {}                                                                                                                 |
| name                          | Key name for uploaded file                                                                                                                                                           | ^[string]                                                                                                                                  | file                                                                                                               |
| with-credentials              | Whether cookies are sent                                                                                                                                                             | ^[boolean]                                                                                                                                 | false                                                                                                              |
| show-file-list                | Whether to show the uploaded file list                                                                                                                                               | ^[boolean]                                                                                                                                 | true                                                                                                               |
| drag                          | Whether to activate drag and drop mode                                                                                                                                               | ^[boolean]                                                                                                                                 | false                                                                                                              |
| accept                        | Accepted [file types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept), will not work when `thumbnail-mode === true`                                     | ^[string]                                                                                                                                  | ''                                                                                                                 |
| crossorigin                   | Native attribute [crossorigin](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin)                                                                             | ^[enum]`'' \| 'anonymous' \| 'use-credentials'`                                                                                            | —                                                                                                                  |
| on-preview                    | Hook function when clicking the uploaded files                                                                                                                                       | ^[Function]`(uploadFile: UploadFile) => void`                                                                                              | —                                                                                                                  |
| on-remove                     | Hook function when files are removed                                                                                                                                                 | ^[Function]`(uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                                                                    | —                                                                                                                  |
| on-success                    | Hook function when uploaded successfully                                                                                                                                             | ^[Function]`(response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                                                     | —                                                                                                                  |
| on-error                      | Hook function when some errors occurs                                                                                                                                                | ^[Function]`(error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                                                      | —                                                                                                                  |
| on-progress                   | Hook function when some progress occurs                                                                                                                                              | ^[Function]`(evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                                          | —                                                                                                                  |
| on-change                     | Hook function when select file or upload file success or upload file fail                                                                                                            | ^[Function]`(uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                                                                    | —                                                                                                                  |
| on-exceed                     | Hook function when limit is exceeded                                                                                                                                                 | ^[Function]`(files: File[], uploadFiles: UploadUserFile[]) => void`                                                                        | —                                                                                                                  |
| before-upload                 | Hook function before uploading with the file to be uploaded as its parameter. If `false` is returned or a `Promise` is returned and then is rejected, uploading will be aborted      | ^[Function]`(rawFile: UploadRawFile) => Awaitable<void \| undefined \| null \| boolean \| File \| Blob>`                                   | —                                                                                                                  |
| before-remove                 | Hook function before removing a file with the file and file list as its parameters. If `false` is returned or a `Promise` is returned and then is rejected, removing will be aborted | ^[Function]`(uploadFile: UploadFile, uploadFiles: UploadFiles) => Awaitable<boolean>`                                                      | —                                                                                                                  |
| file-list / v-model:file-list | Default uploaded files                                                                                                                                                               | ^[array]`UploadUserFile[]`                                                                                                                 | []                                                                                                                 |
| list-type                     | Type of file list                                                                                                                                                                    | ^[enum]`'text' \| 'picture' \| 'picture-card'`                                                                                             | text                                                                                                               |
| auto-upload                   | Whether to auto upload file                                                                                                                                                          | ^[boolean]                                                                                                                                 | true                                                                                                               |
| http-request                  | Override default xhr behavior, allowing you to implement your own upload-file's request                                                                                              | ^[Function]`(options: UploadRequestOptions) => XMLHttpRequest \| Promise<unknown>`                                                         | ajaxUpload [see](https://github.com/element-plus/element-plus/blob/dev/packages/components/upload/src/ajax.ts#L55) |
| disabled                      | Whether to disable upload                                                                                                                                                            | ^[boolean]                                                                                                                                 | false                                                                                                              |
| limit                         | Maximum number of uploads allowed                                                                                                                                                    | ^[number]                                                                                                                                  | —                                                                                                                  |
| directory ^(2.13.1)           | Whether to support uploading directory. After enabling it, only folders can be selected, and after selecting a folder, the files within the folder will be flattened                 | ^[boolean]                                                                                                                                 | false                                                                                                              |

### Slots

| Name    | Description                        | Type                                           |
| ------- | ---------------------------------- | ---------------------------------------------- |
| default | Customize default content          | -                                              |
| trigger | Content which triggers file dialog | -                                              |
| tip     | Content of tips                    | -                                              |
| file    | Content of thumbnail template      | ^[object]`{ file: UploadFile, index: number }` |

### Exposes

| Name         | Description                                                                                                                                     | Type                                                                              |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| abort        | Cancel upload request. When a `file` is specified, abort the corresponding pending upload; when no file is specified, abort all pending uploads | ^[Function]`(file?: UploadFile) => void`                                          |
| submit       | Upload the file list manually                                                                                                                   | ^[Function]`() => void`                                                           |
| clearFiles   | Clear the file list (this method is not supported in the `before-upload` hook)                                                                  | ^[Function]`(status?: UploadStatus[]) => void`                                    |
| handleStart  | Select the file manually                                                                                                                        | ^[Function]`(rawFile: UploadRawFile) => void`                                     |
| handleRemove | Remove the file manually. `file` and `rawFile` has been merged. `rawFile` will be removed in `v2.2.0`                                           | ^[Function]`(file: UploadFile \| UploadRawFile, rawFile?: UploadRawFile) => void` |

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
  data: Record<string, string | Blob | [string | Blob, string] | string[]>
  filename: string
  file: UploadRawFile
  headers: Headers | Record<string, string | number | null | undefined>
  onError: (evt: UploadAjaxError) => void
  onProgress: (evt: UploadProgressEvent) => void
  onSuccess: (response: any) => void
  withCredentials: boolean
}
```

</details>
