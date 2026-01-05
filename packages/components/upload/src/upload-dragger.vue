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
import { flatten } from 'lodash-unified'
import { uploadContextKey } from './constants'
import { uploadDraggerEmits, uploadDraggerProps } from './upload-dragger'

import type { UploadRawFile } from './upload'

const COMPONENT_NAME = 'ElUploadDrag'

defineOptions({
  name: COMPONENT_NAME,
})

const props = defineProps(uploadDraggerProps)
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

const getFile = (entry: FileSystemFileEntry): Promise<File> => {
  return new Promise((resolve, reject) => entry.file(resolve, reject))
}

const getAllFiles = async (
  entry: FileSystemEntry
): Promise<UploadRawFile[]> => {
  try {
    if (entry.isFile) {
      const file = (await getFile(
        entry as FileSystemFileEntry
      )) as UploadRawFile
      file.isDirectory = false
      return [file]
    }
    if (entry.isDirectory) {
      const dirReader = (entry as FileSystemDirectoryEntry).createReader()
      const getEntries = (): Promise<FileSystemEntry[]> => {
        return new Promise((resolve, reject) =>
          dirReader.readEntries(resolve, reject)
        )
      }

      const entries = await getEntries()
      const filePromises = entries.map((entry) =>
        getAllFiles(entry).catch(() => [])
      )

      const files = await Promise.all(filePromises)
      return flatten(files)
    }
  } catch {
    return []
  }
  return []
}

const onDrop = async (e: DragEvent) => {
  if (disabled.value) return
  dragover.value = false

  e.stopPropagation()

  const files = Array.from(e.dataTransfer!.files) as UploadRawFile[]
  const items = e.dataTransfer!.items || []

  if (props.directory) {
    const entries = Array.from(items)
      .map((item) => item?.webkitGetAsEntry?.())
      .filter((entry) => entry) as FileSystemEntry[]

    const allFiles = await Promise.all(entries.map(getAllFiles))
    emit('file', flatten(allFiles))
    return
  }

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
