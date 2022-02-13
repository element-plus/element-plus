<template>
  <div
    :class="[ns.b(), ns.m(listType)]"
    tabindex="0"
    @click="handleClick"
    @keydown.self.enter.space="handleKeydown"
  >
    <template v-if="drag">
      <upload-dragger :disabled="disabled" @file="uploadFiles">
        <slot></slot>
      </upload-dragger>
    </template>
    <template v-else>
      <slot></slot>
    </template>
    <input
      ref="inputRef"
      :class="ns.e('input')"
      type="file"
      :name="name"
      :multiple="multiple"
      :accept="accept"
      @change="handleChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { hasOwn } from '@element-plus/utils'
import UploadDragger from './upload-dragger.vue'
import { uploadContentProps } from './upload-content'
import type { RawFile, UploadFile } from './upload'

defineOptions({
  name: 'ElUploadContent',
})

const props = defineProps(uploadContentProps)

const reqs = ref({} as Record<string, XMLHttpRequest | Promise<any>>)
const ns = useNamespace('upload')
const inputRef = ref<HTMLInputElement>()

const uploadFiles = (files: FileList | File[]) => {
  if (props.limit && props.fileList.length + files.length > props.limit) {
    props.onExceed(files as FileList, props.fileList)
    return
  }
  let postFiles = Array.from(files)
  if (!props.multiple) {
    postFiles = postFiles.slice(0, 1)
  }
  if (postFiles.length === 0) {
    return
  }
  postFiles.forEach((rawFile) => {
    props.onStart(rawFile)
    if (props.autoUpload) upload(rawFile as RawFile)
  })
}

const upload = (rawFile: RawFile) => {
  inputRef.value!.value = ''
  if (!props.beforeUpload) {
    return post(rawFile)
  }
  const before = props.beforeUpload(rawFile)
  if (before instanceof Promise) {
    before
      .then((processedFile) => {
        const fileType = Object.prototype.toString.call(processedFile)
        if (fileType === '[object File]' || fileType === '[object Blob]') {
          if (fileType === '[object Blob]') {
            processedFile = new File([processedFile], rawFile.name, {
              type: rawFile.type,
            })
          }
          for (const p in rawFile) {
            if (hasOwn(rawFile, p)) {
              processedFile[p] = rawFile[p]
            }
          }
          post(processedFile)
        } else {
          post(rawFile)
        }
      })
      .catch(() => {
        props.onRemove(undefined, rawFile)
      })
  } else if (before !== false) {
    post(rawFile)
  } else {
    props.onRemove(undefined, rawFile)
  }
}

const abort = (file: UploadFile) => {
  const _reqs = reqs.value
  if (file) {
    const uid = file.uid
    if (_reqs[uid]) {
      ;(_reqs[uid] as XMLHttpRequest).abort()
    }
  } else {
    Object.keys(_reqs).forEach((uid) => {
      if (_reqs[uid]) (_reqs[uid] as XMLHttpRequest).abort()
      delete _reqs[uid]
    })
  }
}

const post = (rawFile: RawFile) => {
  const { uid } = rawFile
  const options = {
    headers: props.headers,
    withCredentials: props.withCredentials,
    file: rawFile,
    data: props.data,
    method: props.method,
    filename: props.name,
    action: props.action,
    onProgress: (e) => {
      props.onProgress(e, rawFile)
    },
    onSuccess: (res: any) => {
      props.onSuccess(res, rawFile)
      delete reqs.value[uid]
    },
    onError: (err) => {
      props.onError(err, rawFile)
      delete reqs.value[uid]
    },
  }
  const req = props.httpRequest(options)
  reqs.value[uid] = req
  if (req instanceof Promise) {
    req.then(options.onSuccess, options.onError)
  }
}

const handleChange = (e: Event) => {
  const files = (e.target as HTMLInputElement).files
  if (!files) return
  uploadFiles(files)
}

const handleClick = () => {
  if (!props.disabled) {
    inputRef.value!.value = ''
    inputRef.value!.click()
  }
}

const handleKeydown = () => {
  handleClick()
}

defineExpose({
  abort,
  upload,
})
</script>
