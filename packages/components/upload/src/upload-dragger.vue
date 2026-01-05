<template>
  <div
    :class="[ns.b('dragger'), ns.is('dragover', dragover)]"
    @drop.prevent="onDrop"
    @dragover.prevent="onDragover"
    @dragleave.prevent="onDragleave"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { inject, ref } from 'vue'
import { useNamespace } from '@element-plus/hooks'
import { useFormDisabled } from '@element-plus/components/form'
import { throwError } from '@element-plus/utils/error'
import { uploadContextKey } from './constants'
import { uploadDraggerEmits, uploadDraggerProps } from './upload-dragger'

import type { UploadRawFile } from './upload'

const COMPONENT_NAME = 'ElUploadDrag'

defineOptions({
  name: COMPONENT_NAME,
})

defineProps(uploadDraggerProps)
const emit = defineEmits(uploadDraggerEmits)

const uploaderContext = inject(uploadContextKey)
if (!uploaderContext) {
  throwError(
    COMPONENT_NAME,
    'usage: <el-upload><el-upload-dragger /></el-upload>'
  )
}

const ns = useNamespace('upload')
const dragover = ref(false)
const disabled = useFormDisabled()

const onDrop = (e: DragEvent) => {
  if (disabled.value) return
  dragover.value = false

  e.stopPropagation()

  const files = Array.from(e.dataTransfer!.files) as UploadRawFile[]
  const items = e.dataTransfer!.items || []
  files.forEach((file, index) => {
    const item = items[index]
    const entry = item?.webkitGetAsEntry?.()
    if (entry) {
      file.isDirectory = entry.isDirectory
    }
  })
  emit('file', files)
}

const onDragover = () => {
  if (!disabled.value) dragover.value = true
}

const onDragleave = (e: DragEvent) => {
  if (!(e.currentTarget as Element).contains(e.relatedTarget as Element))
    dragover.value = false
}
</script>
