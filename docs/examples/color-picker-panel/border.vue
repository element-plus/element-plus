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
import { computed, ref } from 'vue'
import { useElementSize } from '@vueuse/core'

const value = ref('#ff6900')
const containerRef = ref<HTMLElement>()

const { width } = useElementSize(containerRef)

const isNarrow = computed(() => width.value < 815)
</script>
