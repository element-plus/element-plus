<template>
  <div
    :class="[ns.b('dragger'), ns.is('dragover', dragover)]"
    @drop.prevent="onDrop"
    @dragenter.prevent="onDragenter"
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
let outerElement: EventTarget | null = null

const onDrop = (e: DragEvent) => {
  outerElement = null
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

const onDragenter = (e) => {
  outerElement = e.target
  dragover.value = true
}

const onDragleave = (e) => {
  if (outerElement === e.target) {
    dragover.value = false
    outerElement = null
  }
}
</script>
