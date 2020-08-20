<template>
  <div
    :class="{
      'el-upload-dragger': true,
      'is-dragover': dragOver
    }"
    @drop.prevent="onDrop"
    @dragOver.prevent="onDragOver"
    @dragleave.prevent="dragOver = false"
  >
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, inject } from 'vue'

import type { ElUpload } from './upload'

export default defineComponent({
  name: 'ElUploadDrag',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['file'],
  setup(props, { emit }) {
    const uploader = inject('uploader', {} as ElUpload)
    const dragOver = ref(false)
    function onDragOver() {
      if(!dragOver.value) dragOver.value = true
    }

    function onDrop(e: DragEvent) {
      if (props.disabled || !uploader) return
      const accept = uploader.accept
      dragOver.value = false
      if (!accept) {
        emit('file', e.dataTransfer.files)
        return
      }
      emit('file', Array.from(e.dataTransfer.files).filter(file => {
        const { type, name } = file
        const extension = name.indexOf('.') > -1
          ? `.${ name.split('.').pop() }`
          : ''
        const baseType = type.replace(/\/.*$/, '')
        return accept.split(',')
          .map(type => type.trim())
          .filter(type => type)
          .some(acceptedType => {
            if (acceptedType.startsWith('.')) {
              return extension === acceptedType
            }
            if (/\/\*$/.test(acceptedType)) {
              return baseType === acceptedType.replace(/\/\*$/, '')
            }
            if (/^[^\/]+\/[^\/]+$/.test(acceptedType)) {
              return type === acceptedType
            }
            return false
          })
      }))
    }
    return {
      dragOver,
      onDragOver,
      onDrop,
    }
  },
})
</script>
