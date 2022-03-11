<template>
  <div>
    <upload-list
      v-if="isPictureCard && showFileList"
      :disabled="disabled"
      :list-type="listType"
      :files="uploadFiles"
      :handle-preview="onPreview"
      @remove="handleRemove"
    >
      <template v-if="$slots.file" #default="{ file }">
        <slot name="file" :file="file"></slot>
      </template>
      <template #append>
        <upload-content-with-props
          v-if="listType === 'picture-card'"
          :key="uploadFiles.length + 1"
        />
      </template>
    </upload-list>
    <upload-content-with-props v-if="listType !== 'picture-card'" />
    <slot v-if="$slots.trigger" />
    <slot name="tip" />
    <upload-list
      v-if="!isPictureCard && showFileList"
      :disabled="disabled"
      :list-type="listType"
      :files="uploadFiles"
      :handle-preview="onPreview"
      @remove="handleRemove"
    >
      <template v-if="$slots.file" #default="{ file }">
        <slot name="file" :file="file" />
      </template>
    </upload-list>
  </div>
</template>
<script lang="ts" setup>
import {
  computed,
  provide,
  onBeforeUnmount,
  toRef,
  shallowRef,
  h,
  defineComponent,
  useSlots,
} from 'vue'
import { uploadContextKey } from '@element-plus/tokens'
import { useDisabled } from '@element-plus/hooks'

import UploadList from './upload-list.vue'
import UploadContent from './upload-content.vue'
import { useHandlers } from './use-handlers'
import { uploadProps } from './upload'
import type { UploadContentInstance } from './upload-content'

defineOptions({
  name: 'ElUpload',
})

const props = defineProps(uploadProps)
const disabled = useDisabled()

const uploadRef = shallowRef<UploadContentInstance>()
const {
  abort,
  submit,
  clearFiles,
  uploadFiles,
  handleStart,
  handleError,
  handleRemove,
  handleSuccess,
  handleProgress,
} = useHandlers(props, uploadRef)

const isPictureCard = computed(() => props.listType === 'picture-card')

onBeforeUnmount(() => {
  uploadFiles.value.forEach(({ url }) => {
    if (url?.startsWith('blob:')) URL.revokeObjectURL(url)
  })
})

provide(uploadContextKey, {
  accept: toRef(props, 'accept'),
})

defineExpose({
  /** @description cancel upload request */
  abort,
  /** @description upload the file list manually */
  submit,
  /** @description clear the file list  */
  clearFiles,
  /** @description select the file manually */
  handleStart,
  /** @description remove the file manually */
  handleRemove,
})

const slots = useSlots()

const UploadContentWithProps = defineComponent({
  render() {
    return h(
      UploadContent,
      {
        ref: 'uploadRef',
        type: props.type,
        drag: props.drag,
        action: props.action,
        multiple: props.multiple,
        withCredentials: props.withCredentials,
        headers: props.headers,
        method: props.method,
        name: props.name,
        data: props.data,
        accept: props.accept,
        autoUpload: props.autoUpload,
        listType: props.listType,
        disabled: props.disabled,
        limit: props.limit,
        fileList: props.fileList,
        httpRequest: props.httpRequest,
        beforeUpload: props.beforeUpload,
        onExceed: props.onExceed,
        onStart: handleStart,
        onProgress: handleProgress,
        onSuccess: handleSuccess,
        onError: handleError,
        onRemove: handleRemove,
      },
      {
        default: () => {
          if (slots.trigger) {
            return slots.trigger()
          } else if (slots.default) {
            return slots.default()
          }
        },
      }
    )
  },
})
</script>
