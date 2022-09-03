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

## Upload API

### Attributes

| Name                              | Description                                                                                                                                                                           | Type                                                                                          | Default  | Required |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | -------- | -------- |
| `action`                          | request URL.                                                                                                                                                                          | `string`                                                                                      | —        | Yes      |
| `headers`                         | request headers.                                                                                                                                                                      | `Headers \| Record<string, any>`                                                              | —        | No       |
| `method`                          | set upload request method.                                                                                                                                                            | `string`                                                                                      | `'post'` | No       |
| `multiple`                        | whether uploading multiple files is permitted.                                                                                                                                        | `boolean`                                                                                     | `false`  | No       |
| `data`                            | additions options of request.                                                                                                                                                         | `Record<string, any>`                                                                         | —        | No       |
| `name`                            | key name for uploaded file.                                                                                                                                                           | `string`                                                                                      | `'file'` | No       |
| `with-credentials`                | whether cookies are sent.                                                                                                                                                             | `boolean`                                                                                     | `false`  | No       |
| `show-file-list`                  | whether to show the uploaded file list.                                                                                                                                               | `boolean`                                                                                     | `true`   | No       |
| `drag`                            | whether to activate drag and drop mode.                                                                                                                                               | `boolean`                                                                                     | `false`  | No       |
| `accept`                          | accepted [file types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept), will not work when `thumbnail-mode === true`.                                     | `string`                                                                                      | —        | No       |
| `on-preview`                      | hook function when clicking the uploaded files.                                                                                                                                       | `(uploadFile: UploadFile) => void`                                                            | —        | No       |
| `on-remove`                       | hook function when files are removed.                                                                                                                                                 | `(uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                                  | —        | No       |
| `on-success`                      | hook function when uploaded successfully.                                                                                                                                             | `(response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                   | —        | No       |
| `on-error`                        | hook function when some errors occurs.                                                                                                                                                | `(error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                    | —        | No       |
| `on-progress`                     | hook function when some progress occurs.                                                                                                                                              | `(evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void`        | —        | No       |
| `on-change`                       | hook function when select file or upload file success or upload file fail.                                                                                                            | `(uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                                  | —        | No       |
| `on-exceed`                       | hook function when limit is exceeded.                                                                                                                                                 | `(files: File[], uploadFiles: UploadFiles) => void`                                           | —        | No       |
| `before-upload`                   | hook function before uploading with the file to be uploaded as its parameter. If `false` is returned or a `Promise` is returned and then is rejected, uploading will be aborted.      | `(rawFile: UploadRawFile) => Awaitable<void \| undefined \| null \| boolean \| File \| Blob>` | —        | No       |
| `before-remove`                   | hook function before removing a file with the file and file list as its parameters. If `false` is returned or a `Promise` is returned and then is rejected, removing will be aborted. | `(uploadFile: UploadFile, uploadFiles: UploadFiles) => Awaitable<boolean>`                    | —        | No       |
| `file-list` / `v-model:file-list` | default uploaded files.                                                                                                                                                               | `UploadUserFile[]`                                                                            | `[]`     | No       |
| `list-type`                       | type of file list.                                                                                                                                                                    | `"text" \| "picture" \| "picture-card"`                                                       | `'text'` | No       |
| `auto-upload`                     | whether to auto upload file.                                                                                                                                                          | `boolean`                                                                                     | `true`   | No       |
| `http-request`                    | override default xhr behavior, allowing you to implement your own upload-file's request.                                                                                              | (options: UploadRequestOptions) => XMLHttpRequest \| Promise\<unknown\>                       | —        | No       |
| `disabled`                        | whether to disable upload.                                                                                                                                                            | boolean                                                                                       | `false`  | No       |
| `limit`                           | maximum number of uploads allowed.                                                                                                                                                    | number                                                                                        | —        | No       |

### Slots

| Name      | Description                         | Scope                  |
| --------- | ----------------------------------- | ---------------------- |
| `default` | customize default content.          | -                      |
| `trigger` | content which triggers file dialog. | -                      |
| `tip`     | content of tips.                    | -                      |
| `file`    | content of thumbnail template.      | `{ file: UploadFile }` |

### Exposes

| Name           | Description                                                                                            | Type                                                                      |
| -------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| `abort`        | cancel upload request.                                                                                 | `(file: UploadFile) => void`                                              |
| `submit`       | upload the file list manually.                                                                         | `() => void`                                                              |
| `clearFiles`   | clear the file list (this method is not supported in the `before-upload` hook).                        | `(status?: Array<"ready" \| "uploading" \| "success" \| "fail">) => void` |
| `handleStart`  | select the file manually.                                                                              | `(rawFile: UploadRawFile) => void`                                        |
| `handleRemove` | remove the file manually. `file` and `rawFile` has been merged. `rawFile` will be removed in `v2.2.0`. | `(file: UploadFile \| UploadRawFile, rawFile?: UploadRawFile) => void`    |
