<template>
  <el-tooltip
    :append-to="targetElement"
    trigger="click"
    content="Append to .target"
    placement="top"
  >
    <el-button class="target">Click to open tooltip</el-button>
  </el-tooltip>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const targetElement = ref<string>('')
onMounted(() => {
  targetElement.value = '.target'
})
</script>
<style scoped>
.target {
  position: relative;
}
</style>
