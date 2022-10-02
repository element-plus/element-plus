<script lang="ts" setup>
import { computed } from 'vue'
import { TinyColor } from '@ctrl/tinycolor'
import { useClipboard } from '@vueuse/core'
import { ElMessage } from 'element-plus'
import type { CSSProperties } from 'vue'

import type { HSV } from '@ctrl/tinycolor'

const props = defineProps<{
  // hsb
  hsv?: HSV
}>()

const hex = computed(() => {
  return new TinyColor(props.hsv).toHexString()
})

const styles = computed(() => {
  return {
    '--ep-c-bg': hex.value,
  } as CSSProperties
})

const { copy } = useClipboard()

const copyHex = () => {
  const text = hex.value?.toUpperCase() || ''
  copy(text)

  ElMessage.success({
    dangerouslyUseHTMLString: true,
    message: `<div class="flex justify-center items-center">Copy ${text}
      <span
      m="l-2"
      class="shadow-md inline-flex w-4 h-4 rounded-full" style="background-color: ${hex.value}" />
</div>`,
    grouping: true,
    type: 'success',
    showClose: true,
  })
}
</script>

<template>
  <div
    class="color-box cursor-pointer"
    w="1/9"
    h="8"
    :style="styles"
    text="xs white"
    font="mono"
    @click="copyHex()"
  />
</template>

<style scoped>
.color-box {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--ep-c-bg);
}
</style>
