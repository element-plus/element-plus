<template>
  <el-input-tag
    v-model="input"
    placeholder="Please input"
    aria-label="Please click the Enter key after input"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref<string[]>()
</script>
