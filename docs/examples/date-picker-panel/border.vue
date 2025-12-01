<template>
  <div
    ref="containerRef"
    :class="['date-picker--example', { 'is-narrow': isNarrow }]"
  >
    <div class="text-center">No border:</div>
    <el-divider />
    <div class="date-picker--flex-container">
      <div class="p-[20px]">
        <el-date-picker-panel v-model="value" :border="false" />
      </div>
      <el-divider
        class="divider"
        :direction="isNarrow ? 'horizontal' : 'vertical'"
      />
      <el-card>
        <el-date-picker-panel v-model="value" :border="false" />
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const value = ref()
const containerRef = ref<HTMLElement>()
const width = ref(0)

const isNarrow = computed(() => width.value < 815)

const isClient =
  typeof window !== 'undefined' && typeof document !== 'undefined'
let observer: ResizeObserver | undefined
if (isClient) {
  observer = new ResizeObserver((entries) => {
    const { width: containerWidth } = entries[0].contentRect
    width.value = containerWidth
  })
}

onMounted(() => {
  if (observer) {
    observer.observe(containerRef.value!)
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
    observer = undefined
  }
})
</script>

<style scoped>
.date-picker--flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}
.divider {
  height: auto;
}
</style>
