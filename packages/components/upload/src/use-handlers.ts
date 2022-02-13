import { ref, watch } from 'vue'
import { NOOP } from '@vue/shared'
import { cloneDeep } from 'lodash-unified'
import { throwError } from '@element-plus/utils'
import type { UploadContentInstance } from './upload-content'
import type {
  RawFile,
  UploadFile,
  UploadProgressEvent,
  UploadProps,
  UploadStatus,
} from './upload'

function getFile(rawFile: RawFile, uploadFiles: UploadFile[]) {
  return uploadFiles.find((file) => file.uid === rawFile.uid)
}

function genUid(seed: number) {
  return Date.now() + seed
}

export default (props: UploadProps) => {
  const uploadFiles = ref<UploadFile[]>([])
  const uploadRef = ref<UploadContentInstance>()

  let tempIndex = 1

  function abort(file: UploadFile) {
    uploadRef.value?.abort(file)
  }

  function clearFiles(
    status: UploadStatus[] = ['ready', 'uploading', 'success', 'fail']
  ) {
    uploadFiles.value = uploadFiles.value.filter((row) => {
      return !status.includes(row.status)
    })
  }

  function handleError(err: Error, rawFile: RawFile) {
    const file = getFile(rawFile, uploadFiles.value)!
    file.status = 'fail'
    uploadFiles.value.splice(uploadFiles.value.indexOf(file), 1)
    props.onError(err, file, uploadFiles.value)
    props.onChange(file, uploadFiles.value)
  }

  function handleProgress(ev: UploadProgressEvent, rawFile: RawFile) {
    const file = getFile(rawFile, uploadFiles.value)!
    props.onProgress(ev, file, uploadFiles.value)
    file.status = 'uploading'
    file.percentage = ev.percent || 0
  }

  function handleSuccess(res: any, rawFile: RawFile) {
    const file = getFile(rawFile, uploadFiles.value)
    if (file) {
      file.status = 'success'
      file.response = res
      props.onSuccess(res, file, uploadFiles.value)
      props.onChange(file, uploadFiles.value)
    }
  }

  function handleStart(rawFile: File) {
    const uid = genUid(tempIndex++)
    const file: UploadFile = {
      name: rawFile.name,
      percentage: 0,
      status: 'ready',
      size: rawFile.size,
      raw: Object.assign(rawFile, { uid }),
      uid,
    }
    if (props.listType === 'picture-card' || props.listType === 'picture') {
      try {
        file.url = URL.createObjectURL(rawFile)
      } catch (err) {
        console.error('[Element Error][Upload]', err)
        props.onError(err as Error, file, uploadFiles.value)
      }
    }
    uploadFiles.value.push(file)
    props.onChange(file, uploadFiles.value)
  }

  function handleRemove(file?: UploadFile, rawFile?: RawFile): void {
    if (rawFile) {
      file = getFile(rawFile, uploadFiles.value)
    }
    if (!file) throwError('ElUpload', 'handle remove error')
    const revokeObjectURL = (file: UploadFile) => {
      if (file.url && file.url.indexOf('blob:') === 0) {
        URL.revokeObjectURL(file.url)
      }
    }
    const doRemove = (file: UploadFile) => {
      abort(file)
      const fileList = uploadFiles.value
      fileList.splice(fileList.indexOf(file), 1)
      props.onRemove(file, fileList)
      revokeObjectURL(file)
    }
    if (!props.beforeRemove) {
      doRemove(file)
    } else if (typeof props.beforeRemove === 'function') {
      const before = props.beforeRemove(file, uploadFiles.value)
      if (before instanceof Promise) {
        before
          .then(() => {
            doRemove(file!)
          })
          .catch(NOOP)
      } else if (before !== false) {
        doRemove(file)
      }
    }
  }

  function submit() {
    uploadFiles.value
      .filter((file) => file.status === 'ready')
      .forEach((file) => {
        uploadRef.value?.upload(file.raw)
      })
  }

  watch(
    () => props.listType,
    (val) => {
      if (val === 'picture-card' || val === 'picture') {
        uploadFiles.value = uploadFiles.value.map((file) => {
          if (!file.url && file.raw) {
            try {
              file.url = URL.createObjectURL(file.raw)
            } catch (err) {
              props.onError(err as Error, file, uploadFiles.value)
            }
          }
          return file
        })
      }
    }
  )

  watch(
    () => props.fileList,
    (fileList: UploadFile[]) => {
      uploadFiles.value = fileList.map((file) => {
        const cloneFile = cloneDeep(file)
        return {
          ...cloneFile,
          uid: file.uid || genUid(tempIndex++),
          status: file.status || 'success',
        }
      })
    },
    {
      immediate: true,
      deep: true,
    }
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
    uploadRef,
  }
}
