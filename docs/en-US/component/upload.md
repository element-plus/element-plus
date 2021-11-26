---
title: Upload
lang: en-US
---

# Upload

Upload files by clicking or drag-and-drop

## Click to upload files

:::demo Customize upload button type and text using `slot`. Set `limit` and `on-exceed` to limit the maximum number of uploads allowed and specify method when the limit is exceeded. Plus, you can abort removing a file in the `before-remove` hook.

upload/basic

:::

## User avatar upload

Use `before-upload` hook to limit the upload file format and size.

:::demo

upload/avatar

:::

## Photo Wall

Use `list-type` to change the fileList style.

:::demo

upload/photo-album

:::

## Custom file thumbnail

Use `scoped-slot` to change default thumbnail template.

:::demo

upload/custom-thumbnail

:::

## FileList with thumbnail

:::demo

upload/file-list-with-thumbnail

:::

## File list control

Use `on-change` hook function to control upload file list

:::demo

upload/file-list

:::

## Drag to upload

You can drag your file to a certain area to upload it.

:::demo

upload/drag-and-drop

:::

## Manual upload

:::demo

upload/manual

:::

## Attributes

| Attribute        | Description                                                                                                                                                                           | Type                               | Accepted Values           | Default |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | ------------------------- | ------- |
| action           | required, request URL                                                                                                                                                                 | string                             | —                         | —       |
| headers          | request headers                                                                                                                                                                       | object                             | —                         | —       |
| method           | set upload request method                                                                                                                                                             | string                             | post/put/patch            | post    |
| multiple         | whether uploading multiple files is permitted                                                                                                                                         | boolean                            | —                         | —       |
| data             | additions options of request                                                                                                                                                          | object                             | —                         | —       |
| name             | key name for uploaded file                                                                                                                                                            | string                             | —                         | file    |
| with-credentials | whether cookies are sent                                                                                                                                                              | boolean                            | —                         | false   |
| show-file-list   | whether to show the uploaded file list                                                                                                                                                | boolean                            | —                         | true    |
| drag             | whether to activate drag and drop mode                                                                                                                                                | boolean                            | —                         | false   |
| accept           | accepted [file types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept), will not work when `thumbnail-mode` is `true`                                     | string                             | —                         | —       |
| on-preview       | hook function when clicking the uploaded files                                                                                                                                        | function(file)                     | —                         | —       |
| on-remove        | hook function when files are removed                                                                                                                                                  | function(file, fileList)           | —                         | —       |
| on-success       | hook function when uploaded successfully                                                                                                                                              | function(response, file, fileList) | —                         | —       |
| on-error         | hook function when some errors occurs                                                                                                                                                 | function(err, file, fileList)      | —                         | —       |
| on-progress      | hook function when some progress occurs                                                                                                                                               | function(event, file, fileList)    | —                         | —       |
| on-change        | hook function when select file or upload file success or upload file fail                                                                                                             | function(file, fileList)           | —                         | —       |
| before-upload    | hook function before uploading with the file to be uploaded as its parameter. If `false` is returned or a `Promise` is returned and then is rejected, uploading will be aborted       | function(file)                     | —                         | —       |
| before-remove    | hook function before removing a file with the file and file list as its parameters. If `false` is returned or a `Promise` is returned and then is rejected, removing will be aborted. | function(file, fileList)           | —                         | —       |
| thumbnail-mode   | whether thumbnail is displayed                                                                                                                                                        | boolean                            | —                         | false   |
| file-list        | default uploaded files, e.g. [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]                                                                                                 | array                              | —                         | []      |
| list-type        | type of fileList                                                                                                                                                                      | string                             | text/picture/picture-card | text    |
| auto-upload      | whether to auto upload file                                                                                                                                                           | boolean                            | —                         | true    |
| http-request     | override default xhr behavior, allowing you to implement your own upload-file's request                                                                                               | function                           | —                         | —       |
| disabled         | whether to disable upload                                                                                                                                                             | boolean                            | —                         | false   |
| limit            | maximum number of uploads allowed                                                                                                                                                     | number                             | —                         | —       |
| on-exceed        | hook function when limit is exceeded                                                                                                                                                  | function(files, fileList)          | —                         | -       |

## Slots

| Name    | Description                        |
| ------- | ---------------------------------- |
| —       | customize default content          |
| trigger | content which triggers file dialog |
| tip     | content of tips                    |
| file    | content of thumbnail template.     |

## Methods

| Methods Name | Description                                                                             | Parameters                  |
| ------------ | --------------------------------------------------------------------------------------- | --------------------------- |
| clearFiles   | clear the uploaded file list (this method is not supported in the `before-upload` hook) | —                           |
| abort        | cancel upload request                                                                   | （ file: fileList's item ） |
| submit       | upload the file list manually                                                           | —                           |
