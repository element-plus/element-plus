<template>
  <div ref="containerRef">
    <div class="text-center">No border:</div>
    <el-divider />
    <div class="flex flex-wrap justify-center gap-4">
      <div class="p-5">
        <el-color-picker-panel v-model="value" :border="false" />
      </div>
      <el-divider
        class="h-auto"
        :direction="isNarrow ? 'horizontal' : 'vertical'"
      />
      <el-card>
        <el-color-picker-panel v-model="value" :border="false" />
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const value = ref('#ff6900')
const containerRef = ref<HTMLElement>()
const width = ref(0)

const isNarrow = computed(() => width.value < 815)

let observer: ResizeObserver | undefined

onMounted(() => {
  observer = new ResizeObserver(([entry]) => {
    const { width: containerWidth } = entry.contentRect
    width.value = containerWidth
  })
  observer.observe(containerRef.value!)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
    observer = undefined
  }
})
</script>
