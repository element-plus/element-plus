import { ref, watch } from 'vue'
import { debugWarn, throwError } from '@element-plus/utils'
import { useDeprecated } from '@element-plus/hooks'
import { genFileId } from './upload'
import type { ShallowRef } from 'vue'
import type {
  UploadContentProps,
  UploadContentInstance,
} from './upload-content'
import type {
  UploadRawFile,
  UploadFile,
  UploadProps,
  UploadStatus,
  UploadFiles,
} from './upload'

const SCOPE = 'ElUpload'

const revokeObjectURL = (file: UploadFile) => {
  if (file.url?.startsWith('blob:')) {
    URL.revokeObjectURL(file.url)
  }
}

export const useHandlers = (
  props: UploadProps,
  uploadRef: ShallowRef<UploadContentInstance | undefined>
) => {
  const uploadFiles = ref<UploadFiles>([])

  const getFile = (rawFile: UploadRawFile) =>
    uploadFiles.value.find((file) => file.uid === rawFile.uid)

  function abort(file: UploadFile) {
    uploadRef.value?.abort(file)
  }

  function clearFiles(
    /** @default ['ready', 'uploading', 'success', 'fail'] */
    states: UploadStatus[] = ['ready', 'uploading', 'success', 'fail']
  ) {
    uploadFiles.value = uploadFiles.value.filter(
      (row) => !states.includes(row.status)
    )
  }

  const handleError: UploadContentProps['onError'] = (err, rawFile) => {
    const file = getFile(rawFile)
    if (!file) return

    file.status = 'fail'
    uploadFiles.value.splice(uploadFiles.value.indexOf(file), 1)
    props.onError(err, file, uploadFiles.value)
    props.onChange(file, uploadFiles.value)
  }

  const handleProgress: UploadContentProps['onProgress'] = (evt, rawFile) => {
    const file = getFile(rawFile)
    if (!file) return

    props.onProgress(evt, file, uploadFiles.value)
    file.status = 'uploading'
    file.percentage = evt.percent
  }

  const handleSuccess: UploadContentProps['onSuccess'] = (
    response,
    rawFile
  ) => {
    const file = getFile(rawFile)
    if (!file) return

    file.status = 'success'
    file.response = response
    props.onSuccess(response, file, uploadFiles.value)
    props.onChange(file, uploadFiles.value)
  }

  const handleStart: UploadContentProps['onStart'] = (file) => {
    const uploadFile: UploadFile = {
      name: file.name,
      percentage: 0,
      status: 'ready',
      size: file.size,
      raw: file,
      uid: file.uid,
    }
    if (props.listType === 'picture-card' || props.listType === 'picture') {
      try {
        uploadFile.url = URL.createObjectURL(file)
      } catch (err: unknown) {
        debugWarn(SCOPE, (err as Error).message)
        props.onError(err as Error, uploadFile, uploadFiles.value)
      }
    }
    uploadFiles.value.push(uploadFile)
    props.onChange(uploadFile, uploadFiles.value)
  }

  const handleRemove: UploadContentProps['onRemove'] = async (
    file,
    rawFile // TODO: deprecated in 2.2
  ): Promise<void> => {
    if (rawFile) {
      useDeprecated(
        {
          scope: SCOPE,
          from: 'handleRemove second argument',
          version: '2.2',
          replacement: 'first argument `file`',
          ref: 'https://element-plus.org/en-US/component/upload.html#methods',
        },
        true
      )
    }

    const _file = rawFile || file
    const uploadFile = _file instanceof File ? getFile(_file) : _file
    if (!uploadFile) throwError(SCOPE, 'file to be removed not found')

    const doRemove = (file: UploadFile) => {
      abort(file)
      const fileList = uploadFiles.value
      fileList.splice(fileList.indexOf(file), 1)
      props.onRemove(file, fileList)
      revokeObjectURL(file)
    }

    if (props.beforeRemove) {
      const before = await props.beforeRemove(uploadFile, uploadFiles.value)
      if (before !== false) doRemove(uploadFile)
    } else {
      doRemove(uploadFile)
    }
  }

  function submit() {
    uploadFiles.value
      .filter(({ status }) => status === 'ready')
      .forEach(({ raw }) => uploadRef.value?.upload(raw))
  }

  watch(
    () => props.listType,
    (val) => {
      if (val !== 'picture-card' && val !== 'picture') {
        return
      }

      uploadFiles.value = uploadFiles.value.map((file) => {
        const { raw, url } = file
        if (!url && raw) {
          try {
            file.url = URL.createObjectURL(raw)
          } catch (err: unknown) {
            props.onError(err as Error, file, uploadFiles.value)
          }
        }
        return file
      })
    }
  )

  watch(
    () => props.fileList,
    (fileList) => {
      for (const file of fileList) {
        file.uid = genFileId()
        file.status ||= 'success'
      }
    },
    { immediate: true }
  )

  return {
    abort,
    clearFiles,
    handleError,
    handleProgress,
    handleStart,
    handleSuccess,
    handleRemove,
    submit,
    uploadFiles,
  }
}
