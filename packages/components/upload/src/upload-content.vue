<template>
  <div
    :class="['el-upload', `el-upload--${listType}`]"
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
      class="el-upload__input"
      type="file"
      :name="name"
      :multiple="multiple"
      :accept="accept"
      @change="handleChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { hasOwn } from '@vue/shared'

import UploadDragger from './upload-dragger.vue'

import { uploadContentProps } from './upload-content'
import type { RawFile } from './upload'
import type { Indexable } from '@element-plus/utils/types'

export default defineComponent({
  components: {
    UploadDragger,
  },
  props: uploadContentProps,
  setup(props) {
    const reqs: Indexable<XMLHttpRequest | Promise<any>> = reactive({})
    const mouseover = ref(false)
    const inputRef = ref<HTMLInputElement>()

    function uploadFiles(files: FileList | File[]) {
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
        props.onStart(rawFile as RawFile)
        if (props.autoUpload) upload(rawFile as RawFile)
      })
    }

    function upload(rawFile: RawFile) {
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
            props.onRemove(null, rawFile)
          })
      } else if (before !== false) {
        post(rawFile)
      } else {
        props.onRemove(null, rawFile)
      }
    }
    function abort(file) {
      if (file) {
        let uid = file
        if (file.uid) uid = file.uid
        if (reqs[uid]) {
          ;(reqs[uid] as XMLHttpRequest).abort()
        }
      } else {
        Object.keys(reqs).forEach((uid) => {
          if (reqs[uid]) (reqs[uid] as XMLHttpRequest).abort()
          delete reqs[uid]
        })
      }
    }

    function post(rawFile: RawFile) {
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
        onSuccess: (res) => {
          props.onSuccess(res, rawFile)
          delete reqs[uid]
        },
        onError: (err) => {
          props.onError(err, rawFile)
          delete reqs[uid]
        },
      }
      const req = props.httpRequest(options)
      reqs[uid] = req!
      if (req instanceof Promise) {
        req.then(options.onSuccess, options.onError)
      }
    }

    function handleChange(e: Event) {
      const files = (e.target as HTMLInputElement).files
      if (!files) return
      uploadFiles(files)
    }

    function handleClick() {
      if (!props.disabled) {
        inputRef.value!.value = ''
        inputRef.value!.click()
      }
    }

    function handleKeydown() {
      handleClick()
    }

    return {
      reqs,
      mouseover,
      inputRef,
      abort,
      post,
      handleChange,
      handleClick,
      handleKeydown,
      upload,
      uploadFiles,
    }
  },
})
</script>
