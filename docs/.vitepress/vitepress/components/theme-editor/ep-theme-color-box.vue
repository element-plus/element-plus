<script lang="ts" setup>
import { computed } from 'vue'
import { useClipboard } from '@vueuse/core'
import { ElMessage } from 'element-plus'
import type { CSSProperties } from 'vue'
import { getColorValue } from '~/utils'

// import type { HSV } from '@ctrl/tinycolor'

const props = defineProps<{
  name: string
  // color: string
  // hsb
  // hsv?: HSV
}>()

const cssVarName = computed(() => `--el-color-${props.name}`)

const styles = computed(() => {
  return {
    '--ep-c-bg': `var(${cssVarName.value})`,
  } as CSSProperties
})

const { copy } = useClipboard()

const copyHex = () => {
  const color = getColorValue(props.name)
  copy(color)

  ElMessage.success({
    dangerouslyUseHTMLString: true,
    message: `<div class="flex justify-center items-center">Copy ${color}
      <span
      m="l-2"
      class="shadow-md inline-flex w-4 h-4 rounded-full" style="background-color: ${color}" />
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
    w="1/7"
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
