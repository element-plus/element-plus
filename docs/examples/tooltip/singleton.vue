<template>
  <div>
    <el-button
      v-for="i in 3"
      @mouseover="(e) => (buttonRef = e.currentTarget)"
      @click="visible = !visible"
      >Click to open tooltip</el-button
    >
  </div>

  <el-tooltip
    ref="tooltipRef"
    v-model:visible="visible"
    :virtual-ref="buttonRef"
    trigger="click"
    popper-class="singleton-tooltip"
    :popper-options="{
      modifiers: [
        {
          name: 'computeStyles',
          options: {
            adaptive: false,
            enabled: false,
          },
        },
      ],
    }"
  >
    <template #content>
      <span> Some content </span>
    </template>
  </el-tooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const buttonRef = ref()
const tooltipRef = ref()

const visible = ref(false)
</script>

<style>
.singleton-tooltip {
  transition: transform 0.3s var(--el-transition-function-fast-bezier);
}
</style>
