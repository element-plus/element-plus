<template>
  <el-tooltip v-model:visible="visible">
    <template #content>
      <span>
        <p>Content</p>
      </span>
    </template>
    <span @mouseenter="visible = true" @mouseleave="visible = false"
      >Hover me</span
    >
  </el-tooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>
