<template>
  <textarea v-bind="$attrs" ref="inputRef" :class="ns.e('inner')" />
  <slot />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useNamespace } from '@element-plus/hooks'

defineOptions({
  name: 'ElInputTextarea',
})

const ns = useNamespace('textarea')
const inputRef = ref()

defineExpose({
  /**
   * @description textarea DOM ref
   */
  inputRef,
})
</script>
