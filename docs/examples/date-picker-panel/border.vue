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
import { computed, ref } from 'vue'
import { useElementSize } from '@vueuse/core'

const value = ref()
const containerRef = ref<HTMLElement>()

const { width } = useElementSize(containerRef)

const isNarrow = computed(() => width.value < 815)
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
