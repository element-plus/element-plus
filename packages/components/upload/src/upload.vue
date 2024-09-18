<template>
  <div>
    <upload-list
      v-if="isPictureCard && showFileList"
      :disabled="disabled"
      :list-type="listType"
      :files="uploadFiles"
      :crossorigin="crossorigin"
      :handle-preview="onPreview"
      @remove="handleRemove"
    >
      <template v-if="$slots.file" #default="{ file, index }">
        <slot name="file" :file="file" :index="index" />
      </template>
      <template #append>
        <upload-content ref="uploadRef" v-bind="uploadContentProps">
          <slot v-if="$slots.trigger" name="trigger" />
          <slot v-if="!$slots.trigger && $slots.default" />
        </upload-content>
      </template>
    </upload-list>

    <upload-content
      v-if="!isPictureCard || (isPictureCard && !showFileList)"
      ref="uploadRef"
      v-bind="uploadContentProps"
    >
      <slot v-if="$slots.trigger" name="trigger" />
      <slot v-if="!$slots.trigger && $slots.default" />
    </upload-content>

    <slot v-if="$slots.trigger" />
    <slot name="tip" />
    <upload-list
      v-if="!isPictureCard && showFileList"
      :disabled="disabled"
      :list-type="listType"
      :files="uploadFiles"
      :crossorigin="crossorigin"
      :handle-preview="onPreview"
      @remove="handleRemove"
    >
      <template v-if="$slots.file" #default="{ file, index }">
        <slot name="file" :file="file" :index="index" />
      </template>
    </upload-list>
  </div>
</template>

<script lang="ts" setup>
import { computed, onBeforeUnmount, provide, shallowRef, toRef } from 'vue'
import { useFormDisabled } from '@element-plus/components/form'
import { uploadContextKey } from './constants'
import UploadList from './upload-list.vue'
import UploadContent from './upload-content.vue'
import { useHandlers } from './use-handlers'
import { uploadProps } from './upload'

import type {
  UploadContentInstance,
  UploadContentProps,
} from './upload-content'

defineOptions({
  name: 'ElUpload',
})

const props = defineProps(uploadProps)

const disabled = useFormDisabled()

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
  revokeFileObjectURL,
} = useHandlers(props, uploadRef)

const isPictureCard = computed(() => props.listType === 'picture-card')

const uploadContentProps = computed<UploadContentProps>(() => ({
  ...props,
  fileList: uploadFiles.value,
  onStart: handleStart,
  onProgress: handleProgress,
  onSuccess: handleSuccess,
  onError: handleError,
  onRemove: handleRemove,
}))

onBeforeUnmount(() => {
  uploadFiles.value.forEach(revokeFileObjectURL)
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
</script>
