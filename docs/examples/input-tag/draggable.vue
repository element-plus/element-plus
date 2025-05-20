<template>
  <el-input-tag v-model="input" draggable placeholder="Please input" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref<string[]>(['tag1', 'tag2', 'tag3'])
</script>
