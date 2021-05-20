
import { ref, watch } from 'vue'
import { NOOP } from '@vue/shared'
import isEqual from 'lodash/isEqual'
import cloneDeep from 'lodash/cloneDeep'

// Inline types
import type { ListType, UploadFile, ElFile, ElUploadProgressEvent, IUseHandlersProps } from './upload.type'
type UploadRef = {
  abort: (file: UploadFile) => void
  upload: (file: ElFile) => void
}
// helpers
function getFile(rawFile: ElFile, uploadFiles: UploadFile[]) {
  return uploadFiles.find(file => file.uid === rawFile.uid)
}

function genUid(seed: number) {
  return Date.now() + seed
}

export default (props: IUseHandlersProps) => {

  let cachedFiles: UploadFile[] = []
  const uploadFiles = ref<UploadFile[]>([])
  const uploadRef = ref<UploadRef>(null)

  let tempIndex = 1

  function abort(file: UploadFile) {
    uploadRef.value.abort(file)
  }

  function clearFiles() {
    uploadFiles.value = []
  }

  function handleError(err: Error, rawFile: ElFile) {
    const file = getFile(rawFile, uploadFiles.value)
    file.status = 'fail'
    uploadFiles.value.splice(uploadFiles.value.indexOf(file), 1)
    props.onError(err, file, uploadFiles.value)
    props.onChange(file, uploadFiles.value)
  }

  function handleProgress(ev: ElUploadProgressEvent, rawFile: ElFile) {
    const file = getFile(rawFile, uploadFiles.value)
    props.onProgress(ev, file, uploadFiles.value)
    file.status = 'uploading'
    file.percentage = ev.percent || 0
  }

  function handleSuccess(res: any, rawFile: ElFile) {
    const file = getFile(rawFile, uploadFiles.value)
    if (file) {
      file.status = 'success'
      file.response = res
      props.onSuccess(res, file, uploadFiles.value)
      props.onChange(file, uploadFiles.value)
    }
  }

  function handleStart(rawFile: ElFile) {
    const uid = genUid(tempIndex++)
    rawFile.uid = uid
    const file: UploadFile = {
      name: rawFile.name,
      percentage: 0,
      status: 'ready',
      size: rawFile.size,
      raw: rawFile,
      uid,
    }
    if (props.listType === 'picture-card' || props.listType === 'picture') {
      try {
        file.url = URL.createObjectURL(rawFile)
      } catch (err) {
        console.error('[Element Error][Upload]', err)
        props.onError(err, file, uploadFiles.value)
      }
    }
    uploadFiles.value.push(file)
    props.onChange(file, uploadFiles.value)
  }

  function handleRemove(file: UploadFile, raw: ElFile) {
    if (raw) {
      file = getFile(raw, uploadFiles.value)
    }
    const doRemove = () => {
      abort(file)
      const fileList = uploadFiles.value
      fileList.splice(fileList.indexOf(file), 1)
      props.onRemove(file, fileList)
    }
    if (!props.beforeRemove) {
      doRemove()
    } else if (typeof props.beforeRemove === 'function') {
      const before = props.beforeRemove(file, uploadFiles.value)
      if (before instanceof Promise) {
        before.then(() => {
          doRemove()
        }).catch(NOOP)
      } else if (before !== false) {
        doRemove()
      }
    }
  }

  function submit() {
    uploadFiles.value
      .filter(file => file.status === 'ready')
      .forEach(file => {
        uploadRef.value.upload(file.raw)
      })
  }

  watch(() => props.listType, (val: ListType) => {
    if (val === 'picture-card' || val === 'picture') {
      uploadFiles.value = uploadFiles.value.map(file => {
        if (!file.url && file.raw) {
          try {
            file.url = URL.createObjectURL(file.raw)
          } catch (err) {
            props.onError(err, file, uploadFiles.value)
          }
        }
        return file
      })
    }
  })

  watch(() => props.fileList, (fileList: UploadFile[]) => {
    if(!isEqual(cachedFiles, fileList)){
      cachedFiles = []
      uploadFiles.value = fileList.map(file => {
        const cloneFile = cloneDeep(file)
        cachedFiles.push(cloneFile)
        return {
          ...cloneFile,
          uid: file.uid || genUid(tempIndex++),
          status: file.status || 'success',
        }
      })
    }
  }, {
    immediate: true,
    deep: true,
  })

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

